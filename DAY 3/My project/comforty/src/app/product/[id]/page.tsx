"use client"
import React from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { PiShoppingCartSimpleLight } from "react-icons/pi"; // Importing the cart icon
import { useRouter } from "next/navigation"; // Importing useRouter from next/navigation

const product = {
  id: 1,
  image: "/assets/images/Image-6.png",
  name: "Library Stool Chair",
  price: "$20.00 USD",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim, consectetur adipiscing.",
};

const featuredProducts = [
  { id: 2, image: "/assets/images/Image-1.png", name: "Library Stool Chair", price: "$99" },
  { id: 3, image: "/assets/images/Image-5.png", name: "Library Stool Chair", price: "$99" },
  { id: 4, image: "/assets/images/Image-17.png", name: "Library Stool Chair", price: "$99" },
  { id: 5, image: "/assets/images/Image-8.png", name: "Library Stool Chair", price: "$99" },
  { id: 6, image: "/assets/images/Image-14.png", name: "Library Stool Chair", price: "$99" },
];

const SingleProductPage = () => {
  const router = useRouter(); // Hook to access Next.js router from next/navigation

  // Handle "Add to Cart" button click
  const handleAddToCart = () => {
    // Navigate to the cart page
    router.push("/cart");
  };

  return (
    <Layout>
      {/* Product Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Large Product Image */}
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

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p
              className="inline-block mt-4 px-4 py-2 bg-teal-500 text-white text-lg font-medium rounded-full transition-transform duration-300 hover:scale-110 hover:bg-teal-600"
              style={{ maxWidth: "fit-content" }}
            >
              {product.price}
            </p>
            <p className="text-gray-600 mt-4">{product.description}</p>
            <button
              onClick={handleAddToCart} // Add click handler
              className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 flex items-center"
              aria-label={`Add ${product.name} to Cart`}
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
            <Link href="/products" className="text-teal-500 hover:underline" aria-label="View all products">
              View all
            </Link>
          </div>

          {/* Featured Products Carousel */}
          <div className="flex overflow-x-scroll space-x-4 snap-x snap-mandatory">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="relative min-w-[200px] transition-transform duration-300 transform hover:scale-105 hover:shadow-lg snap-center"
                aria-label={`Featured product: ${product.name} priced at ${product.price}`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={160}
                  className="rounded-md object-cover"
                />
                <h3 className="mt-4 text-gray-800">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SingleProductPage;
