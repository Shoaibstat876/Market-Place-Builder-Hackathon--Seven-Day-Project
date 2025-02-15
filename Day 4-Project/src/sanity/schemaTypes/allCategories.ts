// File: src/sanity/schemaTypes/allCategories.ts
import { defineType, defineField } from "sanity";

export default defineType({
  name: "allCategories", // Unique schema name
  title: "All Categories",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "Category ID",
      type: "number",
      validation: (Rule) => Rule.required().positive().integer(),
      description: "Unique numeric identifier for the category.",
    }),
    defineField({
      name: "name",
      title: "Category Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "The name of the category.",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
      description: "A brief description of the category.",
    }),
    defineField({
      name: "category",
      title: "Parent Category",
      type: "string",
      options: {
        list: [
          { title: "Chairs", value: "chairs" },
          { title: "Sofas", value: "sofas" },
          { title: "Beds", value: "beds" },
          { title: "Tables", value: "tables" },
          { title: "Furniture", value: "furniture" },
          { title: "Storages", value: "storges" },
        ],
      },
      validation: (Rule) => Rule.required(),
      description: "The main category under which this category falls.",
    }),
    defineField({
      name: "image",
      title: "Category Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
      description: "Upload an image representing the category.",
    }),
    defineField({
      name: "imageUrl",
      title: "Category Image URL",
      type: "string",
      description: "Optional external URL for the category image.",
    }),
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
      description: "Optional category badge like 'New' or 'Sale'.",
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
      description: "Optional Tailwind CSS class for category name styling.",
    }),
    defineField({
      name: "iconColor",
      title: "Category Icon Color",
      type: "string",
      description: "Tailwind CSS class for category icon color.",
    }),
  ],
});
