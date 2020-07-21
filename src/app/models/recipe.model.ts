import { RecipeTypeModel } from './recipe-type.model';
import { RecipesDifficultyModel } from './difficulty.model';
import { RecipeCost, RecipesCostModel } from './cost.model';
import { RecipeTime } from './time.model';
import { RecipeInstruction } from './instructions.model';

export interface RecipeModel {
  id: number;
  name: string;
  types: RecipeTypeModel[];
  images: string[];
  country: string;
  people: number;
  difficulty: RecipesDifficultyModel;
  time: RecipeTime;
  cost: RecipesCostModel;
  ingredients: string[];
  instructions: RecipeInstruction[];
}
