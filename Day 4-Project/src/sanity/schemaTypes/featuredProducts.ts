// File: src/sanity/schemaTypes/featuredProducts.ts

import { defineType, defineField } from "sanity";

export default defineType({
  name: "featuredProduct", // Unique schema name
  title: "Featured Product",
  type: "document",
  fields: [
    defineField({
      name: "id",
      title: "Product ID",
      type: "number",
      validation: (Rule) => Rule.required().positive().integer(),
    }),
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "originalPrice",
      title: "Original Price",
      type: "number",
      description: "Optional, for showing discounts",
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
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
        ],
      },
      validation: (Rule) => Rule.required(),
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
        ],
      },
    }),
    defineField({
      name: "nameStyle",
      title: "Name Style",
      type: "string",
      description: "Optional Tailwind CSS class for product name styling",
    }),
    defineField({
      name: "priceStyle",
      title: "Price Style",
      type: "string",
      description: "Optional Tailwind CSS class for product price styling",
    }),
    defineField({
      name: "cartColor",
      title: "Cart Button Color",
      type: "string",
      description: "Tailwind color for the cart button",
    }),
    defineField({
      name: "iconColor",
      title: "Cart Icon Color",
      type: "string",
      description: "Tailwind color for the cart icon",
    }),
  ],
});
