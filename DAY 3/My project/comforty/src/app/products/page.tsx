//src\app\products\page.tsx
import React from "react";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/sections/ProductCard";

const products = [
  {
    id: 1,
    image: "/assets/images/Image-5.png",
    name: "Library Stool Chair",
    price: "$20",
    badge: "New",
    nameStyle: "text-lg font-[400] text-[#007580]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#029fae] hover:bg-teal-700",
    iconColor: "text-white",
  },
  {
    id: 2,
    image: "/assets/images/Image-6.png",
    name: "Library Stool Chair",
    price: "$20",
    badge: "Sale",
    originalPrice: "$30",
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 3,
    image: "/assets/images/Image-8.png",
    name: "Library Stool Chair",
    price: "$20",
    nameStyle: "text-lg font-[400] text-[#000000]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 4,
    image: "/assets/images/Image-9.png",
    name: "Library Stool Chair",
    price: "$20",
    nameStyle: "text-lg font-[400] text-[#000000]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 5,
    image: "/assets/images/Image-10.png",
    name: "Library Stool Chair",
    price: "$20",
    badge: "New",
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 6,
    image: "/assets/images/Image-11.png",
    name: "Library Stool Chair",
    price: "$20",
    badge: "Sale",
    originalPrice: "$30",
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 7,
    image: "/assets/images/Image-25.png",
    name: "Library Stool Chair",
    price: "$20",
    nameStyle: "text-lg font-[400] text-[#000000]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 8,
    image: "/assets/images/Image-5.png",
    name: "Library Stool Chair",
    price: "$20",
    nameStyle: "text-lg font-[400] text-[#000000]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 9,
    image: "/assets/images/Image-3.png",
    name: "Library Stool Chair",
    price: "$20",
    badge: "New",
    nameStyle: "text-lg font-[400] text-[#007580]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#029fae] hover:bg-teal-700",
    iconColor: "text-white",
  },
  {
    id: 10,
    image: "/assets/images/Image-6.png",
    name: "Library Stool Chair",
    price: "$20",
    badge: "Sale",
    originalPrice: "$30",
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 11,
    image: "/assets/images/Image-8.png",
    name: "Library Stool Chair",
    price: "$20",
    nameStyle: "text-lg font-[400] text-[#000000]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 12,
    image: "/assets/images/Image-17.png",
    name: "Library Stool Chair",
    price: "$20",
    nameStyle: "text-lg font-[400] text-[#000000]",
    priceStyle: "text-[#000000] font-[400]",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
  },
];

const ProductPage = () => {
  return (
    <Layout>
      {/* Products Section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">All Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
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
    <div className="flex justify-center flex-wrap gap-4">
      {products
        .filter((product) => [5, 9, 10, 8, 11, 12].includes(product.id))
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
    </Layout>
  );
};

export default ProductPage;
