import { RecipeTypeModel, RecipeType } from '../models/recipe-type.model';

export const TypesData: RecipeTypeModel[] = [
  { id: RecipeType.APPETIZER, label: 'Amuse bouche' },
  { id: RecipeType.COURSE, label: 'Plat' },
  { id: RecipeType.DESSERT, label: 'Dessert' },
  { id: RecipeType.DRINK, label: 'Boisson' },
  { id: RecipeType.SAUCE, label: 'Sauce' },
  { id: RecipeType.SIDE, label: 'Accompagnement' },
  { id: RecipeType.STARTER, label: 'Entrée' },
];
