// src/components/sections/ProductCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { useCart } from "../../context/CartContext";
import Link from "next/link";

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
  badge?: string; // Optional badge
  originalPrice?: string; // Optional original price
  priceStyle: string;
  nameStyle: string;
  cartColor: string; // Cart button background color
  iconColor: string; // Icon color for the cart button
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace("$", "")) || 0, // Ensure price is numeric
      image: product.image,
      quantity: 1,
    });
    router.push("/cart");
  };

  const formatPrice = (value: string): string => {
    if (!value) return "N/A"; // Handle undefined or null price
    const numericValue = parseFloat(value.replace("$", ""));
    return !isNaN(numericValue) ? `$${numericValue.toFixed(2)}` : "N/A";
  };

  return (
    <div className="rounded-lg bg-white shadow-sm hover:shadow-md transition-transform transform hover:scale-105 flex flex-col min-h-[440px] p-6">
      {/* Image Section */}
      <div className="relative w-full h-auto">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="rounded-md bg-gray-100 object-contain"
        />
        {product.badge && (
          <span
            className={`absolute top-2 left-2 px-3 py-1 text-xs font-semibold text-white rounded-lg ${
              product.badge === "New" ? "bg-green-500" : "bg-orange-500"
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Product Details Section */}
      <div className="flex flex-col mt-auto">
        <h3 className={`${product.nameStyle} text-lg font-medium mt-4`}>
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-4">
          {/* Price Section */}
          <p className={`${product.priceStyle} text-gray-700 font-[400]`}>
            {product.originalPrice ? (
              <>
                <span>{formatPrice(product.price)}</span>
                <span className="ml-2 line-through text-gray-400">
                  {formatPrice(product.originalPrice)}
                </span>
              </>
            ) : (
              formatPrice(product.price)
            )}
          </p>

          {/* Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`${product.cartColor} p-2 rounded-md transition-transform transform hover:scale-110`}
            aria-label={`Add ${product.name} to Cart`}
          >
            <PiShoppingCartSimpleLight size={22} className={product.iconColor} />
          </button>
        </div>
      </div>

      {/* View Details Button */}
      <Link
        href={`/product/${product.id}`}
        className="mt-4 text-white bg-teal-500 px-4 py-2 rounded-md hover:bg-teal-600 text-center"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
