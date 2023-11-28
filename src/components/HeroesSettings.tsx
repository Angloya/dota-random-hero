import { HeroesChooseSettings, HeroesSettingsFilters, HeroComplexity } from '@/models/heroes'
import StarIcon from './StarIcon'

interface HeroesSettingsProps {
    changeSettings: (settings: HeroesChooseSettings) => void
    reset: () => void
    settings: HeroesChooseSettings
    filters: HeroesSettingsFilters
}

export default function HeroesSettings({ settings, changeSettings, reset, filters }: HeroesSettingsProps) {
    const changeOwnPool = () => {
        changeSettings({ ...settings, ownPool: !settings.ownPool })
    }

    const changeRange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const index = event.target.value
        changeSettings({ ...settings, range: filters.range[Number(index)] })
    }

    const changeRoles = (key: string): void => {
        const roles = { ...settings.roles }
        roles[key] = !roles[key]
        changeSettings({ ...settings, roles, selectedAllRoles: false })
    }

    const changeComplexity = (level: number): void => {
        let complexity = level;
        if (level === settings.complexity) {
            complexity = 0;
        }
        changeSettings({ ...settings, complexity })
    }

    const rangeIndex = filters.range.findIndex((range) => settings.range === range)

    return (<div className="flex flex-col m-4">
        {!settings.ownPool && <div>
            <p className='mb-4 text-center text-lg'>Filters:</p>
            <div className='grid grid-cols-1 max-lg:divide-y md:grid-cols-1 lg:grid-cols-3 lg:divide-x items-start'>
                <div className='flex flex-col items-center justify-center p-4'>
                    <label htmlFor="steps-range" className="block font-medium text-white text-base">Range no less than: {settings.range}</label>
                    <input onChange={changeRange} id="steps-range" type="range" min='0' max={filters.range.length - 1} value={rangeIndex} step="1" className="mt-2 w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                </div>

                <div className='flex flex-col items-center justify-center p-4'>
                    <p className='pb-2'>Roles:</p>
                    <ul className="text-sm grid grid-cols-3 gap-1 font-medium text-gray-900">
                        {Object.entries(settings.roles).map(([name, checked]) => (
                            <li key={name} className="w-full">
                                <div className="flex items-center justify-center">

                                    <input onChange={() => changeRoles(name)} id={name} type="checkbox" value="" checked={checked} className="hidden peer" required={false} />
                                    <label htmlFor={name} className="text-center w-full p-5 bg-white cursor-pointer peer-checked:bg-green-300 hover:text-gray-600 peer-checked:text-gray-600 hover:bg-gray-50">{name} {checked}</label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex flex-col items-center justify-start p-4 h-[100%]'>
                    <p className='pb-2'>Complexity:</p>
                    <ul className="text-sm grid grid-cols-3 gap-1 font-medium text-gray-900">
                        {filters.complexity.map((item) => (
                            <li key={item} className="w-full">
                                <div onClick={() => changeComplexity(item)} className="flex items-center justify-center">
                                    <StarIcon checked={settings.complexity >= item} />
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>}

        <div>
            <button onClick={reset} className="px-4 py-2 bg-gray-600 rounded w-28">Reset</button>
        </div>

        <div className='mt-4 flex justify-center'>
            <label className="relative inline-flex items-center cursor-pointer">
                <input onChange={changeOwnPool} type="checkbox" checked={settings.ownPool} className="sr-only peer" />
                <div className="w-12 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600" />
            </label>
            <span className="ml-4 text-lg">Select your own pool heroes</span>
        </div>
    </div>)
}