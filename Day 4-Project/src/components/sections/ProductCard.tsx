"use client";
import React, {useState} from "react";
import Image from "next/image";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { useCart } from "../../context/CartContext";
import Link from "next/link";
// Import the components
import RatingSystem from "../sections/RatingSystem";
import CustomReviewInput from "../sections/CustomReviewInput";



interface Product {
  id: number;
  image: string;
  imageUrl?: string;
  name: string;
  price: number | string;
  badge?: string;
  originalPrice?: number | string;
  inventory?: number;
  priceStyle?: string;
  nameStyle?: string;
  cartColor?: string;
  iconColor?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, cartItems } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (product.inventory !== undefined && product.inventory <= 0) {
      alert("This product is out of stock.");
      return;
    }

    const price =
      typeof product.price === "string"
        ? parseFloat(product.price.replace("$", ""))
        : product.price;

    const newItem = {
      id: product.id,
      name: product.name,
      price: price,
      image: product.imageUrl?.trim() || product.image.trim(),
      quantity: 1,
    };

    addToCart(newItem);
    alert(`${product.name} has been added to your cart!`);
  };

  // Enhanced price formatting to handle both string and number inputs
  const formatPrice = (value: string | number | undefined): string => {
    if (value === undefined) return "N/A";
    if (typeof value === "string") {
      const numericValue = parseFloat(value.replace("$", ""));
      return !isNaN(numericValue) ? `$${numericValue.toFixed(2)}` : "N/A";
    }
    return `$${value.toFixed(2)}`;
  };

  const badgeColors: Record<string, string> = {
    New: "bg-green-500",
    Sale: "bg-orange-500",
  };

  const productInCart = cartItems.find((item) => item.id === product.id);
  const productCount = productInCart ? productInCart.quantity : 0;

  // Apply different cart colors for the first product vs. others
  const isFirstProduct = product.id === 1;
  const cartButtonClass = isFirstProduct
    ? "bg-[#029fae] hover:bg-teal-700"
    : "bg-[#f0f2f3] hover:bg-gray-600";

  const cartIconClass = isFirstProduct ? "text-white" : "text-black";

  // Generate stable keys for performance optimization
  const imageKey = `product-image-${product.id}`;
  const badgeKey = `product-badge-${product.id}`;
  const nameKey = `product-name-${product.id}`;
  const priceKey = `product-price-${product.id}`;
  const cartKey = `product-cart-${product.id}`;

// Start: Reviews & Rating Section
  // This section is where we handle the rating system, predefined reviews, and custom reviews.

  const [rating, setRating] = useState<number>(0);
 const [customReview, setCustomReview] = useState<string>("");
 const handleRatingChange = (newRating: number) => setRating(newRating);
 const handleCustomReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setCustomReview(e.target.value);

  // Review Section


  return (
    <div className="rounded-lg bg-white shadow-sm hover:shadow-md transition-transform transform hover:scale-105 flex flex-col min-h-[440px] p-6">
      {/* Product Image */}
      <div className="relative w-full h-auto">
        <Image
          key={imageKey}
          src={product.imageUrl?.trim() || product.image?.trim() || "/fallback.jpg"}
          alt={product.name}
          width={400}
          height={300}
          className="rounded-md bg-gray-100 object-contain"
          placeholder="blur"
          blurDataURL="/fallback.jpg"
        />
        {product.badge && (
          <span
            key={badgeKey}
            className={`absolute top-2 left-2 px-3 py-1 text-xs font-semibold text-white rounded-lg ${
              badgeColors[product.badge] || "bg-gray-500"
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="flex flex-col mt-auto">
        <h3
          key={nameKey}
          className={`${product.nameStyle || "text-lg font-medium"} mt-4 text-gray-800`}
        >
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-2">
          <p
            key={priceKey}
            className={`${product.priceStyle || "text-base font-medium"} text-gray-700`}
          >
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

          {/* Add to Cart Button */}
          <button
            key={cartKey}
            onClick={handleAddToCart}
            className={`${cartButtonClass} p-2 rounded-md transition-transform transform hover:scale-110 relative flex items-center justify-center`}
            aria-label={`Add ${product.name} to Cart`}
          >
            <PiShoppingCartSimpleLight
              size={22}
              className={`${cartIconClass}`}
              aria-hidden="true"
            />
            {productCount > 0 && (
              <span className="absolute top-0 right-0 bg-teal-700 text-white text-xs font-bold rounded-full px-2 py-1 transform translate-x-1/4 translate-y-1/4">
                {productCount}
              </span>
            )}
          </button>
        </div>
        {/* Reviews & Rating Section */}
        <div className="mt-6">
          <RatingSystem rating={rating} onRatingChange={handleRatingChange} />
         
          <CustomReviewInput customReview={customReview} onReviewChange={handleCustomReviewChange} />
        </div>
       

        {/* View Details Link */}
        <Link
          href={`/product/${product.id}`}
          className="mt-4 text-white bg-teal-500 px-4 py-2 rounded-md hover:bg-teal-600 text-center"
          aria-label={`View details of ${product.name}`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
