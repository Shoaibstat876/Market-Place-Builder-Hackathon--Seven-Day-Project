import React from "react";
import ProductCard from "./ProductCard"; // Reuse the ProductCard component

// Define the product data (8 products)
const products = [
  {
    id: 1,
    image: "/assets/images/Image-5.png",
    name: "Library Stool Chair",
    price: "$20",
    badge: "New",
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium text-[#007580]",
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
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 4,
    image: "/assets/images/Image-9.png",
    name: "Library Stool Chair",
    price: "$20",
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 5,
    image: "/assets/images/Image-14.png",
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
    image: "/assets/images/Image-12.png",
    name: "Library Stool Chair",
    price: "$20",
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
  },
  {
    id: 8,
    image: "/assets/images/Image-13.png",
    name: "Library Stool Chair",
    price: "$20",
    priceStyle: "text-black font-medium",
    nameStyle: "text-lg font-medium",
    cartColor: "bg-[#f0f2f3] hover:bg-gray-600",
    iconColor: "text-black",
  },
];

const OurProducts: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Our Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;