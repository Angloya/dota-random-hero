import { HeroesStats } from '@/models/heroes';
import Image from 'next/image';
import Link from 'next/link';


interface SimularHeroesProps {
    similarHeroes: string;
    heroes: HeroesStats[];
}
export default function SimularHeroes({ heroes, similarHeroes }: SimularHeroesProps) {    
    const list = similarHeroes.split(',');

    const heroItem = (id: string) => {
        const hero = heroes.find((item) => item.id === Number(id));

        return hero &&
            <Link href={`/hero/${hero.id}`}>
                <Image
                    className='rounded'
                    src={`https://api.opendota.com${hero.img}`}
                    alt={hero.name}
                    width={150}
                    height={50} />
                <p className='m-2 text-center'>{hero.localizedName}</p>
            </Link>;
    };
    return (
        <div className='flex flex-col items-center mt-4 p-4 bg-zinc-700 rounded'>
            <p className='mb-4'>Simular heroes</p>
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