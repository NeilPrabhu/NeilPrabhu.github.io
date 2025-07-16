import React, { useState } from "react";
import { recipes, recipeCategories, Recipe } from "../../../features/recipes";
import RecipeCard from "./RecipeCard";

const Recipes: React.FC = () => {
  const [activeTab, setActiveTab] = useState("breakfast");
  const [expandedRecipe, setExpandedRecipe] = useState<string | null>(null);

  const toggleRecipe = (recipeId: string) => {
    setExpandedRecipe(expandedRecipe === recipeId ? null : recipeId);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
      <div className="flex items-center mb-4 sm:mb-6">
        <span className="text-xl sm:text-2xl mr-2 sm:mr-3">🍴</span>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Recipes</h3>
      </div>

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
          </button>
        ))}
      </div>

      {/* Recipe Content */}
      <div className="space-y-3 sm:space-y-4">
        {recipes[activeTab]?.map((recipe: Recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            isExpanded={expandedRecipe === recipe.id}
            onToggle={() => toggleRecipe(recipe.id)}
          />
        ))}
      </div>

      {recipes[activeTab]?.length === 0 && (
        <div className="text-center py-8 sm:py-12">
          <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">🍽️</span>
          <p className="text-sm sm:text-base text-gray-500 italic">No recipes available for this category yet!</p>
        </div>
      )}
    </div>
  );
};

export default Recipes; 