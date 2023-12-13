import { HeroAbility } from '@/models/heroes';
import Image from 'next/image';

interface HeroAbilityProps {
    ability: HeroAbility
}

export default function HeroAbility({ ability }: HeroAbilityProps) {
    return <div className='flex flex-col items-center justify-between p-2 bg-neutral-800 rounded'>
        <Image
            alt={ability.dname}
            width={50}
            height={50}
            src={`https://api.opendota.com${ability.img}`}/>
        <p className='text-sm mt-2'>{ability.dname}</p>
        {/* <p>{ability.desc}</p>
        <p>{ability.behavior}</p>
        <p>{ability.bkbpierce}</p>
        <p>{ability.attrib.map((item) => <p key={item.key}>{item.header}{item.value}</p>)}</p> */}
    </div>;
}