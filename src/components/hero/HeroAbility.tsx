import { HeroAbility } from '@/models/heroes';
import Image from 'next/image';

interface HeroAbilityProps {
    ability: HeroAbility
    onClick: (item: HeroAbility) => void
    selectedName?: string
}

export default function HeroAbility({ ability, onClick, selectedName }: HeroAbilityProps) {
    const isSelected = selectedName === ability.dname;
    const selectedClassName = isSelected ? '' : '';
    return <div 
        onClick={() => onClick(ability)}
        className={`flex flex-col items-center cursor-pointer justify-between p-2 rounded ${selectedClassName}`}>
        <Image
            alt={ability.dname}
            width={50}
            height={50}
            src={`http://cdn.dota2.com${ability.img}`}/>
        <p className='text-sm mt-2 text-center'>{ability.dname}</p>
    </div>;
}