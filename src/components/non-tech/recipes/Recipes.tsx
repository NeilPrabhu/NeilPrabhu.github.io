import React, { useState, useMemo } from "react";
import { recipes, recipeCategories, Recipe } from "../../../features/recipes";
import RecipeCard from "./RecipeCard";
import RecipeSearch from "./RecipeSearch";
import { SearchFilters } from "./types";

const Recipes: React.FC = () => {
  const [activeTab, setActiveTab] = useState("breakfast");
  const [expandedRecipe, setExpandedRecipe] = useState<string | null>(null);
  const [filters, setFilters] = useState<SearchFilters>({
    searchTerm: "",
    selectedTags: [],
    selectedDietary: [],
    maxCookingTime: "",
    difficulty: ""
  });

  const toggleRecipe = (recipeId: string) => {
    setExpandedRecipe(expandedRecipe === recipeId ? null : recipeId);
  };

  // Extract all unique tags and dietary info from recipes
  const { availableTags, availableDietary } = useMemo(() => {
    const allRecipes = Object.values(recipes).flat();
    const tags = new Set<string>();
    const dietary = new Set<string>();

    allRecipes.forEach(recipe => {
      recipe.tags?.forEach(tag => tags.add(tag));
      recipe.dietaryInfo?.forEach(diet => dietary.add(diet));
    });

    return {
      availableTags: Array.from(tags).sort(),
      availableDietary: Array.from(dietary).sort()
    };
  }, []);

  // Filter recipes based on search criteria
  const filteredRecipes = useMemo(() => {
    return recipes[activeTab]?.filter((recipe: Recipe) => {
      // Text search
      if (filters.searchTerm) {
        const searchLower = filters.searchTerm.toLowerCase();
        const matchesText = 
          recipe.title.toLowerCase().includes(searchLower) ||
          recipe.ingredients.some(ing => ing.toLowerCase().includes(searchLower)) ||
          recipe.instructions.some(inst => inst.toLowerCase().includes(searchLower)) ||
          recipe.tags?.some(tag => tag.toLowerCase().includes(searchLower)) ||
          recipe.dietaryInfo?.some(diet => diet.toLowerCase().includes(searchLower));
        
        if (!matchesText) return false;
      }

      // Tags filter
      if (filters.selectedTags.length > 0) {
        const hasSelectedTag = filters.selectedTags.some(tag => 
          recipe.tags?.includes(tag)
        );
        if (!hasSelectedTag) return false;
      }

      // Dietary filter
      if (filters.selectedDietary.length > 0) {
        const hasSelectedDietary = filters.selectedDietary.some(diet => 
          recipe.dietaryInfo?.includes(diet)
        );
        if (!hasSelectedDietary) return false;
      }

      // Cooking time filter
      if (filters.maxCookingTime && recipe.cookingTime) {
        const timeInMinutes = parseInt(recipe.cookingTime.match(/\d+/)?.[0] || "0");
        const maxTime = parseInt(filters.maxCookingTime);
        if (timeInMinutes > maxTime) return false;
      }

      // Difficulty filter
      if (filters.difficulty && recipe.difficulty !== filters.difficulty) {
        return false;
      }

      return true;
    }) || [];
  }, [activeTab, filters]);

  const hasActiveFilters = filters.searchTerm || 
    filters.selectedTags.length > 0 || 
    filters.selectedDietary.length > 0 || 
    filters.maxCookingTime || 
    filters.difficulty;

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
      <div className="flex items-center mb-4 sm:mb-6">
        <span className="text-xl sm:text-2xl mr-2 sm:mr-3">🍴</span>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Recipes</h3>
        <span className="ml-auto text-sm text-gray-500">
          {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''}
          {hasActiveFilters && ` (filtered)`}
        </span>
      </div>

      {/* Search and Filter */}
      <RecipeSearch
        filters={filters}
        onFiltersChange={setFilters}
        availableTags={availableTags}
        availableDietary={availableDietary}
      />

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6 border-b border-gray-200 pb-1">
        {recipeCategories.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-t-lg text-sm sm:text-base font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? "bg-blue-50 text-blue-700 border-b-2 border-blue-700"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            <span>{tab.emoji}</span>
            <span>{tab.label}</span>
            <span className="text-xs bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded-full">
              {recipes[tab.id]?.length || 0}
            </span>
          </button>
        ))}
      </div>

      {/* Recipe Content */}
      <div className="space-y-3 sm:space-y-4">
        {filteredRecipes.map((recipe: Recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isExpanded={expandedRecipe === recipe.id}
            onToggle={() => toggleRecipe(recipe.id)}
          />
        ))}
      </div>

      {filteredRecipes.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">
            {hasActiveFilters ? "🔍" : "🍽️"}
          </span>
          <p className="text-sm sm:text-base text-gray-500 italic">
            {hasActiveFilters 
              ? "No recipes match your current filters. Try adjusting your search criteria."
              : "No recipes available for this category yet!"
            }
          </p>
          {hasActiveFilters && (
            <button
              onClick={() => setFilters({
                searchTerm: "",
                selectedTags: [],
                selectedDietary: [],
                maxCookingTime: "",
                difficulty: ""
              })}
              className="mt-3 text-blue-600 hover:text-blue-800 underline"
            >
              Clear all filters
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Recipes; 