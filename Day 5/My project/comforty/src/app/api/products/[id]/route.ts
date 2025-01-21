// src/app/api/products/route.ts
import { NextResponse } from "next/server";

// Define the products data
const products = [
  {
    id: 1,
    name: "Library Stool Chair",
    price: 20.0,
    image: "/assets/images/Image-6.png",
    description: "A sturdy and stylish stool chair for your library.",
    inventory: 10,
  },
  {
    id: 2,
    name: "Modern Armchair",
    price: 99.0,
    image: "/assets/images/Image-1.png",
    description: "A comfortable and modern armchair for your living space.",
    inventory: 5,
  },
  {
    id: 3,
    name: "Sleek Sofa",
    price: 199.0,
    image: "/assets/images/Image-5.png",
    description: "A sleek and modern sofa for your living room.",
    inventory: 3,
  },
];

// Define featured products (could be dynamically updated or fetched from a DB)
const featuredProducts = [
  { id: 2, image: "/assets/images/Image-1.png", name: "Modern Armchair", price: 99 },
  { id: 3, image: "/assets/images/Image-5.png", name: "Sleek Sofa", price: 199 },
  { id: 4, image: "/assets/images/Image-17.png", name: "Library Stool Chair", price: 129 },
  { id: 5, image: "/assets/images/Image-8.png", name: "Comfy Recliner", price: 199 },
  { id: 6, image: "/assets/images/Image-14.png", name: "Luxury Sofa", price: 249 },
];

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = parseInt(url.pathname.split("/").pop() || "0");

  // If an ID is provided, return the specific product
  if (id && !isNaN(id)) {
    const product = products.find((prod) => prod.id === id);

    if (product) {
      return NextResponse.json({
        product: {
          ...product,
          quantityAvailable: product.inventory, // Include inventory details
        },
        featuredProducts, // Provide recommendations
      });
    } else {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
  }

  // If no ID is provided, return the full list of products
  return NextResponse.json(products);
}
