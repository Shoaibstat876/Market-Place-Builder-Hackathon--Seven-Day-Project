"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";
import ProductCard from "../../components/sections/ProductCard"; // Import the ProductCard component

const PAGE_SIZE = 20;

const ProductListingPage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { addToCart } = useCart();
  const router = useRouter();

  // Fetch products API
  const fetchProducts = async () => {
    try {
      const response = await fetch(`/api/products?page=${page}`);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts((prev) => [...prev, ...data]);
      setHasMore(data.length === PAGE_SIZE); // Check if we have more products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const loadMore = () => {
    if (hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  const handleAddToCart = (product: any) => {
    addToCart({ ...product, quantity: 1 });
    router.push("/cart");
  };

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Products</h2>
      <div className="flex overflow-x-scroll space-x-4 snap-x snap-mandatory">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={`${product._id}-${product.title}-${product.price}-${index}`}  // Unique key using id, title, price, and index
              className="relative min-w-[200px] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg snap-center"
            >
              <ProductCard
                product={{
                  id: product._id,
                  image: product.imageUrl,
                  name: product.title,
                  price: `$${product.price}`,
                  badge: product.badge,
                  originalPrice: product.priceWithoutDiscount ? `$${product.priceWithoutDiscount}` : undefined,
                  priceStyle: "text-teal-600 font-semibold",
                  nameStyle: "text-lg font-bold text-gray-800",
                  cartColor: "bg-teal-500",
                  iconColor: "text-white"
                }}
              />
            </div>
          ))
        ) : (
          <p className="text-center">No products available.</p>
        )}
      </div>
      {hasMore && (
        <div className="text-center mt-6">
          <button
            onClick={loadMore}
            className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductListingPage;
