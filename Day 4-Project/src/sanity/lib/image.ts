import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { dataset, projectId } from '../env';

// Initialize the image builder correctly
const builder = imageUrlBuilder({ projectId, dataset });

// Updated function with validation check
export const urlFor = (source: SanityImageSource) => {
  if (!source) return ""; // Prevents site crashes if image is missing
  return builder.image(source);
};
