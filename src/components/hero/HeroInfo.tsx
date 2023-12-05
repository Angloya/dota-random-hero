import { HeroAllStats } from '@/models/heroes';
import Image from 'next/image';

interface HeroItemProps {
    hero: HeroAllStats
}
export default function HeroInfo({hero}: HeroItemProps) {
    return (
        <div className='p-6 bg-zinc-700 rounded flex items-center justify-center flex-col'>
            <h1 className='text-2xl mb-4'>{hero.localizedName}</h1>
            <Image priority className='rounded' src={`https://api.opendota.com${hero.img}`} alt='hero' width={300} height={50} />
        </div>
    );
}