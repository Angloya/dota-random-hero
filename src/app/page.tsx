import { Suspense } from "react"
import HeroesList from "@/components/HeroesList"
import { getHeroesData } from "@/api/heroesApi"
import { HeroesStats } from '@/models/heroes'

export default async function HeroPage() {
  const heroes = await getHeroesData<HeroesStats[]>({ path: '/all' })

  return <Suspense fallback={<div>Loading...</div>}>
    <HeroesList heroes={heroes} />
  </Suspense>
}