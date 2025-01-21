"use client";
import React from "react";
import Image from "next/image";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { useCart } from "../../context/CartContext";
import Link from "next/link";

interface Product {
  id: number;
  image: string;
  imageUrl?: string;
  name: string;
  price: string;
  badge?: string;
  originalPrice?: string;
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

    const newItem = {
      id: product.id,
      name: product.name,
      price: parseFloat(product.price.replace("$", "")),
      image: product.imageUrl || product.image,
      quantity: 1,
    };

    addToCart(newItem);
    alert(`${product.name} has been added to your cart!`);
  };

  const formatPrice = (value: string | undefined): string => {
    if (!value) return "N/A";
    const numericValue = parseFloat(value.replace("$", ""));
    return !isNaN(numericValue) ? `$${numericValue.toFixed(2)}` : "N/A";
  };

  const badgeColors: Record<string, string> = {
    New: "bg-green-500",
    Sale: "bg-orange-500",
  };

  const productInCart = cartItems.find((item) => item.id === product.id);
  const productCount = productInCart ? productInCart.quantity : 0;

  // Generate stable keys for inner elements
  const imageKey = `product-image-${product.id}`;
  const badgeKey = `product-badge-${product.id}`;
  const nameKey = `product-name-${product.id}`;
  const priceKey = `product-price-${product.id}`;
  const cartKey = `product-cart-${product.id}`;

  return (
    <div className="rounded-lg bg-white shadow-sm hover:shadow-md transition-transform transform hover:scale-105 flex flex-col min-h-[440px] p-6">
      <div className="relative w-full h-auto">
        <Image
          key={imageKey}
          src={product.imageUrl || product.image || "/fallback.jpg"}
          alt={product.name}
          width={400}
          height={300}
          className="rounded-md bg-gray-100 object-contain"
          placeholder="blur"
          blurDataURL="/path-to-blur-placeholder.jpg"
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

          <button
            key={cartKey}
            onClick={handleAddToCart}
            className={`${product.cartColor || "bg-teal-500"} p-2 rounded-md transition-transform transform hover:scale-110 relative`}
            aria-label={`Add ${product.name} to Cart`}
          >
            <PiShoppingCartSimpleLight
              size={22}
              className={product.iconColor || "text-white"}
              aria-hidden="true"
            />
            {productCount > 0 && (
              <span className="absolute top-0 right-0 bg-teal-700 text-white text-xs font-bold rounded-full px-2 py-1 transform translate-x-1/4 translate-y-1/4">
                {productCount}
              </span>
            )}
          </button>
        </div>

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
