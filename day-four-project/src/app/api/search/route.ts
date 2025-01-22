// src/app/api/search/route.ts

import { NextResponse } from 'next/server';

// Sample products (you can replace this with your actual product data)
const products = [
  {
    id: "1",
    name: "Library Stool Chair",
    image: "/assets/images/Image-6.png",
    price: 20,
  },
  {
    id: "2",
    name: "SleekSpin Chair",
    image: "/assets/images/Image-5.png",
    price: 40,
  },
  {
    id: "3",
    name: "Rose Luxe Armchair",
    image: "/assets/images/Image-8.png",
    price: 55,
  },
  // Add more products here...
];

export async function GET(request: Request) {
  // Get the search query from the URL params
  const url = new URL(request.url);
  const query = url.searchParams.get("query")?.toLowerCase() || "";

  // Filter products by query
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query)
  );

  // Return the filtered products as JSON
  return NextResponse.json(filteredProducts);
}
