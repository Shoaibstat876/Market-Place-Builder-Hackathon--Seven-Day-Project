// File: src/utils/mockOurProducts.ts

// Define the Product interface
export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
  category: string;
  badge?: string; // Optional for "New", "Sale", etc.
  originalPrice?: number; // Optional for showing discounts
  priceStyle?: string; // Optional for dynamic pricing styles
  cartColor?: string; // Optional for cart button styles
  iconColor?: string; // Optional for cart icon styles
  nameStyle?: string; // Optional custom styles for the name
}

// Mock product data
const mockOurProducts: Product[] = [
  {
    id: 2001,
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
    id: 2002,
    image: "/assets/images/wooden-chair.png",
    name: "Classic Wooden Chair",
    price: 79.99,
    description: "Stylish wooden chair with a vintage feel.",
    category: "chairs",
    badge: "New",
    nameStyle: "text-lg font-medium",
    priceStyle: "text-black font-medium",
    cartColor: "bg-[#f0f2f3]",
    iconColor: "text-black",
  },


{
id: 2003,
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
id: 2004,
image: "/assets/images/white-elegant-seater-sofa.png",
name: "White Elegant Sofa",
price: 599.99,
description: "Elegant white sofa for stylish interiors.",
category: "sofas",
badge: "New",
nameStyle: "text-lg font-[400] text-[#007580]",
priceStyle: "text-[#000000] font-[400]",
cartColor: "bg-[#029fae]",
iconColor: "text-white",
},



{
id: 2005,
image: "/assets/images/plank-table.png",
name: "Rustic Plank Table",
price: 299.99,
description: "A solid wooden table with a rustic and elegant design.",
category: "tables",
badge: "New",
nameStyle: "text-lg font-[400] text-[#007580]",
priceStyle: "text-[#000000] font-[400]",
cartColor: "bg-[#029fae]",
iconColor: "text-white",
},
{
id: 2006,
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



{
id: 2007,
image: "/assets/images/couple-bed.png",
name: "Couple Bed",
price: 799.99,
originalPrice: 999.99,
description: "A spacious and stylish bed perfect for couples.",
category: "beds",
badge: "Sale",
nameStyle: "text-lg font-medium",
priceStyle: "text-black font-medium",
cartColor: "bg-[#f0f2f3]",
iconColor: "text-black",
},
{
id: 2008,
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

];

// Utility function for simulating delay
const simulateDelay = <T>(data: T, delay = 500): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), delay));

// Fetch product by ID
export const fetchProductById = async (id: number): Promise<Product> => {
  if (!id || typeof id !== "number") {
    throw new Error("Invalid or missing product ID.");
  }
  const product = mockOurProducts.find((product) => product.id === id);
  if (!product) throw new Error(`Product with ID ${id} not found.`);
  return simulateDelay(product);
};

// Fetch all products
export const fetchProducts = async (): Promise<Product[]> => {
  return simulateDelay(mockOurProducts);
};

// Fetch related products by category
export const fetchRelatedProducts = async (
  category: string
): Promise<Product[]> => {
  if (!category) {
    throw new Error("Invalid or missing category.");
  }
  const relatedProducts = mockOurProducts.filter(
    (product) => product.category === category
  );
  if (!relatedProducts.length) {
    throw new Error(`No products found for category: ${category}`);
  }
  return simulateDelay(relatedProducts);
};

export default mockOurProducts;
