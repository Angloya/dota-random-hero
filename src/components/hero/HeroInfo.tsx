import { HeroAllStats } from '@/models/heroes';
import Image from 'next/image';
import StarIcon from '@/components/StarIcon';
import { attrsNames } from '@/constants/heroes';
import HeroInfoItem from './HeroInfoItem';
import HeroAbilities from './HeroAbilities';

interface HeroItemProps {
    hero: HeroAllStats
}

export default function HeroInfo({hero}: HeroItemProps) {
    const complexity = [];
    for (let i = 0; i < hero.complexity; i++) {
        complexity.push(i);
    }

    return (
        <div className='w-full md:w-[700px] p-6 bg-zinc-700 rounded flex items-center justify-center flex-col'>
            <h1 className='text-2xl mb-4'>{hero.localizedName}</h1>
            <Image priority className='rounded' src={`http://cdn.dota2.com/${hero.img}`} alt='hero' width={300} height={50} />

            <ul className='m-4 grid divide-y mb-8'>
                <HeroInfoItem name='Complexity'>
                    {complexity.map((item) =>
                        <StarIcon key={item} checked={true} />)}
                </HeroInfoItem>

                <HeroInfoItem name='Attribute'>
                    {attrsNames[hero.primaryAttr as keyof typeof attrsNames]}
                </HeroInfoItem>

                <HeroInfoItem name='Attack'>
                    {hero.attackType} ({hero.attackRange})
                </HeroInfoItem>

                <HeroInfoItem name='Roles'>
                    {hero.roles.join(', ')}
                </HeroInfoItem>
            </ul>

            <HeroAbilities abilities={hero.abilities}/>
        </div>
    );
}