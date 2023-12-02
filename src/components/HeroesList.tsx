import { HeroesStats } from '@/models/heroes'
import { attrsOrder } from '@/constants/heroes'
import { sortHeroes } from "@/helpers/sortHeroes"
import HeroesGroup from './HeroesGroup'
import { SettingsContext } from "@/components/Heroes";
import { useContext } from 'react';

interface HeroesListProps {
    heroes: HeroesStats[]
    addHeroToList: (hero: HeroesStats) => void
    selectedList: HeroesStats[]
}

export default function HeroesList({ heroes, addHeroToList, selectedList }: HeroesListProps) {
    const sortedHeroes = sortHeroes(heroes);
    const settings = useContext(SettingsContext);

    return settings?.showOnlySelected ?
        <HeroesGroup
            heroes={selectedList}
            addHeroToList={addHeroToList}
            selectedList={selectedList}
        />

        : <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
            {
                Object.entries(sortedHeroes)
                    .sort(([a], [b]) => attrsOrder[a as keyof typeof attrsOrder] - attrsOrder[b as keyof typeof attrsOrder])
                    .map(([key, heroesList], index) =>
                        <li key={key + index} className='p-2 text-center bg-neutral-700 rounde'>
                            <p className=' text-neutral-50 text-xl p-4'>{key}</p>
                            <HeroesGroup
                                heroes={heroesList}
                                addHeroToList={addHeroToList}
                                selectedList={selectedList}
                            />
                        </li>
                    )
            }
        </ul>
}