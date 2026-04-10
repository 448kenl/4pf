export type ProductBadge = 'New' | 'Limited' | 'Archive' | 'Sold Out' | 'Restock';

export interface Product {
  slug: string;
  title: string;
  price: number;
  comparePrice: number;
  badge: ProductBadge;
  category: 'Tops' | 'Bottoms' | 'Outerwear' | 'Accessories' | 'Bundles';
  collection: string;
  sizes: string[];
  colors: string[];
  description: string;
  images: string[];
  stock: number;
  featured: boolean;
  bestSelling?: boolean;
}

export interface Collection {
  slug: string;
  title: string;
  intro: string;
}

export interface ArchiveEntry {
  slug: string;
  title: string;
  season: string;
  status: 'Sold Out' | 'Reference Only' | 'Returning Soon';
  notes: string;
  image: string;
}

export interface Review {
  productSlug: string;
  name: string;
  rating: number;
  quote: string;
}

export interface CartItem {
  productSlug: string;
  size: string;
  quantity: number;
}

export interface WishlistItem {
  productSlug: string;
  addedAt: string;
}
