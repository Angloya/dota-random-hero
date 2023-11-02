import { HeroesChooseSettings } from '@/models/heroes'

interface HeroesSettingsProps {
    changeSettings: (settings: HeroesChooseSettings) => void
    reset: () => void
    settings: HeroesChooseSettings
}

export default function HeroesSettings({ settings, changeSettings, reset }: HeroesSettingsProps) {
    const changeOwnPool = () => {
        changeSettings({ ownPool: !settings.ownPool })
    }

    return <div className="flex flex-col m-4">
        <div>
            <label className="relative inline-flex items-center mb-4 cursor-pointer">
                <input onChange={changeOwnPool} type="checkbox" checked={settings.ownPool} className="sr-only peer" />
                <div className="w-12 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600" />
            </label>
            <span className="ml-4 text-lg">Select your own pool heroes</span>
        </div>

        {
            settings.ownPool &&
            <button onClick={reset} className="px-4 py-2 bg-gray-600 rounded w-28">Reset</button>
        }
    </div>
}