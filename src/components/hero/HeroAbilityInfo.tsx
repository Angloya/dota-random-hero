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

    const isOddAttrib = ability.attrib.length % 2;
    return <div className='w-full my-2'>
        <div className='mb-2'>
            <p className='mb-2 text-center'>Description</p>
            <p>{ability.desc}</p>
        </div>
  
        <p className='mb-2'>Behavior: {ability.behavior}</p>

        {ability.attrib.length > 0 && <div>
            <p className='text-center mb-2'>Attributes</p>
            <ul className={'grid grid-cols-2 divide-x-2 divide-y-2 border-b-2 border-r-2 2'}>
                {
                    ability.attrib.map((item) => {
                        return <li className={`flex-col justify-center items-center p-2 ${isOddAttrib && 'last:col-span-2'} first:border-l-2 first:border-t-2`} key={item.key}>
                            <p className='text-center'>{item.header}</p>
                            <div className='flex flex-col items-center justify-center px-2'>{getParsedValue(item.value)}</div>
                        </li>;
                    })
                }
            </ul>
        </div>}
    </div>;
}