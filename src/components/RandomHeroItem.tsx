'use client'

import { HeroesStats } from '@/models/heroes'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useRef } from 'react';
import '@/assets/styles/heroes.css';

interface HeroProps {
    hero: HeroesStats
}

export default function RandomHeroItem({ hero }: HeroProps) {
    const router = useRouter();
    const nodeRef = useRef(null)

    const selectHero = () => {
        router.push('/hero')
    }

    return <SwitchTransition>
        <CSSTransition
            classNames="alert"
            timeout={500}
            key={hero.id}
            nodeRef={nodeRef}
        >
            <div ref={nodeRef} onClick={selectHero} className='flex flex-col cursor-pointer'>
                <Image className='rounded' src={`https://api.opendota.com${hero.img}`} alt={hero.name} width={300} height={50} />
                <p className='m-2 text-center'>{hero.localizedName}</p>
            </div>
        </CSSTransition>
    </SwitchTransition>
}