export type ProductCategory = 
  | 'all'
  | 'edible'
  | 'wellness'
  | 'gourmet'
  | 'livestock'
  | 'bath';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  tagline: string;
  description: string;
  priceDisplay: string;
  priceNote?: string;
  specifications: string[];
  image: string;
  badge?: string;
  whatsappMessage?: string;
  origin?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
