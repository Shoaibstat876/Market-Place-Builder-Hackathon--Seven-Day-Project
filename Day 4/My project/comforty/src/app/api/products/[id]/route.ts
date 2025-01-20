// src/app/api/products/[id]/route.ts
import { NextResponse } from 'next/server';

const products = [
  {
    id: 1,
    image: "/assets/images/Image-6.png",
    name: "Library Stool Chair",
    price: 20.0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim, consectetur adipiscing.",
    quantity: 1,
  },
  {
    id: 2,
    image: "/assets/images/Image-1.png",
    name: "Modern Armchair",
    price: 99.0,
    description:
      "A comfortable and stylish armchair perfect for any living space.",
    quantity: 1,
  },
  {
    id: 3,
    image: "/assets/images/Image-5.png",
    name: "Sleek Sofa",
    price: 199.0,
    description:
      "A sleek and modern sofa that brings a contemporary touch to your living room.",
    quantity: 1,
  },
];

const featuredProducts = [
  { id: 2, image: "/assets/images/Image-1.png", name: "Modern Armchair", price: 99 },
  { id: 3, image: "/assets/images/Image-5.png", name: "Sleek Sofa", price: 199 },
  { id: 4, image: "/assets/images/Image-17.png", name: "Library Stool Chair", price: 129 },
  { id: 5, image: "/assets/images/Image-8.png", name: "Comfy Recliner", price: 199 },
  { id: 6, image: "/assets/images/Image-14.png", name: "Luxury Sofa", price: 249 },
];

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop(); // Extract product ID from URL path

  // Find the product based on the ID
  const product = products.find((prod) => prod.id === Number(id));

  if (product) {
    return NextResponse.json({
      product,
      featuredProducts, // Provide related featured products
    });
  } else {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
}
