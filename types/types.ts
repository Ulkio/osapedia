export interface IAltere {
  // numero: number;
  // nom: string;
  // rarete: string;
  // obtention: string;
  // sorts: ISort[];
  // zones: IZone[];
  // kromatique?: IAltere;
  id: number;
  numero: number;
  nom: string;
  rarity: string;
  obtention: string;
  value: string;
  actif: string;
  passif: string;
}
export interface ISort {
  id: number;
  numero: number;
  lvl: number;
  image: string;
  invocation: string;
  sort: string;
  type: string;
  description: string;
  effect: string;
  effect_crit: string;
  zone: string;
  pa_sort: number;
  min_Range: number;
  max_Range: number;
  PO_modif: boolean;
  crit: number;
  turn: number;
  target: number;
  cast: number;
  effet: string;
  min: string | number;
  max: string | number;
  min_Crit: string | number;
  max_Crit: string | number;
  altere?: IAltere;
}
export interface IItem {
  type: string;
  item: string;
  drops: IDrop[];
}
export interface IDrop {
  id: number;
  monstre: string;
  taux: number;
  level: number;
  panoplie: string;
}

export interface IZone {
  nom: string;
  region: string;
  alteres: IAltere[];
}
export interface IRecette {
  ingredients: string[];
}
export interface IStatistique {
  nom: string;
  valeur: number;
}
