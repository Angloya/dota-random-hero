'use client';

import { HeroesStats } from '@/models/heroes';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useRef } from 'react';
import '@/assets/styles/heroes.css';

interface HeroProps {
    hero?: HeroesStats
    isLoading: boolean
}

export default function RandomHeroItem({ hero, isLoading }: HeroProps) {
    const router = useRouter();
    const nodeRef = useRef(null);

    const selectHero = () => {
        if (hero) {
            router.push(`/hero/${hero?.id}`);
        }
    };

    return <SwitchTransition>
        <CSSTransition
            classNames="alert"
            timeout={500}
            key={hero?.id ?? 0}
            nodeRef={nodeRef}
        >

            <div ref={nodeRef} onClick={selectHero} className='flex flex-col cursor-pointer'>
                <>
                    <div className='w-[300px] h-[168.5px]'>
                        {(hero && !isLoading)
                            ? <Image className='rounded' src={`http://cdn.dota2.com${hero.img}`} alt={hero?.name ?? ''} width={300} height={50} />
                            : <Image priority className='rounded w-[300px] h-[168.5px]' src='/images/icons8-dota-2-256.svg' alt='hero' width={300} height={50} />}
                    </div>
                    <p className='m-2 text-center'>{hero && !isLoading ? hero?.localizedName : 'Your hero'}</p>
                </>
            </div>
        </CSSTransition>
    </SwitchTransition>;
}