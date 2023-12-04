import { Suspense } from 'react';
import { getHeroesData } from '@/api/heroesApi';
import { HeroesAllStats } from '@/models/heroes';

export default async function HeroPage({ params }: { params: { id: string } }) {
    const heroes = await getHeroesData<HeroesAllStats>({ path: `/${params.id}` });

    return <Suspense fallback={<div>Loading...</div>}>
        {heroes.localizedName}
    </Suspense>;
}