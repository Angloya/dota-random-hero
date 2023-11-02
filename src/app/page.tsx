import { Suspense } from "react"
import Heroes from "@/components/Heroes"
import { getHeroesData } from "@/api/heroesApi"
import { HeroesStats } from '@/models/heroes'

export default async function HeroPage() {
  const heroes = await getHeroesData<HeroesStats[]>({ path: '/all' })

  return <Suspense fallback={<div>Loading...</div>}>
    <h1 className="text-center text-2xl mb-6">Random hero</h1>
    <Heroes heroes={heroes} />
  </Suspense>
}