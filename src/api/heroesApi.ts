export async function getHeroesData<T>({ path, method = 'get' }: { path: string, method?: string }): Promise<T> {
    const res = await fetch(
        `https://dota-backend-uqrq.vercel.app/heroes${path}`,
        {method: method}
    );
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json() as T;
}