import { RecipeCost, RecipesCostModel } from '../models/cost.model';

export const CostData: RecipesCostModel[] = [
  { id: RecipeCost.CHEAP, label: 'Bon marché' },
  { id: RecipeCost.MEDIUM, label: 'Abordable' },
  { id: RecipeCost.EXPENSIVE, label: 'Cher' },
];
