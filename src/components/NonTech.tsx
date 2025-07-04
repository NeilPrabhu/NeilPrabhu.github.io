import React, { useState } from "react";

interface Recipe {
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

const NonTech = () => {
  const [activeTab, setActiveTab] = useState("breakfast");
  const [expandedRecipe, setExpandedRecipe] = useState<string | null>(null);

  const recipes: Record<string, Recipe[]> = {
    breakfast: [
      {
        id: "tofu-bhurji",
        title: "Tofu Bhurji Bowl",
        emoji: "🍳",
        servings: "1 Serving",
        ingredients: [
          "120g firm tofu, crumbled",
          "1/4 cup onion, finely chopped",
          "1/4 cup tomato, chopped",
          "1/2 cup spinach or kale (optional)",
          "1/2 tsp turmeric powder",
          "1/4 tsp chili powder (optional)",
          "1/2 tsp cumin seeds",
          "1/4 tsp garam masala or coriander powder",
          "Salt to taste",
          "1 tsp olive oil",
          "Fresh coriander to garnish",
          "Lemon wedge for squeezing (optional)"
        ],
        instructions: [
          "**Prep Tofu:** Pat tofu dry with paper towel and crumble it with your hands or a fork",
          "**Sauté Veggies:** Heat 1 tsp olive oil in a pan. Add 1/2 tsp cumin seeds and let them sizzle (~10 sec). Add onion → sauté till translucent (~2 min). Add tomato → cook till soft (~2 min). Toss in spinach if using → cook till wilted",
          "**Spice It Up:** Add turmeric, chili powder (if using), garam masala, and salt. Stir well for ~30 seconds to toast the spices",
          "**Add Tofu:** Add crumbled tofu to the pan. Stir well so tofu soaks up all the spices and veggies. Cook for 4–5 minutes on medium, stirring occasionally",
          "**Finish & Serve:** Turn off heat. Squeeze fresh lemon juice and garnish with coriander"
        ]
      },
      {
        id: "protein-smoothie",
        title: "Protein-Powered Smoothie Bowl",
        emoji: "🥣",
        servings: "1 Serving",
        ingredients: [
          "1.25 scoops whey protein (vanilla or chocolate preferred)",
          "1/4 frozen banana (for texture)",
          "1/2 cup spinach",
          "1–1.5 tsp stevia or monk fruit sweetener",
          "1/4 cup cold water or ice",
          "Optional toppings: 1 tsp chia seeds, 1 tsp flaxseed, pinch of cinnamon"
        ],
        instructions: [
          "**Blend:** Add whey, banana, spinach, stevia, and ice/cold water to a blender. Blend until smooth and thick",
          "**Serve as Bowl:** Pour into a bowl",
          "**Top:** Add chia, flax, and sprinkle of cinnamon",
          "**Enjoy Immediately:** Great with a spoon, and highly satisfying!"
        ]
      },
      {
        id: "almond-croissant",
        title: "Almond Croissant Baked Oats",
        emoji: "🥐",
        servings: "External Recipe",
        ingredients: [],
        instructions: [],
        isExternal: true,
        externalUrl: "https://thehappypear.ie/plant-based-and-vegan-recipes/almond-corissant-baked-oats/"
      }
    ],
    lunch: [
      {
        id: "chicken-stir-fry",
        title: "Chicken Veggie Stir-Fry + Brown Rice or Potatoes",
        emoji: "🔄",
        servings: "1 Serving",
        ingredients: [
          "**Protein:** 100g chicken breast, thinly sliced",
          "1 clove garlic, minced",
          "1/4 tsp turmeric",
          "Salt & pepper to taste",
          "**Veggies:** 1/4 cup zucchini, sliced",
          "1/4 cup bell peppers, sliced",
          "1/4 cup onion, thinly sliced",
          "1 tsp olive oil",
          "**Carbs:** 40g brown rice, uncooked OR 170g potatoes, cubed",
          "**Optional:** 1–2 tsp tamari or coconut aminos",
          "Lemon juice or fresh coriander (for garnish)"
        ],
        instructions: [
          "**Marinate Chicken:** Toss sliced chicken in turmeric, garlic, salt, pepper. Let sit for 10–15 min",
          "**Cook Rice or Potatoes:** Rinse 40g rice and cook in 80–100ml water (~25 min) OR boil/roast 170g cubed potatoes until fork-tender",
          "**Stir-Fry Chicken:** Heat 1/2 tsp olive oil in pan. Cook chicken ~4–5 min per side until browned and cooked through. Remove and set aside",
          "**Sauté Veggies:** In same pan, add 1/2 tsp olive oil. Stir-fry zucchini, onion, bell peppers for ~4–5 min. Add cooked chicken + tamari, toss to coat",
          "**Assemble:** Plate rice or potatoes. Top with stir-fry. Garnish with lemon juice or chopped coriander"
        ]
      }
    ],
    dinner: [
      {
        id: "buddha-bowl",
        title: "Grilled Chicken Buddha Bowl Meal Prep",
        emoji: "🍽️",
        servings: "4 Servings",
        ingredients: [
          "**Protein:** 1.5 lbs (680g) chicken breast, boneless, skinless",
          "**Carbs:** 25 oz (708g) potatoes, cubed",
          "**Veggies:** 1½ to 2 cups broccoli florets",
          "1½ to 2 cups zucchini, chopped",
          "1 cup bell peppers, sliced",
          "2 handfuls spinach or kale (optional)",
          "**Fats:** 4 tsp olive oil (1 tsp per serving)",
          "**Spices:** 2 tsp turmeric, 1 tsp black pepper",
          "1½ tsp cumin powder or paprika, Salt to taste",
          "Juice of 1 lemon, Fresh coriander or parsley",
          "**Side:** 4 glasses of cinnamon water"
        ],
        instructions: [
          "**Cook Potatoes:** Wash and cube all potatoes. Boil in salted water for 8–10 minutes until fork-tender. Optional: toss in olive oil, paprika, and roast at 425°F (220°C) for 15 mins. Divide into 4 portions (~170g each)",
          "**Marinate Chicken:** Slice chicken breasts evenly. Mix turmeric, cumin, black pepper, salt, lemon juice, and olive oil. Coat chicken well. Marinate 10–15 min (or overnight)",
          "**Cook Chicken:** Grill or pan-sear on medium heat for 4–5 minutes per side until fully cooked. Slice and divide into 4 portions (~170g each)",
          "**Prep Veggies:** Steam or sauté broccoli, zucchini, and bell peppers until tender-crisp",
          "**Assemble Bowls:** Divide potatoes, chicken, and veggies among 4 containers. Garnish with coriander"
        ]
      }
    ],
    snacks: [
      {
        id: "hot-chocolate",
        title: "Healthy Hot Chocolate",
        emoji: "🍫",
        servings: "1 Serving",
        ingredients: [
          "1 cup (240ml) oat milk (unsweetened preferred)",
          "1 tbsp Ghirardelli cocoa powder (unsweetened)",
          "1/8 to 1/4 tsp cinnamon",
          "1–2 tsp erythritol / stevia / monk fruit sweetener",
          "1/2 tsp vanilla extract (optional but recommended)",
          "Pinch of salt (enhances chocolate flavor)"
        ],
        instructions: [
          "**Heat oat milk:** In a small saucepan, warm the oat milk on medium heat (don't boil)",
          "**Whisk in cocoa:** Add cocoa powder, cinnamon, and salt. Whisk until fully combined and smooth",
          "**Sweeten + flavor:** Stir in your sweetener of choice and vanilla extract. Taste and adjust sweetness",
          "**Optional Froth:** Use a milk frother or whisk vigorously for a café-style feel",
          "**Serve hot:** Pour into a mug, sprinkle a pinch of cinnamon on top"
        ],
        tips: [
          "If your cocoa is slightly bitter, a tiny splash of oat milk cream can balance it",
          "Want more protein? Stir in ½ scoop of chocolate or vanilla whey once off heat"
        ]
      },
      {
        id: "mung-dal",
        title: "Quick Mung Dal Side",
        emoji: "🥣",
        servings: "1 Serving (~10g Dal Raw)",
        ingredients: [
          "10g mung dal (yellow split) — soaked 30 min if time allows",
          "1/4 tsp turmeric",
          "Salt to taste",
          "1/4 tsp cumin seeds",
          "1/2 tsp ghee or olive oil",
          "1 clove garlic (optional, finely chopped)",
          "Pinch of asafoetida (hing) – optional but great for digestion",
          "1 tbsp chopped tomato or squeeze of lemon (for tang)",
          "Coriander leaves to garnish"
        ],
        instructions: [
          "**Boil the dal:** In a small pot, add mung dal + 1/2 cup water + turmeric + salt. Simmer covered for ~8 minutes until soft",
          "**Tadka (Tempering):** In a small pan, heat ghee/olive oil. Add cumin seeds (they should sizzle). Add garlic and asafoetida. Sauté until golden",
          "**Combine & Serve:** Add the tadka into the cooked dal. Stir in chopped tomato or lemon squeeze. Garnish with coriander"
        ],
        tips: [
          "Serve with 40g brown rice or 170g boiled potatoes",
          "Add grilled chicken breast and non-starchy veggies",
          "Enjoy with cinnamon water"
        ]
      },
      {
        id: "yogurt-bark",
        title: "Frozen Yogurt Bark",
        emoji: "🍓",
        servings: "2–3 Servings",
        ingredients: [
          "120g unflavored Greek yogurt",
          "180g berries (blueberries, strawberries, raspberries)",
          "8–10 almonds, crushed or chopped",
          "2–3 strands saffron",
          "1–2 tsp stevia or sweetener of choice",
          "1/4 tsp vanilla extract (optional)",
          "Parchment paper & tray or plate"
        ],
        instructions: [
          "**Mix the Yogurt Base:** In a bowl, mix yogurt, stevia, and vanilla",
          "**Spread on Tray:** Line a flat plate with parchment paper. Spread yogurt ~½ inch thick",
          "**Top It:** Scatter berries evenly. Add crushed almonds. Rub saffron between fingers and sprinkle on top",
          "**Freeze:** Freeze flat for 2–3 hours until completely firm",
          "**Break Into Pieces:** Once solid, break into chunks. Store in freezer-safe bag"
        ]
      }
    ]
  };

  const tabs = [
    { id: "breakfast", label: "Breakfast", emoji: "🌅" },
    { id: "lunch", label: "Lunch", emoji: "☀️" },
    { id: "dinner", label: "Dinner", emoji: "🌙" },
    { id: "snacks", label: "Snacks", emoji: "🍿" }
  ];

  const toggleRecipe = (recipeId: string) => {
    setExpandedRecipe(expandedRecipe === recipeId ? null : recipeId);
  };

  const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
    const isExpanded = expandedRecipe === recipe.id;

    if (recipe.isExternal) {
      return (
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-200 border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{recipe.emoji}</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{recipe.title}</h3>
                <p className="text-sm text-gray-500">External Recipe</p>
              </div>
            </div>
            <a
              href={recipe.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg font-medium transition-colors duration-200"
            >
              View Recipe
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          className="p-6 cursor-pointer"
          onClick={() => toggleRecipe(recipe.id)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{recipe.emoji}</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{recipe.title}</h3>
                <p className="text-sm text-gray-500">{recipe.servings}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-blue-600 font-medium">
                {isExpanded ? "Hide Recipe" : "View Recipe"}
              </span>
              <svg
                className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${
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
          <div className="px-6 pb-6 border-t border-gray-50">
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-lg mr-2">🛒</span>
                  Ingredients
                </h4>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-sm text-gray-700 leading-relaxed">
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
                <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-lg mr-2">👨‍🍳</span>
                  Instructions
                </h4>
                <ol className="space-y-3">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-medium text-blue-600 mr-2">{index + 1}.</span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: instruction.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        }}
                      />
                    </li>
                  ))}
                </ol>

                {recipe.tips && recipe.tips.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="text-lg mr-2">💡</span>
                      Tips
                    </h4>
                    <ul className="space-y-2">
                      {recipe.tips.map((tip, index) => (
                        <li key={index} className="text-sm text-gray-600 leading-relaxed">
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

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Non-Tech Related Stuff
      </h2>
      
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center mb-6">
          <span className="text-2xl mr-3">🍴</span>
          <h3 className="text-xl font-semibold text-gray-900">Recipes</h3>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-t-lg font-medium transition-colors duration-200 ${
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
        <div className="space-y-4">
          {recipes[activeTab]?.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {recipes[activeTab]?.length === 0 && (
          <div className="text-center py-12">
            <span className="text-4xl mb-4 block">🍽️</span>
            <p className="text-gray-500 italic">No recipes available for this category yet!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NonTech;