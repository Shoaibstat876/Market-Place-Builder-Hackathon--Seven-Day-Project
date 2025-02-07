// File: src/app/categories/page.tsx

"use client"; // Client-side component

import React, { useEffect, useState, useCallback } from "react"; // Hooks for state management and effects
import Image from "next/image"; // Next.js optimized Image component
import ProductCard from "@/components/sections/ProductCard"; // ProductCard component for displaying products
import { fetchAllCategories, Category } from "@/utils/mockApiResolver"; // Fetch function and type definition

// Extended Category to avoid type errors when used in ProductCard
interface CategoryWithPrice extends Category {
  price: number; // Ensure price is always a number
}

const CategoriesPage = () => {
  // State variables
  const [categories, setCategories] = useState<CategoryWithPrice[]>([]); // Holds category data
  const [loading, setLoading] = useState<boolean>(true); // Loading indicator
  const [error, setError] = useState<string | null>(null); // Error message state

  // Fetch categories when the component mounts
  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoading(true);
        const fetchedCategories = await fetchAllCategories(); // Fetch categories

        // Ensure the data is in the expected format
        if (!Array.isArray(fetchedCategories)) {
          throw new Error("Invalid data format: Expected an array of categories.");
        }

        // Add a default price to avoid type errors
        const categoriesWithPrice = fetchedCategories.map(category => ({ ...category, price: category.price ?? 0 }));
        setCategories(categoriesWithPrice);
      } catch (err: unknown) {
        // Error handling
        setError(err instanceof Error ? err.message : "An unknown error occurred.");
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    loadCategories(); // Call the function
  }, []);

  // Categorize products dynamically
  const categorizedProducts = useCallback(() => {
    return categories.reduce<Record<string, CategoryWithPrice[]>>((acc, category) => {
      const categoryName = category.category || "Uncategorized"; // Assign default category if missing
      if (!acc[categoryName]) {
        acc[categoryName] = [];
      }
      acc[categoryName].push(category);
      return acc;
    }, {});
  }, [categories]);

  // ✅ Highlight effect when navigating to a section
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });

        // Highlight the section briefly
        section.classList.add("bg-yellow-100");
        setTimeout(() => section.classList.remove("bg-yellow-100"), 1000);
      }
    }
  }, [categories]);

  // Display loading state
  if (loading) {
    return (
      <div className="py-10 text-center">
        <p className="text-lg text-gray-500">Loading categories...</p>
      </div>
    );
  }

  // Display error message if fetching fails
  if (error) {
    return (
      <div className="py-10 text-center">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <>
      {/* Categories Section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Categories</h1>

          {/* Map through categorized products */}
          {Object.entries(categorizedProducts()).map(([category, categoryItems]) => (
            <div key={category} id={category.toLowerCase()} className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryItems.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Subscribe to Our Newsletter
          </h2>
          <form className="flex items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email..."
              className="px-4 py-2 w-full max-w-sm border rounded-l focus:outline-none"
              aria-label="Email Address"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-teal-500 text-white rounded-r hover:bg-teal-600"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Follow Products And Discounts On Instagram
          </h2>

          {/* Display selected categories with images */}
          <div className="flex justify-center flex-wrap gap-4">
            {categories
              .filter((category) => [3001, 3002, 3003, 3004].includes(category.id)) // Filter specific categories
              .map((category) => (
                <div key={category.id} className="relative w-32 h-32">
                  <Image
                    src={category.image}
                    alt={`Instagram post of ${category.name}`}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesPage;
