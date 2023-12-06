import { Suspense } from 'react';
import Heroes from '@/components/Heroes';
import { getHeroesData } from '@/api/heroesApi';
import { HeroesData } from '@/models/heroes';
import PageLoader from '@/components/PageLoader';

export default async function HeroPage() {
    const data = await getHeroesData<HeroesData>({ path: '/all' });

    const heroesRoles = {} as Record<string, boolean>;
    data?.settings?.roles.forEach((item) => {
        heroesRoles[item] = false;
    }, []);
    data.settings.rolesParsed = heroesRoles;

    return <Suspense fallback={<PageLoader/>}>
        <h1 className="text-center text-2xl mb-6">Random hero</h1>
        <Heroes heroes={data.heroes} filters={data.settings} />
    </Suspense>;
}