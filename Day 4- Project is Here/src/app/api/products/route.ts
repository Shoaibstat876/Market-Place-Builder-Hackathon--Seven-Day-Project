//src\app\api\products\route.ts
// src/app/api/products/route.ts

import { NextResponse } from 'next/server';

// Mock data replicating the product structure
const products = [
  {
    "_id": "2P4ew3n0aFKlAn3Aum9jzF",
    "title": "SleekSpin",
    "priceWithoutDiscount": null,
    "category": {
      "_id": "b5710116-09af-4d0e-aa9a-dcd02fe919a9",
      "title": "Desk Chair"
    },
    "tags": ["gallery"],
    "price": 20,
    "badge": null,
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/81a5b7de166f930870a82f8f3e661b38a70de9f4-312x312.png",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.",
    "inventory": 10
  },
  {
    "_id": "3lfjJc6xfJVyGl3sMldeD4",
    "title": "Citrus Edge",
    "priceWithoutDiscount": null,
    "category": {
      "_id": "b5710116-09af-4d0e-aa9a-dcd02fe919a9",
      "title": "Desk Chair"
    },
    "tags": ["featured", "instagram", "gallery"],
    "price": 20,
    "badge": null,
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/4cd62915914fb385550532c3d1f0c4d64c1f8cca-312x312.png",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.",
    "inventory": 20
  },
  {
    "_id": "3lfjJc6xfJVyGl3sMldeKI",
    "title": "Rose Luxe Armchair",
    "priceWithoutDiscount": 30,
    "category": {
      "_id": "26fd7176-3c4d-40fc-a73a-3b85a9b5e15f",
      "title": "Wing Chair"
    },
    "tags": ["featured", "instagram"],
    "price": 20,
    "badge": "Sales",
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/af6865cccbcd12d2183f8090324d0e5c5732e57f-312x312.png",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.",
    "inventory": 40
  },
  {
    "_id": "3lfjJc6xfJVyGl3sMldeaY",
    "title": "Library Stool Chair",
    "priceWithoutDiscount": null,
    "category": {
      "_id": "407a8583-6203-4f61-becf-8e8b4c5461b6",
      "title": "Wooden Chair"
    },
    "tags": ["featured", "instagram", "gallery"],
    "price": 20,
    "badge": "New",
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/da30e4081507761b5b7558807735f8f17756c9c3-624x624.png",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.",
    "inventory": 20
  },
  {
    "_id": "7uWMcA2njGzrktIbr3a7dX",
    "title": "Modern Cozy",
    "priceWithoutDiscount": null,
    "category": {
      "_id": "407a8583-6203-4f61-becf-8e8b4c5461b6",
      "title": "Wooden Chair"
    },
    "tags": ["instagram"],
    "price": 20,
    "badge": null,
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/384113dbb404b90828b52ffca9c3ccca7a4f626b-312x312.png",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.",
    "inventory": 10
  }
  // ... Add the remaining products from your list in the same format
];

export async function GET() {
  return NextResponse.json(products);
}