"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { useRouter } from "next/navigation";

const PAGE_SIZE = 20;

const ProductListingPage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { addToCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/products?page=${page}`);
        const data = await response.json();
        setProducts((prev) => [...prev, ...data.products]);
        setHasMore(data.hasMore);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
            <p className="text-teal-600 font-semibold">${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 w-full bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
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
