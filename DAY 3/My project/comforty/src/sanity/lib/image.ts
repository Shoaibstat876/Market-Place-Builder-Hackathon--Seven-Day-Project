import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Validate environment variables (optional for hackathons)
function assertEnvVar<T>(value: T | undefined, errorMessage: string): T {
  if (!value) {
    throw new Error(errorMessage);
  }
  return value;
}

// Get environment variables for project configuration
const projectId = assertEnvVar(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 'Missing NEXT_PUBLIC_SANITY_PROJECT_ID');
const dataset = assertEnvVar(process.env.NEXT_PUBLIC_SANITY_DATASET, 'Missing NEXT_PUBLIC_SANITY_DATASET');

// Create the image URL builder with Sanity project configuration
const builder = createImageUrlBuilder({ projectId, dataset });

// Function to generate the image URL from the Sanity image source
export const urlFor = (source: SanityImageSource) => builder.image(source);
