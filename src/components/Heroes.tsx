"use client"

import HeroesList from "@/components/HeroesList"
import HeroesSettings from "@/components/HeroesSettings"
import { HeroesStats, HeroesChooseSettings } from '@/models/heroes'
import { useState, createContext } from 'react';
import RandomHero from "./RandomHero";
import { getRandom } from "@/helpers/randomNumber";

interface HeroesProps {
    heroes: HeroesStats[]
}


export const SettingsContext = createContext<HeroesChooseSettings | null>(null);

export default function Heroes({ heroes }: HeroesProps) {
    const [settings, setSettings] = useState<HeroesChooseSettings>({ ownPool: false });
    const [selectedList, setSelectedList] = useState<HeroesStats[]>([]);

    const changeSettings = (setting: HeroesChooseSettings) => {
        setSettings((oldSettings) => {
            return { ...oldSettings, ...setting }
        })
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
        setSelectedList([])
    }

    const getRandomHero = (): HeroesStats => {
        if (settings.ownPool) {
            const id = getRandom(0, selectedList.length - 1);
            return selectedList[id]
        } else {
            const id = getRandom(0, heroes.length - 1);
            return heroes[id]
        }
    }

    return <>
        <SettingsContext.Provider value={settings}>
            <div className="flex flex-col">
                <RandomHero getRandomHero={getRandomHero} />
                <HeroesSettings
                    settings={settings}
                    reset={reset}
                    changeSettings={changeSettings} />
            </div>

            <HeroesList {...heroesListProps} />
        </SettingsContext.Provider>
    </>
}