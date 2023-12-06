interface HeroInfoItemProps {
    children: React.ReactNode
    name: string
}

export default function HeroInfoItem({ name, children }: HeroInfoItemProps) {
    return <li className="grid grid-cols-5 md:grid-cols-3 divide-x items-center justify-between">
        <div className="mr-6 col-span-2 md:col-span-1 py-2">{name} </div>
        <div className='flex justify-end text-right md:col-span-2 p-2 col-span-3'>
            {children}
        </div>
    </li>;
}