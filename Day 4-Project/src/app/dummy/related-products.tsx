// File: src/app/dummy/related-products.tsx
"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/sections/ProductCard";
import { apiResolver } from "@/utils/mockApiResolver";

export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  description: string;
  category: string;
  badge?: string;
  originalPrice?: number;
}

const RelatedProductsDummy: React.FC = () => {
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Simulate fetching related products (mock category: "furniture")
        const fetchedProducts = (await apiResolver("related", { category: "furniture", source: "products" })) as Product[];
        setRelatedProducts(fetchedProducts);
      } catch (err) {
        console.error("Error fetching related products:", err);
        setError("Failed to load related products.");
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading related products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        {relatedProducts.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  badge: "Related",
                  cartColor: "bg-teal-500",
                  iconColor: "text-white",
                }}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No related products found.</p>
        )}
      </div>
    </section>
  );
};

export default RelatedProductsDummy;
