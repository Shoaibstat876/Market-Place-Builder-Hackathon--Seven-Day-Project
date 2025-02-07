// File: src/utils/mockSingleProduct.ts

// Define the Product interface
export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

// Mock product data
export const mockProducts: Product[] = [
  {
    id: 1, // No change
    image: "/assets/images/pink-chair.png",
    name: "Library Stool Chair",
    price: 20.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.",
    category: "chairs",
  },
  {
    id: 2, // No change
    image: "/assets/images/chair-cushion.png",
    name: "Modern Desk",
    price: 99.0,
    description: "Elegant and modern desk perfect for your workspace.",
    category: "chairs",
  },
  {
    id: 3, // No change
    image: "/assets/images/white-chair.png",
    name: "Ergonomic Chair",
    price: 120.0,
    description: "Comfortable ergonomic chair designed for long hours of work or gaming.",
    category: "chairs",
  },
  {
    id: 4, // No change
    image: "/assets/images/stand-chair.png",
    name: "Bookshelf",
    price: 60.0,
    description:
      "Stylish bookshelf with multiple compartments to organize your books and decor.",
    category: "chairs",
  },
  {
    id: 5, // No change
    image: "/assets/images/orange-chair.png",
    name: "Coffee Table",
    price: 40.0,
    description:
      "Minimalist coffee table made from premium wood, perfect for your living room.",
    category: "chairs",
  },
];

// Utility function for simulating delay
const simulateDelay = <T>(data: T, delay = 500): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(data), delay));

// Fetch product by ID
export const fetchProductById = async (id: number): Promise<Product> => {
  const product = mockProducts.find((product) => product.id === id);
  if (!product) throw new Error(`Product with ID ${id} not found.`);
  return simulateDelay(product);
};

// Fetch related products by category
export const fetchRelatedProducts = async (category: string): Promise<Product[]> => {
  const relatedProducts = mockProducts.filter(
    (product) => product.category === category
  );
  if (!relatedProducts.length) {
    throw new Error(`No products found for category: ${category}`);
  }
  return simulateDelay(relatedProducts);
};
