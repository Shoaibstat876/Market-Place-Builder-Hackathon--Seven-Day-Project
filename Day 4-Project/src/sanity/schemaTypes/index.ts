// File: src/sanity/schemaTypes/index.ts
import { type SchemaTypeDefinition } from "sanity";
import { productSchema } from "./product";
import { categorySchema } from "./category";
import singleProduct from "./singleProduct"; // ✅ Single Product Schema (Newly Added)
import featuredProduct from "./featuredProducts"; // ✅ Featured Products Schema
import topCategory from "./topCategories"; // ✅ Top Categories Schema
import ourProducts from "./ourProducts"; // ✅ Our Products Schema
import allProducts from "./allProducts"; // ✅ All Products Schema
import allCategories from "./allCategories"; // ✅ All Categories Schema

// Explicitly typing the schema object for better clarity
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productSchema, // ✅ Product Schema
    categorySchema, // ✅ Category Schema
    singleProduct, // ✅ Single Product Schema (Newly Added)
    featuredProduct, // ✅ Featured Products Schema
    topCategory, // ✅ Top Categories Schema
    ourProducts, // ✅ Our Products Schema
    allProducts, // ✅ All Products Schema
    allCategories, // ✅ All Categories Schema
  ],
};
