import { HeroAllStats } from '@/models/heroes';
import Image from 'next/image';
import StarIcon from '@/components/StarIcon';
import { attrsNames } from '@/constants/heroes';
import HeroInfoItem from './HeroInfoItem';

interface HeroItemProps {
    hero: HeroAllStats
}

interface HeroMainInfoItem {
    key: keyof HeroAllStats,
    name: string
}

const HeroMainInfo: HeroMainInfoItem[] = [
    {
        key: 'roles',
        name: 'Roles'
    },
    {
        key: 'primaryAttr',
        name: 'Attribute'
    },
    {
        key: 'attackType',
        name: 'Attack type'
    },
    {
        key: 'complexity',
        name: 'Complexity'
    }
];
export default function HeroInfo({hero}: HeroItemProps) {
    const complexity = [];
    for (let i = 0; i < hero.complexity; i++) {
        complexity.push(i);
    }
    return (
        <div className='p-6 bg-zinc-700 rounded flex items-center justify-center flex-col'>
            <h1 className='text-2xl mb-4'>{hero.localizedName}</h1>
            <Image priority className='rounded' src={`https://api.opendota.com${hero.img}`} alt='hero' width={300} height={50} />

            <ul className='m-4 grid divide-y'>
                <HeroInfoItem name='Complexity'>
                    <div className='flex'>
                        {complexity.map((item) =>
                            <StarIcon key={item} checked={true} />)}
                    </div>
                </HeroInfoItem>

                <HeroInfoItem name='Attribute'>
                    <div className='flex'>
                        {attrsNames[hero.primaryAttr as keyof typeof attrsNames]}
                    </div>
                </HeroInfoItem>

                <HeroInfoItem name='Attack'>
                    <div className='flex'>
                        {hero.attackType} ({hero.attackRange})
                    </div>
                </HeroInfoItem>

                <HeroInfoItem name='Roles'>
                    <div className='flex'>
                        {hero.roles.join(', ')}
                    </div>
                </HeroInfoItem>
            </ul>
        </div>
    );
}