import { defineType } from "sanity";

export const productSchema = defineType({
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title", // Auto-generate from title
        maxLength: 200,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      title: "Price without Discount",
      name: "priceWithoutDiscount",
      type: "number",
    },
    {
      name: "badge",
      title: "Badge",
      type: "string",
      options: {
        list: [
          { title: "New", value: "New" },
          { title: "Sale", value: "Sale" },
          { title: "Trending", value: "Trending" },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true, // Allows cropping and zooming
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "A short description of the image for accessibility.",
        },
      ],
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "categories" }],
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
    },
    {
      name: "inventory",
      title: "Inventory Management",
      type: "number",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Featured", value: "featured" },
          {
            title: "Follow products and discounts on Instagram",
            value: "instagram",
          },
          { title: "Gallery", value: "gallery" },
        ],
      },
    },
  ],
});
