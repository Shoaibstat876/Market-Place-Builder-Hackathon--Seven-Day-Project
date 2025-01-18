console.log('Sanity Environment Variables:', {
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
});

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-18';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2aakagz1';

export function assertEnvVar(value: string | undefined, errorMessage: string): string {
  if (!value || value.trim() === '') {
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
  return value;
}
