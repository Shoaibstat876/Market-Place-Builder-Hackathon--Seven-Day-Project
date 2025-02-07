/*
// File: src/utils/mockProducts.ts

// Define the Product interface
export interface Product {
    id: number;
    image: string;
    name: string;
    price: number;
    description: string;
    category: string;
    badge?: string; // Badge like "New" or "Sale"
    originalPrice?: number; // Original price if the product is on sale
    nameStyle?: string; // Custom styles for product name
    priceStyle?: string; // Custom styles for price
    cartColor?: string; // Tailwind color classes for cart button
    iconColor?: string; // Tailwind color classes for cart icon
  }
  
  // Mock product data
  export const mockProducts: Product[] = [
    {
      id: 1,
      image: "/assets/images/white-chair.png",
      name: "Library Stool Chair",
      price: 20.0,
      description: "Comfortable and stylish chair for your library.",
      category: "furniture",
      badge: "New",
      nameStyle: "text-lg font-[400] text-[#007580]",
      priceStyle: "text-[#000000] font-[400]",
      cartColor: "bg-[#029fae] hover:bg-teal-700",
      iconColor: "text-white",
    },
    {
      id: 2,
      image: "/assets/images/pink-chair.png",
      name: "Modern Pink Chair",
      price: 20.0,
      originalPrice: 30.0,
      description: "Elegant pink chair for a modern touch in any room.",
      category: "furniture",
      badge: "Sale",
      nameStyle: "text-lg font-medium",
      priceStyle: "text-black font-medium",
      cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
      iconColor: "text-black",
    },
    {
      id: 3,
      image: "/assets/images/orange-chair.png",
      name: "Ergonomic Orange Chair",
      price: 20.0,
      description: "Bright and ergonomic chair for your workspace.",
      category: "furniture",
      nameStyle: "text-lg font-[400] text-[#000000]",
      priceStyle: "text-[#000000] font-[400]",
      cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
      iconColor: "text-black",
    },
    {
      id: 4,
      image: "/assets/images/white-rounded-chair.png",
      name: "Rounded White Chair",
      price: 20.0,
      description: "Elegant rounded chair, perfect for any setting.",
      category: "furniture",
      nameStyle: "text-lg font-[400] text-[#000000]",
      priceStyle: "text-[#000000] font-[400]",
      cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
      iconColor: "text-black",
    },
    {
      id: 5,
      image: "/assets/images/wooden-chair.png",
      name: "Classic Wooden Chair",
      price: 20.0,
      description: "Stylish wooden chair with a vintage feel.",
      category: "furniture",
      badge: "New",
      nameStyle: "text-lg font-medium",
      priceStyle: "text-black font-medium",
      cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
      iconColor: "text-black",
    },
    {
      id: 6,
      image: "/assets/images/computer-chair.png",
      name: "Modern Computer Chair",
      price: 20.0,
      originalPrice: 30.0,
      description: "Comfortable computer chair for long hours of work.",
      category: "furniture",
      badge: "Sale",
      nameStyle: "text-lg font-medium",
      priceStyle: "text-black font-medium",
      cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
      iconColor: "text-black",
    },
    {
      id: 7,
      image: "/assets/images/chair-cushion.png",
      name: "Cushioned Chair",
      price: 20.0,
      description: "Cozy chair with a plush cushion for extra comfort.",
      category: "furniture",
      nameStyle: "text-lg font-[400] text-[#000000]",
      priceStyle: "text-[#000000] font-[400]",
      cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
      iconColor: "text-black",
    },
    {
      id: 8,
      image: "/assets/images/white-chair.png",
      name: "Minimalist White Chair",
      price: 20.0,
      description: "Simple and minimalist white chair for modern spaces.",
      category: "furniture",
      nameStyle: "text-lg font-[400] text-[#000000]",
      priceStyle: "text-[#000000] font-[400]",
      cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
      iconColor: "text-black",
    },
    {
      id: 9,
      image: "/assets/images/computer-chair.png",
      name: "Executive Chair",
      price: 20.0,
      description: "Modern executive chair for a professional workspace.",
      category: "furniture",
      badge: "New",
      nameStyle: "text-lg font-[400] text-[#007580]",
      priceStyle: "text-[#000000] font-[400]",
      cartColor: "bg-[#029fae] hover:bg-teal-700",
      iconColor: "text-white",
    },
    {
      id: 10,
      image: "/assets/images/pink-chair.png",
      name: "Pink Library Chair",
      price: 20.0,
      originalPrice: 30.0,
      description: "Vibrant pink chair for an elegant library look.",
      category: "furniture",
      badge: "Sale",
      nameStyle: "text-lg font-medium",
      priceStyle: "text-black font-medium",
      cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
      iconColor: "text-black",
    },
    {
      id: 11,
      image: "/assets/images/orange-chair.png",
      name: "Bright Orange Chair",
      price: 20.0,
      description: "Eye-catching orange chair for bold interiors.",
      category: "furniture",
      nameStyle: "text-lg font-[400] text-[#000000]",
      priceStyle: "text-[#000000] font-[400]",
      cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
      iconColor: "text-black",
    },
    {
      id: 12,
      image: "/assets/images/stand-chair.png",
      name: "Standing Chair",
      price: 20.0,
      description: "Versatile standing chair for ergonomic use.",
      category: "furniture",
      nameStyle: "text-lg font-[400] text-[#000000]",
      priceStyle: "text-[#000000] font-[400]",
      cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
      iconColor: "text-black",
    },
  ];
  
  // Simulate delay for async operations
  const simulateDelay = <T>(data: T, delay = 500): Promise<T> =>
    new Promise((resolve) => setTimeout(() => resolve(data), delay));
  
  // Fetch all products
  export const fetchAllProducts = async (): Promise<Product[]> => {
    return simulateDelay(mockProducts);
  };
  
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
    if (relatedProducts.length === 0) {
      throw new Error(`No products found in category: ${category}`);
    }
    return simulateDelay(relatedProducts);
  };
  */