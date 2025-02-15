// File: src/sanity/schemaTypes/singleProduct.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "singleProduct", // Unique schema name
  title: "Single Product",
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
      name: "image",
      title: "Product Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      description: "Upload an image of the product.",
    }),
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "The name of the product.",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
      description: "The selling price of the product (must be positive).",
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
          { title: "Storages", value: "Storages" },
          
        ],
      },
      validation: (Rule) => Rule.required(),
      description: "Category under which the product is listed.",
    }),
  ],
});
