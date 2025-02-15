

// File: src/sanity/schemaTypes/topCategories.ts

import { defineType, defineField } from "sanity";

export default defineType({
  name: "topCategory",
  title: "Top Category",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "Category ID",
      type: "number",
      validation: (Rule) => Rule.required().positive().integer(),
    }),
    defineField({
      name: "image",
      title: "Category Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Category Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "products",
      title: "Total Products",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
  ],
});