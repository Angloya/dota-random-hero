import { HeroAbility } from '@/models/heroes';
import Image from 'next/image';

interface HeroAbilityProps {
    ability: HeroAbility
    onClick: (item: HeroAbility) => void
    selectedName?: string
}

export default function HeroAbility({ ability, onClick, selectedName }: HeroAbilityProps) {
    const isSelected = selectedName === ability.dname;
    const selectedClassName = isSelected ? 'bg-neutral-600' : 'bg-neutral-800';
    return <div 
        onClick={() => onClick(ability)}
        className={`flex flex-col items-center justify-between p-2 bg-neutral-800 rounded ${selectedClassName}`}>
        <Image
            alt={ability.dname}
            width={50}
            height={50}
            src={`https://api.opendota.com${ability.img}`}/>
        <p className='text-sm mt-2'>{ability.dname}</p>
    </div>;
}