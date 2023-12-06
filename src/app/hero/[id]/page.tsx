import { Suspense } from 'react';
import { getHeroesData } from '@/api/heroesApi';
import { HeroAllStats } from '@/models/heroes';
import HeroInfo from '@/components/hero/HeroInfo';
import SimularHeroes from '@/components/hero/SimularHeroes';
import { HeroesData } from '@/models/heroes';
import PageLoader from '@/components/PageLoader';
import Link from 'next/link';

export default async function HeroPage({ params }: { params: { id: string } }) {
    const hero = await getHeroesData<HeroAllStats>({ path: `/${params.id}` });
    const heroes = await getHeroesData<HeroesData>({ path: '/all' });

    return <Suspense fallback={<PageLoader />}>
        <div className='h-full min-h-screen flex flex-col items-center'>
            <Link className="mb-4 rounded cursor-pointer flex flex-col justify-center items-center" href='/'>
                <span className='flex items-center'>
                    <svg className="w-4 h-4 text-white mr-2 mt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>
                    Get a random hero</span>
            </Link>
            <HeroInfo hero={hero} />
            {hero.similarHeroes  && <SimularHeroes similarHeroes={hero.similarHeroes} heroes={heroes.heroes} />}
        </div>
    </Suspense>;
}