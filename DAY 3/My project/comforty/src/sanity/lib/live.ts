import { defineLive } from "next-sanity";
import { createClient } from 'next-sanity';

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
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-08';

// Create the Sanity client
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production', // Use CDN only in production
});

// Define live content API with Sanity client
export const { sanityFetch, SanityLive } = defineLive({
  client: sanityClient, // Using the pre-configured sanityClient
});
