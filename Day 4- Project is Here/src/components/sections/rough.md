"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // For programmatic navigation
import { useCart } from "../../context/CartContext"; // Cart Context for managing cart
import { PiShoppingCartSimpleLight } from "react-icons/pi"; // Shopping cart icon

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
  const { addToCart } = useCart(); // Access Cart Context
  const router = useRouter(); // For navigation

  const handleAddToCart = () => {
    // Add product to cart
    addToCart({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace("$", "")), // Ensure price is a number
      image: product.image,
      quantity: 1, // Default quantity is 1
    });

    // Redirect to cart page after adding
    router.push("/cart");
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

      {/* Product Details */}
      <div className="flex flex-col mt-auto">
        <h3 className={`${product.nameStyle} text-lg font-medium mt-4`}>
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-4">
          {/* Price Section */}
          <p className={`${product.priceStyle} text-gray-700 font-[400]`}>
            {product.originalPrice ? (
              <>
                <span>{product.price}</span>
                <span className="ml-2 line-through text-gray-400">
                  {product.originalPrice}
                </span>
              </>
            ) : (
              product.price
            )}
          </p>

          {/* Cart Button */}
          <button
            onClick={handleAddToCart} // Handle adding product to cart
            className={`${product.cartColor} p-2 rounded-md transition-transform transform hover:scale-110`}
            aria-label={`Add ${product.name} to Cart`}
          >
            <PiShoppingCartSimpleLight
              size={22}
              className={product.iconColor}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
