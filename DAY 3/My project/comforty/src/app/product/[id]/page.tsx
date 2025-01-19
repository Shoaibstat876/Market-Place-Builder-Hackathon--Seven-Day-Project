"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext"; // Cart context for adding products
import Head from "next/head";
import Link from "next/link"; // Import Link for navigation
import { useParams } from "next/navigation"; // Import useParams() for dynamic route params

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

type FeaturedProduct = {
  id: string;
  name: string;
  price: number;
  image: string;
};

const SingleProductPage = () => {
  const { addToCart } = useCart();
  const router = useRouter();
  const { id } = useParams(); // Get dynamic 'id' from the URL
  const [product, setProduct] = useState<Product | null>(null);
  const [featuredProducts, setFeaturedProducts] = useState<FeaturedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch product details dynamically using product ID
      fetch(`/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.product) {
            setProduct(data.product);
            setFeaturedProducts(data.featuredProducts);
          } else {
            setError("Product not found");
          }
        })
        .catch((error) => setError("Error fetching product data"))
        .finally(() => setLoading(false)); // Set loading state to false after fetching
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      // Ensure the product ID is a number when adding to cart
      addToCart({ ...product, id: Number(product.id), quantity: 1 });
      router.push("/cart");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Head>
        <title>{product?.name} - Comforty</title>
        <meta name="description" content={product?.description} />
      </Head>

      {/* Product Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative group">
            <Image
              src={product?.image || "/assets/images/placeholder.png"}
              alt={product?.name || "Product image"}
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product?.name}</h1>
            <p className="mt-4 text-lg font-medium bg-teal-500 text-white px-4 py-2 rounded-full max-w-fit">
              ${product?.price?.toFixed(2)} USD
            </p>
            <p className="text-gray-600 mt-4">{product?.description}</p>
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

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">FEATURED PRODUCTS</h2>
            <Link
              href="/productListingPage"
              className="text-teal-500 hover:underline"
              aria-label="View all products"
            >
              View all
            </Link>
          </div>
          <div className="flex overflow-x-scroll space-x-4 snap-x snap-mandatory">
            {featuredProducts.length > 0 ? (
              featuredProducts.map((prod) => (
                <Link
                  key={prod.id}
                  href={`/product/${prod.id}`}
                  className="relative min-w-[200px] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg snap-center"
                >
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    width={200}
                    height={160}
                    className="rounded-md object-cover"
                  />
                  <h3 className="mt-4 text-gray-800">{prod.name}</h3>
                  <p className="text-gray-600">${prod.price}</p>
                </Link>
              ))
            ) : (
              <p>No featured products available</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProductPage;
