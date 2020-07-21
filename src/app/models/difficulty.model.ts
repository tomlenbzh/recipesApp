export enum RecipeDifficulty {
  VERY_EASY,
  EASY,
  MEDIUM,
  HARD
}

export interface RecipesDifficultyModel {
  id: RecipeDifficulty;
  label: string;
}
