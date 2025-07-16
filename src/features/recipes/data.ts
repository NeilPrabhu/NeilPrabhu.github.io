import { Recipe, RecipeCategory, RecipeCategories } from "./types";

export const recipeCategories: RecipeCategory[] = [
  { id: "breakfast", label: "Breakfast", emoji: "🌅" },
  { id: "lunch", label: "Lunch", emoji: "☀️" },
  { id: "dinner", label: "Dinner", emoji: "🌙" },
  { id: "snacks", label: "Snacks", emoji: "🍿" }
];

export const recipes: RecipeCategories = {
  breakfast: [
    {
      id: "whey-oats-porridge",
      title: "Whey & Oats Porridge Bowl",
      emoji: "🍳",
      servings: "1 Serving",
      ingredients: [
        "20g (1/4 cup) rolled oats",
        "1.25 scoops whey protein",
        "160ml (2/3 cup) water or oat/almond milk",
        "Cinnamon to taste",
        "**Optional toppings:**",
        "15g (1 tbsp) berries (fresh or frozen)",
        "1 tsp chia or flax seeds"
      ],
      instructions: [
        "**Heat liquid:** In a small saucepan, bring 2/3 cup water or milk to a boil",
        "**Cook oats:** Add 1/4 cup oats and cook over medium heat, stirring occasionally, for about 5–7 minutes, until soft and creamy",
        "**Cool slightly:** Remove from heat and let cool slightly (1–2 minutes)",
        "**Add protein:** Stir in 1.25 scoops whey protein slowly to prevent clumping",
        "**Season:** Add a pinch of cinnamon and stir well",
        "**Serve:** Top with berries and chia/flax seeds, if using. Enjoy warm or let cool and refrigerate for later!"
      ],
      tips: ["Perfect post-workout breakfast with high protein content"]
    },
    {
      id: "egg-white-veggie-hash",
      title: "Egg White Veggie Hash Bowl",
      emoji: "🍳",
      servings: "1 Serving",
      ingredients: [
        "3 egg whites",
        "60g (1/2 medium) bell pepper, chopped",
        "50g (1/3 small) zucchini, diced",
        "30g (1 generous handful) spinach",
        "1 tsp olive oil (or spray)",
        "Salt, pepper, chili flakes (to taste)",
        "**Optional:** 85g (1/2 medium) boiled russet potato, cubed (pre-workout boost)"
      ],
      instructions: [
        "**Heat oil:** Heat 1 tsp oil in a non-stick pan over medium heat",
        "**Sauté veggies:** Add the bell pepper and zucchini. Sauté for 4–5 minutes until softened",
        "**Add spinach:** Add the spinach and cook until wilted (about 1 minute)",
        "**Scramble eggs:** Pour in 3 egg whites, stirring gently to scramble with the veggies",
        "**Season:** Season with salt, pepper, and chili flakes to taste",
        "**Optional potato:** Add 1/2 boiled russet potato, cubed, and stir to warm through if using",
        "**Serve:** Serve hot"
      ],
      tips: ["Quick, savory, high-protein breakfast packed with veggies"]
    },
    {
      id: "tofu-bhurji",
      title: "Tofu Bhurji Bowl",
      emoji: "🍳",
      servings: "1 Serving",
      ingredients: [
        "120g (4.2 oz) firm tofu, crumbled",
        "40g (1/4 cup) onion, finely chopped",
        "30g (1/4 cup) tomato, chopped",
        "25g (1/2 cup) spinach or kale (optional)",
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
        "30g (1/4 medium) frozen banana (for texture)",
        "25g (1/2 cup) spinach",
        "1–1.5 tsp stevia or monk fruit sweetener",
        "60ml (1/4 cup) cold water or ice",
        "**Optional toppings:** 1 tsp chia seeds, 1 tsp flaxseed, pinch of cinnamon"
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
        "40g (1/4 cup) onion, chopped",
        "30g (1/4 cup) bell pepper, chopped",
        "25g (1/4 cup) spinach, chopped",
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
      id: "fish-brown-pasta",
      title: "Fish + Brown Pasta Bowl",
      emoji: "🐟",
      servings: "5–6 Servings",
      ingredients: [
        "600g (1.3 lbs) fish fillets (cod, tilapia, or salmon)",
        "240g (8.5 oz) brown pasta, dry",
        "400g (2 heads) broccoli, chopped",
        "300g (2 medium) bell peppers, sliced",
        "6 cloves garlic, minced",
        "2 lemons (juice + zest)",
        "6 tsp olive oil",
        "Salt, pepper, chili flakes to taste"
      ],
      instructions: [
        "**Cook pasta:** Cook pasta in salted water according to package directions, drain and toss with 2 tsp olive oil",
        "**Prep vegetables:** Steam or roast broccoli and bell peppers until tender-crisp",
        "**Cook fish:** Pan-sear or bake fish with garlic, lemon zest, salt, pepper, and 2 tsp olive oil (8–10 min until flakes easily)",
        "**Combine:** Flake cooked fish and combine with pasta and vegetables",
        "**Finish:** Drizzle with remaining 2 tsp olive oil and fresh lemon juice before serving"
      ],
      tips: ["Lean protein with slow carbs and veggie richness", "Great for meal prep - stores well in fridge for 3-4 days"]
    },
    {
      id: "chicken-stir-fry",
      title: "Chicken Veggie Stir-Fry + Brown Rice or Potatoes",
      emoji: "🔄",
      servings: "1 Serving",
      ingredients: [
        "**Protein:** 100g (3.5 oz) chicken breast, thinly sliced",
        "1 clove garlic, minced",
        "1/4 tsp turmeric",
        "Salt & pepper to taste",
        "**Veggies:** 30g (1/4 cup) zucchini, sliced",
        "30g (1/4 cup) bell peppers, sliced",
        "25g (1/4 cup) onion, thinly sliced",
        "1 tsp olive oil",
        "**Carbs:** 40g (1.4 oz) brown rice, uncooked OR 170g (6 oz) potatoes, cubed",
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
      servings: "4 Servings",
      ingredients: [
        "400g (14 oz) low-fat paneer, cubed",
        "160g (5.6 oz) brown rice, uncooked (~2 cups cooked)",
        "150g (1 cup) onion, chopped",
        "150g (1 cup) bell pepper, chopped",
        "150g (1 cup) tomato, chopped",
        "100g (1 cup) spinach or zucchini (optional)",
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
      id: "chicken-millet-khichdi",
      title: "Chicken Millet Khichdi",
      emoji: "🍛",
      servings: "5–6 Servings",
      ingredients: [
        "600g (1.3 lbs) chicken breast, cooked and shredded",
        "240g (1.25 cups) millets",
        "60g (1/4 cup) moong dal",
        "200g (2 medium) carrots, diced",
        "200g (1.5 cups) green beans, chopped",
        "300g (2 medium) bell peppers, chopped",
        "5cm (2-inch) ginger, grated",
        "1.5 tsp cumin seeds",
        "1.5 tsp turmeric",
        "Salt to taste",
        "Fresh coriander (optional)",
        "1–2 tsp oil"
      ],
      instructions: [
        "**Prep grains:** Rinse millet and moong dal together until water runs clear",
        "**Start base:** In a large pot, heat 1–2 tsp oil, add cumin seeds and ginger. Let sizzle for 10 seconds",
        "**Add vegetables:** Add all chopped vegetables (carrots, green beans, bell peppers) and sauté 3–4 min until slightly softened",
        "**Add grains:** Add rinsed millet + dal + turmeric + salt + 4–5 cups water. Stir well",
        "**Cook:** Pressure cook for 3-4 whistles or simmer covered until soft (15–20 min). Stir occasionally",
        "**Add chicken:** Mix in shredded chicken, let simmer 5 min to heat through and blend flavors",
        "**Serve:** Garnish with fresh coriander. Serve hot"
      ],
      tips: ["A comforting high-protein one-pot Indian meal", "Great for meal prep and freezes well"]
    },
    {
      id: "buddha-bowl",
      title: "Grilled Chicken Buddha Bowl Meal Prep",
      emoji: "🍽️",
      servings: "4 Servings",
      ingredients: [
        "**Protein:** 680g (1.5 lbs) chicken breast, boneless, skinless",
        "**Carbs:** 708g (25 oz) potatoes, cubed",
        "**Veggies:** 200g (1½ to 2 cups) broccoli florets",
        "200g (1½ to 2 cups) zucchini, chopped",
        "150g (1 cup) bell peppers, sliced",
        "50g (2 handfuls) spinach or kale (optional)",
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
        "**Protein & Carbs:** 680g (1.5 lbs) chicken breast, cubed",
        "850g (30 oz) potatoes (~170g per serving = 5 medium potatoes), cubed",
        "**Curry Base:** 200g (1¼ cups) onion, chopped (1–2 medium onions)",
        "200g (1¼ cups) tomato, chopped (2 Roma tomatoes)",
        "5 cloves garlic, minced",
        "3.8cm (1.5-inch) ginger, grated or minced",
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
        "240ml (1 cup) oat milk (unsweetened preferred)",
        "15g (1 tbsp) Ghirardelli cocoa powder (unsweetened)",
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
      servings: "1 Serving",
      ingredients: [
        "10g (0.35 oz) mung dal (yellow split) — soaked 30 min if time allows",
        "1/4 tsp turmeric",
        "Salt to taste",
        "1/4 tsp cumin seeds",
        "1/2 tsp ghee or olive oil",
        "1 clove garlic (optional, finely chopped)",
        "Pinch of asafoetida (hing) – optional but great for digestion",
        "15g (1 tbsp) chopped tomato or squeeze of lemon (for tang)",
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
        "120g (4.2 oz) unflavored Greek yogurt",
        "180g (6.3 oz) berries (blueberries, strawberries, raspberries)",
        "20g (8–10) almonds, crushed or chopped",
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