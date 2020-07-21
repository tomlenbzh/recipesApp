import { RecipeDifficulty, RecipesDifficultyModel } from '../models/difficulty.model';

export const DifficultyData: RecipesDifficultyModel[] = [
  { id: RecipeDifficulty.VERY_EASY, label: 'Très facile' },
  { id: RecipeDifficulty.EASY, label: 'Facile' },
  { id: RecipeDifficulty.MEDIUM, label: 'Moyen' },
  { id: RecipeDifficulty.HARD, label: 'Difficile' },
];
