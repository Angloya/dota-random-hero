import { HeroesChooseSettings, HeroesSettingsFilters } from '@/models/heroes'
import StarIcon from './StarIcon'
import { attrsNames } from '@/constants/heroes'

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

    const changeType = (value: string): void => {
        const types = [...settings.types];
        const index = types.indexOf(value);
        if (index > -1) {
            types.splice(index, 1);
        } else {
            types.push(value)
        }
        changeSettings({ ...settings, types })
    }

    const changeShowSelected = (): void => {
        changeSettings({ ...settings, showOnlySelected: !settings.showOnlySelected })
    }

    const changeComplexity = (level: number): void => {
        let complexity = level;
        if (level === settings.complexity) {
            complexity = 0;
        }
        changeSettings({ ...settings, complexity })
    }

    const selectedTypeClass = (item: string) => settings.types.includes(item) ? 'bg-green-300' : 'bg-white'

    const rangeIndex = filters.range.findIndex((range) => settings.range === range)

    return (<div className="flex flex-col m-4">
        {!settings.ownPool && <div>
            <p className='mb-4 text-center text-lg'>Filters:</p>
            <div className='grid grid-cols-1 max-lg:divide-y md:grid-cols-1 lg:grid-cols-3 lg:divide-x items-start'>
                <div className='flex flex-col items-center justify-center p-4'>
                    <p className='pb-2'>Roles:</p>
                    <ul className="text-sm grid grid-cols-3 gap-1 font-medium text-gray-900">
                        {Object.entries(settings.roles).map(([name, checked]) => (
                            <li key={name} className="w-full">
                                <div className="flex items-center justify-center">

                                    <input onChange={() => changeRoles(name)} id={name} type="checkbox" value="" checked={checked} className="hidden peer" required={false} />
                                    <label htmlFor={name} className="text-center w-full p-5 bg-white cursor-pointer peer-checked:bg-green-300">{name} {checked}</label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex flex-col items-center justify-between h-[100%] p-4'>

                    <div className='flex flex-col items-center justify-start'>
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

                    <div className='flex flex-col items-center justify-start'>
                        <p className='mt-8 pb-2'>Type:</p>
                        <ul className="text-sm grid grid-cols-2 gap-1 font-medium text-gray-900">
                            {Object.entries(attrsNames).map(([key, item]) => (
                                <li key={item} className="w-full">
                                    <div onClick={() => changeType(key)} className={`text-center w-full p-5 cursor-pointer ${selectedTypeClass(key)}`}>
                                        {item}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className='flex flex-col items-center justify-between p-4 h-[100%]'>
                    <div className='text-center'>
                        <label htmlFor="steps-range" className="block font-medium text-white text-base">Range no less than: {settings.range}</label>
                        <input onChange={changeRange} id="steps-range" type="range" min='0' max={filters.range.length - 1} value={rangeIndex} step="1" className="accent-green-300 mt-2 w-64 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                    </div>

                    <div className='mt-12'>
                        <button onClick={reset} className="px-4 py-2 bg-gray-600 rounded w-28">Reset</button>
                    </div>
                </div>
            </div>
        </div>}

        <div className='mt-12 flex flex-col md:flex-row justify-between'>
            <div className='flex items-center'>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input onChange={changeOwnPool} type="checkbox" checked={settings.ownPool} className="sr-only peer" />
                    <div className="w-12 h-6 bg-gray-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-300" />
                </label>
                <span className="ml-4 text-lg">Select your own pool heroes</span>
            </div>

            {!settings.ownPool && <div className='mt-4 flex items-center'>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input onChange={changeShowSelected} type="checkbox" checked={settings.showOnlySelected} className="sr-only peer" />
                    <div className="w-12 h-6 bg-gray-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-green-300" />
                </label>
                <span className="ml-4 text-lg">Show only selected heroes</span>
            </div>}
        </div>
    </div>)
}