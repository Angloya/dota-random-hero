"use client"

import HeroesList from "@/components/HeroesList"
import HeroesSettings from "@/components/HeroesSettings"
import { HeroesStats, HeroesChooseSettings, HeroesFilters } from '@/models/heroes'
import { useState, createContext } from 'react';
import RandomHero from "./RandomHero";
import { getRandom } from "@/helpers/randomNumber";

interface HeroesProps {
    heroes: HeroesStats[];
    filters: HeroesFilters;
}


export const SettingsContext = createContext<HeroesChooseSettings | null>(null);

export default function Heroes({ heroes, filters }: HeroesProps) {
    const initialSettings = {
        ownPool: false,
        range: filters.range[0],
        roles: { ...filters.rolesParsed },
        selectedAllRoles: true,
        complexity: 0,
        types: [],
        showOnlySelected: false,
    }

    const [settings, setSettings] = useState<HeroesChooseSettings>(initialSettings);
    const [selectedList, setSelectedList] = useState<HeroesStats[]>(heroes);

    const changeSettings = (newSettings: HeroesChooseSettings) => {
        if (newSettings.ownPool) {
            reset();
            setSelectedList([]);
            setSettings({ ...initialSettings, ownPool: true });
        } else {
            const filtedByRange = heroes.filter((hero) => hero.range >= newSettings.range);
            const activeRoles: string[] = [];
            Object.entries(newSettings.roles).forEach(([role, active]) => {
                if (active) {
                    activeRoles.push(role)
                }
            }, []);

            const filtedByRoles = newSettings.selectedAllRoles || !activeRoles.length
                ? filtedByRange
                : filtedByRange.filter((hero) => activeRoles
                    .every((role) => hero.roles.includes(role)));

            const filtedByComplexity = newSettings.complexity
                ? filtedByRoles
                    .filter((hero) => newSettings.complexity === hero.complexity)
                : filtedByRoles;

            const filtedByType = newSettings.types.length
                ? filtedByComplexity
                    .filter((hero) => newSettings.types.includes(hero.primaryAttr))
                : filtedByComplexity;
            setSelectedList(filtedByType);
            setSettings(newSettings);
        }
    }

    const addHeroToList = (hero: HeroesStats) => {
        setSelectedList((items) => {
            const isSelectHero = items.some(({ id }) => hero.id === id)
            return isSelectHero
                ? items.filter(({ id }) => hero.id !== id) ?? []
                : [...items, hero]
        })
    }

    const heroesListProps = {
        heroes,
        addHeroToList,
        selectedList
    }

    const reset = () => {
        setSelectedList(heroes)
        setSettings(initialSettings)
    }

    const getRandomHero = (): HeroesStats => {
        const id = getRandom(0, selectedList.length - 1);
        return selectedList[id];
    }

    const isHasSelectedHeroes = selectedList.length > 0

    return <>
        <SettingsContext.Provider value={settings}>
            <div className="flex flex-col">
                {isHasSelectedHeroes
                    && <RandomHero getRandomHero={getRandomHero} />}
                {!isHasSelectedHeroes
                    && <p className="text-center">No heroes available, try changing filters</p>}
                <HeroesSettings
                    settings={settings}
                    filters={filters}
                    reset={reset}

                    changeSettings={changeSettings} />
            </div>

            <HeroesList {...heroesListProps} />
        </SettingsContext.Provider>
    </>
}