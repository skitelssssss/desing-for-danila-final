// Product entity — types and data

export interface Product {
  id: string;
  name: string;
  category: string;
  skinType: string[];
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
  ingredients: string;
  howToUse: string;
}
