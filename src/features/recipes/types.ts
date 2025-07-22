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
  // New fields for better organization
  cookingTime?: string;
  difficulty?: "Easy" | "Medium" | "Hard";
  tags?: string[];
  dietaryInfo?: string[];
}

export interface RecipeCategory {
  id: string;
  label: string;
  emoji: string;
}

export type RecipeCategories = Record<string, Recipe[]>; 