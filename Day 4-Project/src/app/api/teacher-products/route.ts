import { NextResponse } from "next/server";

const products = [
  {
    _id: "7001",
    title: "SleekSpin",
    priceWithoutDiscount: null,
    category: {
      _id: "6003", // ✅ Now matches "Desk Chair"
      title: "Desk Chair",
    },
    tags: ["gallery"],
    price: 20,
    badge: null,
    imageUrl: "https://cdn.sanity.io/images/5x47y4y0/production/81a5b7de166f930870a82f8f3e661b38a70de9f4-312x312.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.",
    inventory: 10,
  },
  {
    _id: "7002",
    title: "Citrus Edge",
    priceWithoutDiscount: null,
    category: {
      _id: "6003", // ✅ Now matches "Desk Chair"
      title: "Desk Chair",
    },
    tags: ["featured", "instagram", "gallery"],
    price: 20,
    badge: null,
    imageUrl: "https://cdn.sanity.io/images/5x47y4y0/production/4cd62915914fb385550532c3d1f0c4d64c1f8cca-312x312.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.",
    inventory: 20,
  },
  {
    _id: "7003",
    title: "Rose Luxe Armchair",
    priceWithoutDiscount: 30,
    category: {
      _id: "6001", // ✅ Now matches "Wing Chair"
      title: "Wing Chair",
    },
    tags: ["featured", "instagram"],
    price: 20,
    badge: "Sales",
    imageUrl: "https://cdn.sanity.io/images/5x47y4y0/production/af6865cccbcd12d2183f8090324d0e5c5732e57f-312x312.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.",
    inventory: 40,
  },
  {
    _id: "7004",
    title: "Library Stool Chair",
    priceWithoutDiscount: null,
    category: {
      _id: "6002", // ✅ Now matches "Wooden Chair"
      title: "Wooden Chair",
    },
    tags: ["featured", "instagram", "gallery"],
    price: 20,
    badge: "New",
    imageUrl: "https://cdn.sanity.io/images/5x47y4y0/production/da30e4081507761b5b7558807735f8f17756c9c3-624x624.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.",
    inventory: 20,
  },
  {
    _id: "7005",
    title: "Modern Cozy",
    priceWithoutDiscount: null,
    category: {
      _id: "6002", // ✅ Now matches "Wooden Chair"
      title: "Wooden Chair",
    },
    tags: ["instagram"],
    price: 20,
    badge: null,
    imageUrl: "https://cdn.sanity.io/images/5x47y4y0/production/384113dbb404b90828b52ffca9c3ccca7a4f626b-312x312.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.",
    inventory: 10,
  },
];

// ✅ Fetch products with optional filtering & sorting
export async function GET(req: Request) {
  const url = new URL(req.url);

  // Get filter query params
  const categoryId = url.searchParams.get("category"); // Filter by category
  const sort = url.searchParams.get("sort"); // "asc" or "desc"

  // Filter by category if provided
  let filteredProducts = categoryId
    ? products.filter((p) => p.category._id === categoryId)
    : products;

  // Remove out-of-stock products
  filteredProducts = filteredProducts.filter((p) => p.inventory > 0);

  // Sorting logic
  if (sort === "asc") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "desc") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return NextResponse.json(filteredProducts);
}
