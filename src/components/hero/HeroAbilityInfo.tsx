import { HeroAbility } from '@/models/heroes';

interface HeroAbilityInfoProps {
    ability: HeroAbility
}

export default function HeroAbilityInfo({ ability }: HeroAbilityInfoProps) {
    const getParsedValue = (value: string | string[]) => {
        if (Array.isArray(value)) {
            return <ul>
                {value.map((item, id) => <li key={item + id}>{item}</li>)}
            </ul>;
        }
        return <p>{value}</p>;
    };
    return <div className='w-full my-2'>
        <p>Description: {ability.desc}</p>
        <p>Behavior: {ability.behavior}</p>
        <div className='grid grid-cols-6'>
            {
                ability.attrib.map((item) => {
                    return <div key={item.key}>
                        <p>{item.header}</p>
                        {getParsedValue(item.value)}
                    </div>;
                })
            }
        </div>
    </div>;
}