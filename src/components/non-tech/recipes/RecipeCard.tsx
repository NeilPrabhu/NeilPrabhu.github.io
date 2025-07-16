import React from "react";
import { Recipe } from "../../../features/recipes";

interface RecipeCardProps {
  recipe: Recipe;
  isExpanded: boolean;
  onToggle: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, isExpanded, onToggle }) => {
  if (recipe.isExternal) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 hover:shadow-md transition-all duration-200 border border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="text-xl sm:text-2xl">{recipe.emoji}</span>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">{recipe.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500">External Recipe</p>
            </div>
          </div>
          <a
            href={recipe.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-sm font-medium transition-colors duration-200"
          >
            View Recipe
            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md">
      <div
        className="p-4 sm:p-6 cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="text-xl sm:text-2xl">{recipe.emoji}</span>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">{recipe.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500">{recipe.servings}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs sm:text-sm text-blue-600 font-medium">
              {isExpanded ? "Hide Recipe" : "View Recipe"}
            </span>
            <svg
              className={`w-4 h-4 sm:w-5 sm:h-5 text-blue-600 transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-50">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center">
                <span className="text-base sm:text-lg mr-1.5 sm:mr-2">🛒</span>
                Ingredients
              </h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {ingredient.startsWith("**") ? (
                      <span className="font-semibold text-gray-900">
                        {ingredient.replace(/\*\*/g, "")}
                      </span>
                    ) : (
                      <>• {ingredient}</>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center">
                <span className="text-base sm:text-lg mr-1.5 sm:mr-2">👨‍🍳</span>
                Instructions
              </h4>
              <ol className="space-y-2 sm:space-y-3">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    <span className="font-medium text-blue-600 mr-1.5 sm:mr-2">{index + 1}.</span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: instruction.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      }}
                    />
                  </li>
                ))}
              </ol>

              {recipe.tips && recipe.tips.length > 0 && (
                <div className="mt-4 sm:mt-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center">
                    <span className="text-base sm:text-lg mr-1.5 sm:mr-2">💡</span>
                    Tips
                  </h4>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {recipe.tips.map((tip, index) => (
                      <li key={index} className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        • {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeCard; 