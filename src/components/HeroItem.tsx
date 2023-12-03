'use client'

import { HeroesStats } from '@/models/heroes'
import Image from 'next/image'
import { SettingsContext } from "@/components/Heroes";
import { useContext } from 'react';
import { useRouter } from 'next/navigation';

interface HeroProps {
    hero: HeroesStats
    addHeroToList: (hero: HeroesStats) => void
    selectedList: HeroesStats[]
}

export default function HeroItem({ hero, addHeroToList, selectedList }: HeroProps) {
    const settings = useContext(SettingsContext);
    const router = useRouter()

    const selectHero = () => {
        if (settings?.ownPool) {
            addHeroToList(hero)
        } else {
            router.push(`/hero/${hero.id}`)
        }
    }

    const isSelectedHero = selectedList.some(({ id }) => hero.id === id)
    const showSelect = settings?.ownPool && isSelectedHero;
    const heroNotSelectedClass = !isSelectedHero && 'opacity-30';

    return <div onClick={selectHero} className='relative'>
        {showSelect &&
            <span className="absolute -right-1 -top-4 inline-flex items-center justify-center w-8 h-8 text-gray-800 bg-green-500 rounded-full">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                <span className="sr-only">Icon description</span>
            </span>
        }

        <Image className={`rounded ${heroNotSelectedClass}`} src={`https://api.opendota.com${hero.img}`} alt={hero.name} width={300} height={50} />
        <p className='m-2 h-12'>{hero.localizedName}</p>
    </div>
}