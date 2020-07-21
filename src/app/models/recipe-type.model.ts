export enum RecipeType {
  STARTER,
  COURSE,
  DESSERT,
  APPETIZER,
  SAUCE,
  SIDE,
  DRINK
}

export interface RecipeTypeModel {
  id: RecipeType;
  label: string;
}
