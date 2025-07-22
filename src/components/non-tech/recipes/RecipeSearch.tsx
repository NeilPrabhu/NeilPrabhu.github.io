import React from "react";
import { SearchFilters } from "./types";

interface RecipeSearchProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  availableTags: string[];
  availableDietary: string[];
}

const RecipeSearch: React.FC<RecipeSearchProps> = ({
  filters,
  onFiltersChange,
  availableTags,
  availableDietary
}) => {
  const updateFilter = (key: keyof SearchFilters, value: string | string[]) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const toggleTag = (tag: string) => {
    const updated = filters.selectedTags.includes(tag)
      ? filters.selectedTags.filter(t => t !== tag)
      : [...filters.selectedTags, tag];
    updateFilter("selectedTags", updated);
  };

  const toggleDietary = (dietary: string) => {
    const updated = filters.selectedDietary.includes(dietary)
      ? filters.selectedDietary.filter(d => d !== dietary)
      : [...filters.selectedDietary, dietary];
    updateFilter("selectedDietary", updated);
  };

  const clearFilters = () => {
    onFiltersChange({
      searchTerm: "",
      selectedTags: [],
      selectedDietary: [],
      maxCookingTime: "",
      difficulty: ""
    });
  };

  const hasActiveFilters = filters.searchTerm || 
    filters.selectedTags.length > 0 || 
    filters.selectedDietary.length > 0 || 
    filters.maxCookingTime || 
    filters.difficulty;

  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search recipes, ingredients, or instructions..."
          value={filters.searchTerm}
          onChange={(e) => updateFilter("searchTerm", e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
        />
      </div>

      {/* Quick Filters Row */}
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm font-medium text-gray-700">Quick filters:</span>
        
        {/* Cooking Time */}
        <select
          value={filters.maxCookingTime}
          onChange={(e) => updateFilter("maxCookingTime", e.target.value)}
          className="text-xs px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">Any time</option>
          <option value="10">≤ 10 min</option>
          <option value="20">≤ 20 min</option>
          <option value="30">≤ 30 min</option>
          <option value="60">≤ 1 hour</option>
        </select>

        {/* Difficulty */}
        <select
          value={filters.difficulty}
          onChange={(e) => updateFilter("difficulty", e.target.value)}
          className="text-xs px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">Any difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-xs px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Tags Filter */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Tags:</h4>
        <div className="flex flex-wrap gap-2">
          {availableTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`text-xs px-2 py-1 rounded-full border transition-colors ${
                filters.selectedTags.includes(tag)
                  ? "bg-blue-100 text-blue-800 border-blue-200"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Dietary Info Filter */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Dietary preferences:</h4>
        <div className="flex flex-wrap gap-2">
          {availableDietary.map(dietary => (
            <button
              key={dietary}
              onClick={() => toggleDietary(dietary)}
              className={`text-xs px-2 py-1 rounded-full border transition-colors ${
                filters.selectedDietary.includes(dietary)
                  ? "bg-green-100 text-green-800 border-green-200"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {dietary}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeSearch; 