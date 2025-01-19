"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { useRouter } from "next/navigation";
import Head from "next/head";
import { useCart } from "@/context/CartContext"; // Import CartContext

const product = {
  id: 1,
  image: "/assets/images/Image-6.png",
  name: "Library Stool Chair",
  price: 20.0, // Converted to number
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim, consectetur adipiscing.",
  quantity: 1, // Default quantity for adding to cart
};

const featuredProducts = [
  { id: 2, image: "/assets/images/Image-1.png", name: "Library Stool Chair", price: 99 },
  { id: 3, image: "/assets/images/Image-5.png", name: "Library Stool Chair", price: 99 },
  { id: 4, image: "/assets/images/Image-17.png", name: "Library Stool Chair", price: 99 },
  { id: 5, image: "/assets/images/Image-8.png", name: "Library Stool Chair", price: 99 },
  { id: 6, image: "/assets/images/Image-14.png", name: "Library Stool Chair", price: 99 },
];

const SingleProductPage = () => {
  const { addToCart } = useCart(); // Use the CartContext
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart
    router.push("/cart"); // Navigate to the cart page
  };

  return (
    <>
      <Head>
        <title>{product.name} - Comforty</title>
        <meta name="description" content={product.description} />
      </Head>

      {/* Product Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="relative group">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="mt-4 text-lg font-medium bg-teal-500 text-white px-4 py-2 rounded-full max-w-fit">
              ${product.price.toFixed(2)} USD
            </p>
            <p className="text-gray-600 mt-4">{product.description}</p>
            <button
              onClick={handleAddToCart}
              className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 flex items-center"
              aria-label={`Add ${product.name} to Cart`}
            >
              <PiShoppingCartSimpleLight size={24} className="mr-2" />
              Add to Cart
            </button>
          </div>
        </div>
      </section>
/////////////////////////////////////////////////////////////////////////////////////////////////
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
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="relative min-w-[200px] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg snap-center"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={160}
                  className="rounded-md object-cover"
                />
                <h3 className="mt-4 text-gray-800">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProductPage;
