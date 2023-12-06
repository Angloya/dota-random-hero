import { Suspense } from 'react';
import { getHeroesData } from '@/api/heroesApi';
import { HeroAllStats } from '@/models/heroes';
import HeroInfo from '@/components/hero/HeroInfo';
import SimularHeroes from '@/components/hero/SimularHeroes';
import { HeroesData } from '@/models/heroes';

export default async function HeroPage({ params }: { params: { id: string } }) {
    const hero = await getHeroesData<HeroAllStats>({ path: `/${params.id}` });
    const heroes = await getHeroesData<HeroesData>({ path: '/all' });

    return <Suspense fallback={<div>Loading...</div>}>
        <div className='h-full min-h-full flex flex-col items-center'>
            <HeroInfo hero={hero} />
            <SimularHeroes similarHeroes={hero.similarHeroes} heroes={heroes.heroes} />
        </div>
    </Suspense>;
}