import { HeroesStats } from '@/models/heroes';
import HeroItem from '@/components/HeroItem';

interface HeroesGroupProps {
    heroes: HeroesStats[]
    addHeroToList: (hero: HeroesStats) => void
    selectedList: HeroesStats[]
}

export default function HeroesGroup({ heroes, addHeroToList, selectedList }: HeroesGroupProps) {
    const sortedHeroes = heroes.sort(({ localizedName: a }, { localizedName: b }) => {
        if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
        }
        if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
        }
        return 0;
    });

    return <ul className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3'>
        {sortedHeroes.map((hero: HeroesStats) =>
            <li key={hero.id} className='text-center cursor-pointer bg-neutral-700 rounded hover:bg-neutral-500'>
                {
                    <HeroItem 
                        hero={hero}
                        addHeroToList={addHeroToList}
                        selectedList={selectedList}
                    /> 
                }
            </li>
        )}
    </ul>;
}