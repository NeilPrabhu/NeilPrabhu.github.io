# Project Structure

This project follows a feature-based organization pattern for better maintainability and scalability.

## Directory Structure

```
src/
├── App.tsx                    # Main application component
├── main.tsx                   # Application entry point
├── vite-env.d.ts             # Vite environment types
├── components/               # All React components
│   ├── layout/              # Layout-related components
│   │   ├── Header.tsx       # Site header
│   │   ├── Navigation.tsx   # Navigation menu
│   │   └── index.ts         # Barrel exports
│   ├── portfolio/           # Portfolio section components
│   │   ├── About.tsx        # About section
│   │   ├── Education.tsx    # Education section
│   │   ├── Experience.tsx   # Experience section
│   │   ├── Projects.tsx     # Projects section
│   │   ├── Skills.tsx       # Skills section
│   │   ├── PrivacyPolicy.tsx # Privacy policy
│   │   └── index.ts         # Barrel exports
│   ├── non-tech/           # Non-technical content
│   │   ├── NonTech.tsx     # Main non-tech container
│   │   └── recipes/        # Recipe-related components
│   │       ├── Recipes.tsx     # Recipe list component
│   │       └── RecipeCard.tsx  # Individual recipe card
│   └── shared/             # Shared/reusable components
├── features/               # Feature-specific modules
│   └── recipes/           # Recipe feature module
│       ├── types.ts       # Recipe type definitions
│       ├── data.ts        # Recipe data
│       └── index.ts       # Barrel exports
├── styles/                # Global styles
│   └── index.css         # Main stylesheet
├── utils/                 # Shared utility functions
└── constants/            # Shared constants
```

## Organization Principles

### 1. **Feature-Based Structure**
- Related functionality is grouped together
- Each feature is self-contained with its own types, data, and components

### 2. **Component Categorization**
- **Layout**: Components that define the app structure
- **Portfolio**: Main content sections of the portfolio
- **Non-Tech**: Personal content outside of technical portfolio
- **Shared**: Reusable components used across features

### 3. **Barrel Exports**
- `index.ts` files provide clean import paths
- Reduces import complexity and improves developer experience

### 4. **Clear Separation of Concerns**
- Types, data, and components are separated
- Styles are centralized
- Utilities and constants have dedicated folders

## Adding New Features

### New Portfolio Section
1. Create component in `src/components/portfolio/`
2. Export it in `src/components/portfolio/index.ts`
3. Import and use in `App.tsx`

### New Non-Tech Content
1. Create feature folder in `src/features/`
2. Add types, data, and components as needed
3. Import in `src/components/non-tech/NonTech.tsx`

### Shared Components
1. Create in `src/components/shared/`
2. Import where needed across the app

This structure scales well and maintains clean separation between different aspects of the portfolio. 