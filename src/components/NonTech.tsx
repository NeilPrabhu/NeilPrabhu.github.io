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
        id: "scrambled-egg-skillet",
        title: "Scrambled Egg & Veggie Skillet",
        emoji: "🍳",
        servings: "1 Serving",
        ingredients: [
          "3 egg whites + 1 whole egg",
          "1/4 cup onion, chopped",
          "1/4 cup bell pepper, chopped",
          "1/4 cup spinach, chopped",
          "1 tsp olive oil or nonstick spray",
          "Salt & black pepper to taste",
          "1/4 tsp turmeric (optional)"
        ],
        instructions: [
          "**Prep veggies:** Chop onion, bell pepper, and spinach",
          "**Heat oil:** Heat oil in a nonstick pan over medium heat",
          "**Sauté veggies:** Cook vegetables for 2–3 mins until softened",
          "**Whisk eggs:** In a bowl, whisk eggs with salt, pepper, turmeric (optional)",
          "**Scramble:** Pour eggs into pan, scramble gently until fully cooked",
          "**Serve hot:** Great with cucumber slices or cinnamon water"
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
      },
      {
        id: "paneer-veggie-rice",
        title: "Paneer Veggie Rice Bowl",
        emoji: "🍛",
        servings: "4 Servings (using 400g paneer)",
        ingredients: [
          "400g low-fat paneer, cubed",
          "160g brown rice, uncooked (~2 cups cooked)",
          "1 cup onion, chopped",
          "1 cup bell pepper, chopped",
          "1 cup tomato, chopped",
          "1 cup spinach or zucchini (optional)",
          "4 tsp olive oil",
          "1 tsp turmeric",
          "1 tsp cumin powder",
          "3/4 tsp chili powder (optional)",
          "Salt & black pepper to taste",
          "Juice of 1 lemon",
          "Fresh coriander (optional)"
        ],
        instructions: [
          "**Cook rice:** Cook brown rice in 2x water (20–25 mins), fluff and set aside",
          "**Sauté vegetables:** Heat 2 tsp olive oil in a pan, sauté onion, bell pepper, tomato, and optional spinach until soft (~4 mins)",
          "**Add paneer:** Add remaining oil and stir in paneer cubes + spices (turmeric, cumin, chili, salt, pepper)",
          "**Cook paneer:** Cook for 5–6 mins, stirring gently to avoid breaking paneer",
          "**Assemble:** Divide rice + paneer mix into 4 portions. Squeeze lemon and garnish with coriander"
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
      },
      {
        id: "chicken-curry-potatoes",
        title: "Simple Chicken Curry + Boiled Potatoes",
        emoji: "🍛",
        servings: "5 Servings",
        ingredients: [
          "**Protein & Carbs:** 680g chicken breast, cubed",
          "850g potatoes (~170g per serving = 5 medium potatoes), cubed",
          "**Curry Base:** 1 1/4 cups onion, chopped (1–2 medium onions)",
          "1 1/4 cups tomato, chopped (2 Roma tomatoes)",
          "5 cloves garlic, minced",
          "1.5-inch ginger, grated or minced",
          "5 tsp olive oil, divided",
          "1.25 tsp turmeric",
          "1.25 tsp cumin powder",
          "1.25 tsp coriander powder",
          "1 tsp garam masala",
          "1/2–1 tsp chili powder (optional)",
          "Salt & pepper, to taste",
          "Juice of 1–2 lemons",
          "Fresh coriander (optional)"
        ],
        instructions: [
          "**Boil the Potatoes:** Cube 850g potatoes. Boil in salted water until fork-tender (~8–10 mins). Drain and set aside (or roast if preferred)",
          "**Sear the Chicken:** Heat 2.5 tsp olive oil in a nonstick pan. Sear chicken in batches until browned and just cooked. Remove and set aside",
          "**Make the Curry Base:** Add remaining 2.5 tsp oil to the pan. Sauté onion, garlic, and ginger for 2–3 mins. Add chopped tomato, cook until soft (~3 mins). Stir in turmeric, cumin, coriander, chili, salt & pepper. Cook until fragrant (~1–2 mins)",
          "**Combine Chicken & Simmer:** Return chicken to the pan. Add 1/4 cup water and simmer for 4–5 mins. Finish with garam masala and lemon juice",
          "**Serve:** Divide into 5 containers. Add ~170g potatoes and a portion of curry to each. Garnish with coriander if desired"
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
      
      <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
        <div className="flex items-center mb-4 sm:mb-6">
          <span className="text-xl sm:text-2xl mr-2 sm:mr-3">🍴</span>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Recipes</h3>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6 border-b border-gray-200 pb-1">
          {tabs.map((tab) => (
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
          {recipes[activeTab]?.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md">
              <div
                className="p-4 sm:p-6 cursor-pointer"
                onClick={() => toggleRecipe(recipe.id)}
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
                      {expandedRecipe === recipe.id ? "Hide Recipe" : "View Recipe"}
                    </span>
                    <svg
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-blue-600 transition-transform duration-200 ${
                        expandedRecipe === recipe.id ? "rotate-180" : ""
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

              {expandedRecipe === recipe.id && (
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
          ))}
        </div>

        {recipes[activeTab]?.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <span className="text-3xl sm:text-4xl mb-3 sm:mb-4 block">🍽️</span>
            <p className="text-sm sm:text-base text-gray-500 italic">No recipes available for this category yet!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NonTech;