"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Category = {
  _id: string;
  title: string;
  imageUrl: string;
};

type Product = {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  description: string;
  badge?: string | null;
  category: {
    _id: string;
    title: string;
  };
  tags: string[];
  inventory: number;
};

const TrendPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ✅ Fetch Categories (Trending Categories)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`/api/teacher-api-resolver?type=categories`);
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data: { categories: Category[] } = await response.json();
        setCategories(data.categories);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Failed to fetch categories");
      }
    };
    fetchCategories();
  }, []);

  // ✅ Fetch Products (Trending News Format)
  const fetchProducts = useCallback(async () => {
    if (isLoading) return;

    try {
      setIsLoading(true);
      setError(null);

      let apiUrl = `/api/teacher-api-resolver?type=products`;
      if (selectedCategory) {
        apiUrl += `&categoryId=${selectedCategory}`;
      }

      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Failed to fetch products");

      const data: { products: Product[] } = await response.json();
      setProducts(data.products);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Failed to fetch products");
    } finally {
      setIsLoading(false);
    }
  }, [selectedCategory, isLoading]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (error) {
    return (
      <div className="container mx-auto py-16 text-center">
        <p className="text-red-500">Error: {error}</p>
        <button
          onClick={() => fetchProducts()}
          className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-gray-900 dark:text-white mb-10 text-center"
      >
        🔥 Trending News & Updates
      </motion.h1>

      {/* Trending Categories (Filter) */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">🏷️ Trending Categories</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm ${
              !selectedCategory ? "bg-teal-500 text-white" : "bg-gray-200"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category._id}
              onClick={() => setSelectedCategory(category._id)}
              className={`px-4 py-2 rounded-lg text-sm ${
                selectedCategory === category._id ? "bg-teal-500 text-white" : "bg-gray-200"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </section>

      {/* Trending Products (News Format) */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 text-center">🌟 Latest Trends & Insights</h2>
        <div className="flex flex-col gap-6">
          {isLoading && products.length === 0 ? (
            <p className="text-center">Loading latest trends...</p>
          ) : products.length > 0 ? (
            products.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 backdrop-blur-lg shadow-lg rounded-xl p-6 flex flex-col md:flex-row gap-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden rounded-lg w-full md:w-48 h-48">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg hover:scale-105 transition-transform"
                  />
                </div>

                {/* Content Section */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{product.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                    {product.description.slice(0, 120)}...
                  </p>
                  <p className="mt-3 text-teal-600 dark:text-teal-400 font-semibold">{`$${product.price.toFixed(2)}`}</p>
                  
                  {/* Tags */}
                  <div className="mt-4 flex gap-2">
                    {product.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-semibold text-teal-600 bg-teal-100 dark:bg-teal-900 dark:text-teal-300 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center">No trending updates available.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default TrendPage;
