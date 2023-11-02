import { HeroesStats } from '@/models/heroes'
import RandomHeroItem from './RandomHeroItem'
import { useState } from 'react'

interface RanomHeroProps {
    getRandomHero: () => HeroesStats
}

export default function RandomHero({ getRandomHero }: RanomHeroProps) {
    const [hero, setHero] = useState<HeroesStats>()

    const setRandomHero = () => {
        const hero = getRandomHero();
        setHero(hero)
    }
    return <div className="flex flex-col justify-center items-center">
        <button onClick={setRandomHero} className="mb-8 p-4 w-36 rounded bg-gray-500 cursor-pointer">Random Hero</button>

        {hero && <RandomHeroItem hero={hero} />}
    </div>
}