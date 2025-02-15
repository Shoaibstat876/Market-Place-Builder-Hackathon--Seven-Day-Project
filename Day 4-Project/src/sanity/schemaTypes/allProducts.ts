// File: src/sanity/schemaTypes/allProducts.ts
import { defineType, defineField, } from "sanity";

export default defineType({
  name: "allProducts", // Unique schema name
  title: "All Products",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "Product ID",
      type: "number",
      validation: (Rule) => Rule.required().positive().integer(),
      description: "Unique numeric identifier for the product.",
    }),
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "The name of the product.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
      description: "A brief description of the product.",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Chairs", value: "chairs" },
          { title: "Sofas", value: "sofas" },
          { title: "Beds", value: "beds" },
          { title: "Tables", value: "tables" },
          { title: "Furniture", value: "furniture" },
          { title: "Electronics", value: "electronics" },
          { title: "Storages", value: "storages" },
          { title: "Clothing", value: "clothing" },
          { title: "Shoes", value: "shoes" },
          { title: "Accessories", value: "accessories" },
        ],
      },
      validation: (Rule) => Rule.required(),
      description: "Category under which the product is listed.",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
      description: "The selling price of the product (must be positive).",
    }),
    defineField({
      name: "originalPrice",
      title: "Original Price",
      type: "number",
      description: "Optional field for displaying the original price before discount.",
      validation: (Rule) =>
        Rule.min(0).custom((originalPrice, context) => {
          const price = (context.document as { price?: number })?.price;
          if (originalPrice && price !== undefined && originalPrice < price) {
            return "Original price should be greater than or equal to the selling price.";
          }
          return true;
        }),
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      description: "Upload an image for the product.",
    }),
    defineField({
      name: "imageUrl",
      title: "Product Image URL",
      type: "string",
      description: "Optional external URL for the product image (for API integration).",
    }),
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
      description: "Optional badge like 'New' or 'Sale'",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Sale", value: "sale" },
          { title: "Limited Edition", value: "limited-edition" },
          { title: "Best Seller", value: "best-seller" },
        ],
      },
    }),
    defineField({
      name: "nameStyle",
      title: "Name Style",
      type: "string",
      description: "Optional Tailwind CSS class for product name styling.",
    }),
    defineField({
      name: "priceStyle",
      title: "Price Style",
      type: "string",
      description: "Optional Tailwind CSS class for product price styling.",
    }),
    defineField({
      name: "cartColor",
      title: "Cart Button Color",
      type: "string",
      description: "Tailwind CSS class for the cart button color.",
    }),
    defineField({
      name: "iconColor",
      title: "Cart Icon Color",
      type: "string",
      description: "Tailwind CSS class for the cart icon color.",
    }),
  ],
});
