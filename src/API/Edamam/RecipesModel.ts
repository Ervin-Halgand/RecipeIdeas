export interface EdamamResponse {
  count: DoubleRange;
  hits: { recipe: Recipe; _links: Link }[];
  to: DoubleRange;
  _links: {
    next: {
      href: string;
      title: string;
    };
  };
}

export interface Link {
  self: {
    href: string;
    title: string;
  };
}

export interface Recipe {
  calories: number;
  cautions: string[];
  cuisineType: string[];
  dietLabels: string[];
  digest: Digest[];
  dishType: string[];
  healthLabels: string[];
  image: string;
  ingredientLines: string[];
  ingredients: Ingredients[];
  label: string;
  mealType: string[];
  shareAs: string;
  source: string;
  totalDaily: Object;
  totalTime: DoubleRange;
  totalWeight: DoubleRange;
  uri: string;
  url: string;
  yield: DoubleRange;
  totalNutrients: {
    FAT: { label: string; quantity: number; unit: string };
    PROCNT: { label: string; quantity: number; unit: string };
    CHOCDF: { label: string; quantity: number; unit: string };
  };
}

export interface Digest {
  daily: DoubleRange;
  hasRDI: boolean;
  label: string;
  schemaOrgTag: string;
  sub: Digest[] | null;
  tag: string;
  total: DoubleRange;
  unit: string;
}

export interface Ingredients {
  food: string;
  foodCategory: string;
  foodId: string;
  image: string;
  measure: string;
  quantity: DoubleRange;
  text: string;
  weight: DoubleRange;
}

export enum MealTypes {
  Breakfast = "Breakfast",
  Lunch = "Lunch",
  Dinner = "Dinner",
  Snack = "Snack",
  Teatime = "Teatime",
}

export enum Diet {
  highProtein = "high-protein",
  lowCarb = "low-carb",
  lowFat = "low-fat",
  lowSodium = "low-sodium"
}