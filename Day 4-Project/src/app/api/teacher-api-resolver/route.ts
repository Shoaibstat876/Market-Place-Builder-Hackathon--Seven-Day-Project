
import { NextResponse } from "next/server";
import { GET as getCategories } from "../teacher-categories/route";
import { GET as getProducts } from "../teacher-products/route";

// ✅ Define Type Interfaces
interface Category {
  _id: string;
  title: string;
  imageUrl: string;
}

interface Product {
  _id: string;
  title: string;
  price: number;
  category: {
    _id: string;
    title: string;
  };
  tags: string[];
  badge?: string | null;
  imageUrl: string;
  description: string;
  inventory: number;
}

// ✅ Global Cache to Stop Infinite Requests
const cache: { categories?: Category[]; products?: Product[] } = {};

// ✅ Safe Fetch Function with Caching (Fixed)
const safeFetch = async (
  apiCall: (req: Request) => Promise<Response>, // ✅ Ensure it accepts `Request`
  req: Request,
  cacheKey: keyof typeof cache
) => {
  if (cache[cacheKey]) return cache[cacheKey]; // ✅ Return cached data if exists

  try {
    const res = await apiCall(req); // ✅ Pass `req` argument here
    if (!res.ok) throw new Error(`API Error: ${res.status}`);
    const json = await res.json();
    cache[cacheKey] = json; // ✅ Save to cache
    return json;
  } catch (error) {
    console.warn(`⚠️ API Fetch Failed: ${error instanceof Error ? error.message : "Unknown error"}`);
    return [];
  }
};

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type");

    // ✅ Validate Query Type
    if (type && !["categories", "products"].includes(type)) {
      return NextResponse.json(
        { error: "Invalid type parameter. Use 'categories' or 'products'." },
        { status: 400 }
      );
    }

    let categories: Category[] = [];
    let products: Product[] = [];

    // ✅ Fetch Categories with Caching (Fixed)
    if (!type || type === "categories") {
      categories = await safeFetch(getCategories, req, "categories"); // ✅ Pass `req`
    }

    // ✅ Fetch Products with Caching
    if (!type || type === "products") {
      products = await safeFetch(getProducts, req, "products"); // ✅ Pass `req`
    }

    // ✅ Optimized Response
    const response: { categories?: Category[]; products?: Product[] } = {};
    if (categories.length > 0) response.categories = categories;
    if (products.length > 0) response.products = products;

    return NextResponse.json(response);
  } catch (error) {
    console.error(`🚨 Teacher API Error:`, error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { error: "Failed to fetch data from teacher APIs" },
      { status: 500 }
    );
  }
}
