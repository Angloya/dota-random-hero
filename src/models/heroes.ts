export interface HeroesStats {
  id: number;
  name: string;
  localizedName: string;
  primaryAttr: string;
  attackType: string;
  roles: string[];
  img: string;
  icon: string;
  heroId: number;
}

export interface HeroesAllStats {
  id: number;
  name: string;
  localizedName: string;
  primaryAttr: string;
  attackType: string;
  roles: string[];
  img: string;
  icon: string;
  baseHealth: number;
  baseHealthRegen: number;
  baseMana: number;
  baseManaRegen: number;
  baseArmor: number;
  baseMr: number;
  baseAttackMin: number;
  baseAttackMax: number;
  baseStr: number;
  baseAgi: number;
  baseInt: number;
  strGain: number;
  agiGain: number;
  intGain: number;
  attackRange: number;
  projectileSpeed: number;
  attackRate: number;
  baseAttackTime: number;
  attackPoint: number;
  moveSpeed: number;
  turnRate: number;
  cmEnabled: boolean;
  legs: number;
  dayVision: number;
  nightVision: number;
  heroId: number;
  turboPicks: number;
  turboWins: number;
}

export interface HeroItem {
  hint: string[];
  id: number;
  img: string;
  dname: string;
  qual: string;
  cost: number;
  notes: string;
  attrib: string[];
  mc: boolean;
  cd: number;
  lore: string;
  components: null | string[];
  created: boolean;
  charges: boolean;
}

export interface HeroItems {
  startGameItems: HeroItem;
  earlyGameItems: HeroItem;
  midGameItems: HeroItem;
  lateGameItems: HeroItem;
}

export enum HeroItemsName {
  'start_game_items' = 'startGameItems',
  'early_game_items' = 'earlyGameItems',
  'mid_game_items' = 'midGameItems',
  'late_game_items' = 'lateGameItems',
}
