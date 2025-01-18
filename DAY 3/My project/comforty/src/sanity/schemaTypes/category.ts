import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'category', // Unique identifier for this schema
  title: 'Category', // Display name for the schema
  type: 'document', // Schema type (document)
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The name of the category to be displayed in the UI.',
      validation: (Rule) => Rule.required().min(3).max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', // Automatically generate slug from title
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      description: 'A URL-friendly version of the category title.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description of the category.',
    }),
    defineField({
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: {
        hotspot: true, // Enable cropping and hotspot for images
      },
    }),
    defineField({
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'The order in which this category will appear.',
      validation: (Rule) => Rule.required().integer().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Untitled Category',
      };
    },
  },
});
