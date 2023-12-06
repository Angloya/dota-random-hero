interface HeroInfoItemProps {
    children: React.ReactNode
    name: string
}

export default function HeroInfoItem({ name, children }: HeroInfoItemProps) {
    return <li className="grid grid-cols-3 divide-x items-center justify-between">
        <div className="mr-6 py-2">{name} </div>
        <div className='flex justify-end py-2 col-span-2'>
            {children}
        </div>
    </li>;
}