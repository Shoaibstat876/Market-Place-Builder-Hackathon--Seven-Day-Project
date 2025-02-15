// File: src/app/product/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProductCard from "@/components/sections/ProductCard";
import { fetchAllProducts, Product } from "../../utils/mockAllProducts";

const ProductPage = () => {
  const productsPerPage = 4;
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const fetchedProducts = await fetchAllProducts();
  
        // Ensure all properties exist while keeping TypeScript happy
        const updatedProducts: Product[] = fetchedProducts.map((product) => ({
          ...product,
          badge: product.badge || undefined, // Ensures it's string | undefined
          originalPrice: product.originalPrice ?? undefined, // Ensures number | undefined
          nameStyle: product.nameStyle || "text-lg font-[400] text-[#000000]",
          priceStyle: product.priceStyle || "text-[#000000] font-[400]",
          cartColor: product.cartColor || "bg-[#f0f2f3] hover:bg-gray-600",
          iconColor: product.iconColor || "text-black",
        }));
  
        setProducts(updatedProducts);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };
  
    loadProducts();
  }, []);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  if (loading) {
    return (
      <div className="py-10 text-center">
        <p className="text-lg text-gray-500">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-10 text-center">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <>
      {/* Products Section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">All Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Pagination Section */}
      <section className="py-10">
        <div className="container mx-auto px-6 flex justify-center">
          <nav aria-label="Pagination">
            <ul className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <li key={number}>
                  <button
                    onClick={() => setCurrentPage(number)}
                    className={`px-4 py-2 ${
                      currentPage === number ? "bg-teal-600" : "bg-teal-500"
                    } text-white rounded hover:bg-teal-600`}
                  >
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Subscribe to Our Newsletter
          </h2>
          <form className="flex items-center justify-center" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          {isSubmitted && (
            <p className="mt-4 text-xs text-teal-500">Email submitted successfully!</p>
          )}
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Follow Products And Discounts On Instagram
          </h2>
          <div className="flex justify-center flex-wrap gap-4">
            {products
              .filter((product) =>
                [5, 9, 10, 8, 11, 12, 3001, 3002, 3003, 3004].includes(product.id)
              ) // Combined IDs from both versions
              .map((product) => (
                <div key={product.id} className="relative w-32 h-32">
                  <Image
                    src={product.image}
                    alt={`Instagram post of ${product.name}`}
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

export default ProductPage;
