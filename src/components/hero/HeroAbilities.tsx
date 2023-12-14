'use client';

import {useState} from 'react';
import { HeroAbility } from '@/models/heroes';
import HeroAbilityItem from './HeroAbility';
import HeroAbilityInfo from './HeroAbilityInfo';

interface HeroAbilitiesProps {
    abilities: HeroAbility[]
}

export default function HeroAbilities({ abilities }: HeroAbilitiesProps) {
    const [abilityData, setAbilityData] = useState<HeroAbility>();

    const onAbilityClick = (item: HeroAbility) => {
        setAbilityData((current) => {
            if (current?.dname === item.dname) {
                return; 
            }
            return item;
        });
    }; 
    
    return <div>
        <ul className={`grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-${abilities.length}`}>
            {
                abilities.map((ability, idx) =>
                    <li key={ability.dname + idx}>
                        <HeroAbilityItem ability={ability} onClick={onAbilityClick} selectedName={abilityData?.dname} />
                    </li>)
            }
        </ul>
        {abilityData && <HeroAbilityInfo ability={abilityData}/>}
    </div>;
}