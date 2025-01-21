"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";
import ProductCard from "../../components/sections/ProductCard";

const PAGE_SIZE = 20;

type Product = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  badge?: string;
  priceWithoutDiscount?: number;
};

type ProductPageResponse = Product[];

const ProductListingPage: React.FC = () => {
  const [productMap, setProductMap] = useState<Map<string, Product>>(new Map());
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { addToCart } = useCart();
  const router = useRouter();

  const fetchProducts = useCallback(async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      const response = await fetch(`/api/products?page=${page}`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = (await response.json()) as ProductPageResponse;
      
      setProductMap(prevMap => {
        const newMap = new Map(prevMap);
        data.forEach(product => {
          if (!newMap.has(product._id)) {
            newMap.set(product._id, product);
          }
        });
        return newMap;
      });

      setHasMore(data.length === PAGE_SIZE);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const loadMore = () => {
    if (hasMore && !isLoading) {
      setPage(prev => prev + 1);
    }
  };

  const products = Array.from(productMap.values());

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard
              key={product._id} // Simplified key - no need for page number since we ensure uniqueness
              product={{
                id: parseInt(product._id.replace(/[^0-9]/g, '')) || Math.floor(Math.random() * 1000000),
                image: product.imageUrl || "/default-placeholder.png",
                name: product.title,
                price: `$${product.price}`,
                badge: product.badge,
                originalPrice: product.priceWithoutDiscount
                  ? `$${product.priceWithoutDiscount}`
                  : undefined,
                priceStyle: "text-teal-600 font-semibold",
                nameStyle: "text-lg font-bold text-gray-800",
                cartColor: "bg-teal-500",
                iconColor: "text-white",
              }}
            />
          ))
        ) : (
          <p className="text-center col-span-full">No products available.</p>
        )}
      </div>
      {hasMore && (
        <div className="text-center mt-6">
          <button
            onClick={loadMore}
            disabled={isLoading}
            className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductListingPage;