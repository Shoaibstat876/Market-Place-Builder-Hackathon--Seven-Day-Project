// File: src/utils/mockFeaturedProducts.ts

// Define the Product interface
export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string; // Added to align with the interface
  category: string;
  badge?: string; // Optional for products like "New" or "Sale"
  originalPrice?: number; // Optional for discounted products
  priceStyle?: string; // Optional custom styles for price
  nameStyle?: string; // Optional custom styles for name
  cartColor?: string; // Optional background color for cart button
  iconColor?: string; // Optional color for cart icon
}

// Sample featured product data
const mockFeaturedProducts: Product[] = [
  {
    id: 1001,
    image: "/assets/images/pink-chair.png",
    name: "Modern Pink Chair",
    price: 89.99,
    originalPrice: 30.0,
    description: "Elegant pink chair for a modern touch in any room.",
    category: "chairs",
    badge: "Sale",
    nameStyle: "text-lg font-medium",
    priceStyle: "text-black font-medium",
    cartColor: "bg-[#f0f2f3]",
    iconColor: "text-black",
  },

  {
    id: 1002,
    image: "/assets/images/galaxy-sofa.png",
    name: "Galaxy Sofa",
    price: 499.99,
    description: "A luxurious sofa with a modern touch.",
    category: "sofas",
    badge: "New",
    nameStyle: "text-lg font-[400] text-[#007580]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#029fae]",
    iconColor: "text-white",
    },
    
    {
      id: 1003,
      image: "/assets/images/modern-bed.png",
      name: "Modern Bed",
      price: 849.99,
      description: "Minimalist modern bed with a sleek finish.",
      category: "beds",
      nameStyle: "text-lg font-[400] text-[#000000]",
      priceStyle: "text-[#000000] font-[400]",
      cartColor: "bg-[#f0f2f3]",
      iconColor: "text-black",
      },
      
      {
        id: 1004,
        image: "/assets/images/office-front-table.png",
        name: "Minimalist Front Table",
        price: 199.99,
        originalPrice: 259.99,
        description: "A sleek and modern front table for stylish interiors.",
        category: "tables",
        badge: "Sale",
        nameStyle: "text-lg font-medium",
        priceStyle: "text-black font-medium",
        cartColor: "bg-[#f0f2f3]",
        iconColor: "text-black",
        },
        
];

// Utility function for simulating delay
const simulateDelay = <T>(data: T, delay = 500): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), delay));

// Fetch product by ID
export const fetchFeaturedProductById = async (id: number): Promise<Product> => {
  const product = mockFeaturedProducts.find((product) => product.id === id);
  if (!product) throw new Error(`Product with ID ${id} not found.`);
  return simulateDelay(product);
};

// Fetch all featured products
export const fetchFeaturedProducts = async (): Promise<Product[]> => {
  return simulateDelay(mockFeaturedProducts);
};

// Fetch related products by category
export const fetchRelatedFeaturedProducts = async (
  category: string
): Promise<Product[]> => {
  const relatedProducts = mockFeaturedProducts.filter(
    (product) => product.category === category
  );
  if (!relatedProducts.length) {
    throw new Error(`No products found for category: ${category}`);
  }
  return simulateDelay(relatedProducts);
};

export default mockFeaturedProducts;
