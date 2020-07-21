export enum RecipeCost {
  CHEAP,
  MEDIUM,
  EXPENSIVE
}

export interface RecipesCostModel {
  id: RecipeCost;
  label: string;
}
