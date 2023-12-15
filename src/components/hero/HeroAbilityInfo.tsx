import { HeroAbility } from '@/models/heroes';

interface HeroAbilityInfoProps {
    ability: HeroAbility
}

export default function HeroAbilityInfo({ ability }: HeroAbilityInfoProps) {
    const getParsedValue = (value: string | string[]) => {
        if (Array.isArray(value)) {
            return <ul>
                {value.map((item, id) => <li key={item + id}>{id + 1}: {item}</li>)}
            </ul>;
        }
        return <p>{value}</p>;
    };
    return <div className='w-full my-2'>
        <div className='mb-2'>
            <p className='mb-2 text-center'>Description</p>
            <p>{ability.desc}</p>
        </div>
  
        <p className='mb-2'>Behavior: {ability.behavior}</p>

        <div>
            <p className='text-center'>Attributes</p>
            <div className='grid grid-cols-7 divide-x-2'>
                {
                    ability.attrib.map((item) => {
                        return <div className='flex-col justify-center items-center p-2' key={item.key}>
                            <p className='text-center'>{item.header}</p>
                            <div className='flex flex-col items-center justify-center'>{getParsedValue(item.value)}</div>
                        </div>;
                    })
                }
            </div>
        </div>
    </div>;
}