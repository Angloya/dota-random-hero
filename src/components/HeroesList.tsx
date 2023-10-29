import { HeroesStats } from '@/models/heroes'
import Image from 'next/image'

interface HeroesListProps {
    heroes: HeroesStats[]
}

export default function HeroesList({ heroes }: HeroesListProps) {
    return <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
        {heroes.map((hero: HeroesStats) => 
            <li key={hero.id} className='text-center cursor-pointer bg-neutral-700 rounded hover:bg-neutral-500'>
                <Image className='rounded' src={`https://api.opendota.com${hero.img}`} alt={hero.name} width={200} height={50}/>
                <p className='m-2'>{hero.localizedName}</p>
            </li>
        )}
    </ul>
}