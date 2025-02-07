import { defineType } from "sanity";

export const categorySchema = defineType({
    name: 'categories',
    title: 'Categories',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Category Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title', // Auto-generate from title
                maxLength: 200,
            },
        },
        {
            name: 'image',
            title: 'Category Image',
            type: 'image',
            options: {
                hotspot: true, // Allows cropping and zooming
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                    description: 'A short description of the image for accessibility.',
                }
            ]
        },
    ],
});
