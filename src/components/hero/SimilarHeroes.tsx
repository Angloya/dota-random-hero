import { HeroesStats } from '@/models/heroes';
import Image from 'next/image';
import Link from 'next/link';


interface SimilarHeroesProps {
    similarHeroes: string;
    heroes: HeroesStats[];
}
export default function SimilarHeroes({ heroes, similarHeroes }: SimilarHeroesProps) {    
    const list = similarHeroes.split(',');

    const heroItem = (id: string) => {
        const hero = heroes.find((item) => item.id === Number(id));

        return hero &&
            <Link href={`/hero/${hero.id}`}>
                <Image
                    className='rounded'
                    src={`http://cdn.dota2.com${hero.img}`}
                    alt={hero.name}
                    width={150}
                    height={50} />
                <p className='m-2 text-center'>{hero.localizedName}</p>
            </Link>;
    };
    return (
        <div className='flex flex-col items-center mt-4 p-4 bg-zinc-700 rounded'>
            <p className='mb-4'>Similar heroes</p>
            <ul className='grid grid-cols-3 gap-2'>
                {list.map((id) =>
                    <li key={id}>
                        {heroItem(id)}
                    </li>
                )}
            </ul>
        </div>
 
    );
}