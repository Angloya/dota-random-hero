import { HeroesStats, SortedHeroes } from '@/models/heroes'
import { attrsNames } from '@/constants/heroes'

export const sortHeroes = (heroes: HeroesStats[]): SortedHeroes => {
    const heroesMap = new Map();
    for (let hero of heroes) {
        const primaryAttr = hero.primaryAttr as keyof typeof attrsNames;
        const attrName = attrsNames[primaryAttr];
        heroesMap.set(attrName, [...heroesMap.get(attrName) ?? [], hero])
    }

    return Object.fromEntries(heroesMap.entries())
}