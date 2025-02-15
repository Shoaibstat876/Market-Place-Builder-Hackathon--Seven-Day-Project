// File: src/utils/apiResolver.ts

import {
  fetchProductById as fetchSingleProductById,
  fetchRelatedProducts as fetchSingleRelatedProducts,
} from "./mockSingleProducts";

import {
  fetchAllProducts as fetchProducts,
  fetchProductById as fetchProductByIdFromProducts,
  fetchRelatedProducts as fetchRelatedProductsFromProducts,
} from "./mockAllProducts";

import {
  fetchAllCategories,
  fetchCategoryById as fetchCategoryByIdFromCategories,
  // fetchRelatedCategories as fetchRelatedCategoriesFromCategories, // Unused, commented out
} from "./mockCategories";

import {
  fetchProducts as fetchOurProducts,
  fetchProductById as fetchProductByIdFromOurProducts,
  fetchRelatedProducts as fetchRelatedProductsFromOurProducts,
} from "./mockOurProducts";

import {
  fetchFeaturedProducts as fetchAllFeaturedProducts,
  fetchFeaturedProductById as fetchFeaturedById,
  fetchRelatedFeaturedProducts as fetchRelatedFeaturedProducts,
} from "./mockFeaturedProducts";

// Product Interface
export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
  category: string;
  badge?: string;
  originalPrice?: number;
  priceStyle?: string;
  cartColor?: string;
  iconColor?: string;
  nameStyle?: string;
}

// Category Interface
export interface Category {
  id: number;
  image: string;
  name: string;
  category: string;
}

// Re-export the fetchAllCategories function
export { fetchAllCategories };

// Centralized resolver function
export const apiResolver = async (
  type: "single" | "related" | "featured" | "all" | "categories",
  context?: {
    id?: number;
    category?: string;
    source?: "single" | "products" | "ourProducts" | "featured" | "categories";
  }
): Promise<Product[] | Product | Category[] | Category | null> => {
  try {
    if (!context) {
      console.warn("⚠️ apiResolver called without context.");
      return null;
    }

    switch (type) {
      case "single": {
        if (!context.id) throw new Error("❌ Missing ID for single product fetch.");
        if (!context.source) throw new Error("❌ Missing source for single product fetch.");

        if (context.id >= 4001 && context.id <= 4032) {
          return await fetchCategoryByIdFromCategories(context.id) || null;
        }

        switch (context.source) {
          case "featured":
            return await fetchFeaturedById(context.id) || null;
          case "products":
            return await fetchProductByIdFromProducts(context.id) || null;
          case "ourProducts":
            return await fetchProductByIdFromOurProducts(context.id) || null;
          default:
            return await fetchSingleProductById(context.id) || null;
        }
      }

      case "related": {
        if (!context.category || typeof context.category !== "string") {
          console.warn("⚠️ Missing or invalid category for related fetch.");
          return [];
        }
        if (!context.source) {
          console.warn("⚠️ Missing source for related fetch.");
          return [];
        }

        const normalizedCategory = context.category.trim().toLowerCase();

        switch (context.source) {
          case "featured":
            return await fetchRelatedFeaturedProducts(normalizedCategory) || [];
          case "products":
            return await fetchRelatedProductsFromProducts(normalizedCategory) || [];
          case "ourProducts":
            return await fetchRelatedProductsFromOurProducts(normalizedCategory) || [];
          case "categories": {
            const allCategories = await fetchAllCategories();
            const filteredCategories = allCategories.filter(
              (item) => item.category.trim().toLowerCase() === normalizedCategory
            );

            if (filteredCategories.length === 0) {
              console.warn(`⚠️ No categories found for: ${context.category}`);
            }

            return filteredCategories;
          }
          default:
            return await fetchSingleRelatedProducts(normalizedCategory) || [];
        }
      }

      case "featured":
        return await fetchAllFeaturedProducts() || [];

      case "categories":
        return await fetchAllCategories() || [];

      case "all": {
        if (!context.source) throw new Error("❌ Missing source parameter for fetching all products.");

        switch (context.source) {
          case "products":
            return await fetchProducts() || [];
          case "ourProducts":
            return await fetchOurProducts() || [];
          case "categories":
            return await fetchAllCategories() || [];
          default:
            throw new Error("❌ Invalid source for fetching all products.");
        }
      }

      default:
        throw new Error(`❌ Invalid API type: ${type}`);
    }
  } catch (error) {
    console.error(`🚨 Error in apiResolver: ${error instanceof Error ? error.message : error}`);
    return null;
  }
};
