export interface Recipe {
  id: string;
  title: string;
  emoji: string;
  servings: string;
  ingredients: string[];
  instructions: string[];
  tips?: string[];
  isExternal?: boolean;
  externalUrl?: string;
}

export interface RecipeCategory {
  id: string;
  label: string;
  emoji: string;
}

export type RecipeCategories = Record<string, Recipe[]>; 