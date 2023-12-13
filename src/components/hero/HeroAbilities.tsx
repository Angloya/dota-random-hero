import { HeroAbility } from '@/models/heroes';
import HeroAbilityItem from './HeroAbility';

interface HeroAbilitiesProps {
    abilities: HeroAbility[]
}

export default function HeroAbilities({ abilities }: HeroAbilitiesProps) {
    return <ul className={`grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-${abilities.length}`}>
        {
            abilities.map((ability, idx) => 
                <li key={ability.dname + idx}>
                    <HeroAbilityItem ability={ability}/>
                </li>) 
        }
    </ul>;
}