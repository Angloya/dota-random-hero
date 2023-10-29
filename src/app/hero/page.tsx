import { Suspense } from "react"
import { getHeroesData } from "@/api/heroesApi"

export default async function HeroPage() {
    const heroes = await getHeroesData({path: '/all'})

    return <Suspense fallback={<div>Loading...</div>}>

    </Suspense>
}