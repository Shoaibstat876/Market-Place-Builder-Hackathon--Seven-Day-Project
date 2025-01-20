import { type SchemaTypeDefinition } from "sanity";
import { productSchema } from "./product";
import { categorySchema } from "./category";

// Explicitly typing the schema object for better clarity
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productSchema, // Add your product schema
    categorySchema, // Add your category schema
  ],
};
