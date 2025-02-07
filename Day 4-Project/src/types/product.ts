//src\types\product.ts
export interface Product {
  id: number; // Unique identifier for the product
  name: string; // Name of the product
  image: string; // Image URL or path
  price: number; // Product price
  description: string; // Product description
  category?: string; // Optional category
  inventory?: number; // Optional stock count
  badge?: string; // Optional badge like "New" or "Sale"
  originalPrice?: number; // Optional original price for discounted items
}
