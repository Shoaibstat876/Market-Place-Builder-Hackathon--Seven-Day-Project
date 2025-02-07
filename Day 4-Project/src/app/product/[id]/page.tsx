"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Head from "next/head";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { Truck, RotateCcw, Headphones, Package } from "lucide-react";
import { useCart } from "@/context/CartContext";
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

interface SubmitStatus {
  type: "success" | "error" | null;
  message: string;
}

const INITIAL_STATUS: SubmitStatus = { type: null, message: "" };

const SingleProductPage: React.FC = () => {
  const { addToCart } = useCart();
  const router = useRouter();
  const params = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(INITIAL_STATUS);

  const productId = useMemo(() => {
    const id = Array.isArray(params.id) ? params.id[0] : params.id ?? "";
    return parseInt(id, 10);
  }, [params.id]);

  const getSourceByProductId = (id: number): "single" | "products" | "ourProducts" | "featured" => {
    if (id >= 1001 && id <= 1004) return "featured";
    if (id >= 2001 && id <= 2008) return "ourProducts";
    if (id >= 3001) return "products";
    return "single";
  };

  useEffect(() => {
    if (isNaN(productId)) {
      setError("Invalid Product ID.");
      setLoading(false);
      return;
    }

    const fetchData = async (): Promise<void> => {
      try {
        setLoading(true);
        setError(null);

        const source = getSourceByProductId(productId);

        // Fetch single product by ID
        const productData = (await apiResolver("single", { id: productId, source })) as Product;
        if (!productData) throw new Error("Product not found.");
        setProduct(productData);

        // Fetch related products
        const related = (await apiResolver("related", {
          category: productData.category,
          source,
        })) as Product[];

        setRelatedProducts(related.filter((p) => p.id !== productData.id));
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err instanceof Error ? err.message : "Unknown error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  const handleAddToCart = (): void => {
    if (!product) return;
    addToCart({ ...product, quantity: 1 });
    router.push("/cart");
  };

  const formatPrice = (value?: number): string =>
    value !== undefined ? `$${value.toFixed(2)}` : "N/A";

  const handleNewsletterSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus(INITIAL_STATUS);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus({
        type: "success",
        message: "Successfully subscribed to newsletter!",
      });
      setEmail("");
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to subscribe. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-16">
        <p className="text-xl font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-xl font-semibold text-red-500">{error}</p>
        <button
          onClick={() => router.push("/products")}
          className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
        >
          Go Back to Products
        </button>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{`${product?.name ?? "Product"} - Comforty`}</title>
        <meta name="description" content={product?.description ?? "Product details"} />
      </Head>

      {/* Product Details */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative group">
            <Image
              src={product?.image || "/fallback.jpg"}
              alt={product?.name || "Product Image"}
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product?.name}</h1>
            <p className="mt-4 text-lg font-medium bg-teal-500 text-white px-4 py-2 rounded-full max-w-fit">
              {formatPrice(product?.price)}
            </p>
            <p className="mt-4 text-gray-600">{product?.description}</p>
            <button
              onClick={handleAddToCart}
              className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 flex items-center"
              aria-label={`Add ${product?.name} to Cart`}
            >
              <PiShoppingCartSimpleLight size={24} className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      
      
      {/* Baby View Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 hover:bg-white rounded-lg transition-colors duration-300">
              <Package className="w-8 h-8 mx-auto mb-4 text-teal-500" />
              <h3 className="text-xl font-semibold mb-2">Product Details</h3>
              <p className="text-gray-600">High-quality materials and craftsmanship</p>
            </div>
            <div className="text-center p-6 hover:bg-white rounded-lg transition-colors duration-300">
              <Truck className="w-8 h-8 mx-auto mb-4 text-teal-500" />
              <h3 className="text-xl font-semibold mb-2">Shipping Info</h3>
              <p className="text-gray-600">Free shipping on orders over $100</p>
            </div>
            <div className="text-center p-6 hover:bg-white rounded-lg transition-colors duration-300">
              <RotateCcw className="w-8 h-8 mx-auto mb-4 text-teal-500" />
              <h3 className="text-xl font-semibold mb-2">Return Policy</h3>
              <p className="text-gray-600">30-day money-back guarantee</p>
            </div>
            <div className="text-center p-6 hover:bg-white rounded-lg transition-colors duration-300">
              <Headphones className="w-8 h-8 mx-auto mb-4 text-teal-500" />
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-600">24/7 customer service available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          {relatedProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={{
                    ...relatedProduct,
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

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">Stay updated with our latest products and offers</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-500"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                ) : (
                  'Subscribe'
                )}
              </button>
              {submitStatus.type && (
                <p className={`text-${submitStatus.type === 'success' ? 'green' : 'red'}-500 mt-2`}>
                  {submitStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>



    </>
  );
};

export default SingleProductPage;
