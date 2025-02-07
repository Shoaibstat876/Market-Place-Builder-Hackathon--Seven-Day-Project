'use client'

/**
 * This configuration is used for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route.
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// ✅ Correct Import Paths
import { apiVersion, dataset, projectId } from '@/sanity/env';
import { schema } from '@/sanity/schemaTypes'; // ✅ Fixed import name
import { structure } from '@/sanity/structure';

export default defineConfig({
  title: 'Comforty Admin Panel',  // ✅ Added Studio Title
  basePath: '/studio', // ✅ Correct Studio Mount Path
  projectId,
  dataset,
  schema, // ✅ Use the correct schema import
  plugins: [
    structureTool({ structure }), // ✅ Uses Custom Sidebar Structure
    visionTool({ defaultApiVersion: apiVersion }), // ✅ Enables GROQ Querying
  ],
});
