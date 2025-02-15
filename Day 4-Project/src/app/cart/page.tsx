"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../../components/shared/Button";
import Input from "../../components/shared/Input";

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, calculateTotal, addToCart } = useCart();
  const router = useRouter();

  // ✅ Fix: Ensure localStorage is used only after hydration
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  const saveWishlist = (updatedWishlist: number[]) => {
    setWishlist(updatedWishlist);
    if (isClient) {
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
  };

  const handleAddToWishlist = (id: number) => {
    if (!wishlist.includes(id)) {
      saveWishlist([...wishlist, id]);
      setNotification("Item added to wishlist!");
    }
  };

  const handleRemoveFromWishlist = (id: number) => {
    saveWishlist(wishlist.filter(itemId => itemId !== id));
    setNotification("Item removed from wishlist.");
  };

  const handleQuantityChange = (id: number, value: number) => {
    if (value < 1) return;
    const existingItem = cartItems.find(item => item.id === id);
    if (existingItem) {
      addToCart({ ...existingItem, quantity: value });
      setNotification("Quantity updated.");
    }
  };

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id);
    setNotification("Item removed from cart.");
  };

  const clearNotification = () => {
    setNotification(null);
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000); // Dismiss after 5 seconds

      return () => clearTimeout(timer); // Clean up the timer on notification change
    }
  }, [notification]);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-16 text-center">
        <Image
          src="/empty-cart.svg"
          alt="Empty Cart"
          width={250}
          height={250}
          className="mx-auto mb-6"
        />
        <h2 className="text-3xl font-bold text-gray-800">Your Cart is Empty</h2>
        <p className="text-gray-600 mt-4">Add some products to see them here.</p>
        <Button
          label="Continue Shopping"
          onClick={() => router.push("/products")}
          color="teal"
          size="large"
          className="mt-6"
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4 lg:px-8">
      {/* Notification */}
      {notification && (
        <div className="bg-teal-500 text-white p-4 mb-6 rounded-md">
          <p>{notification}</p>
          <button onClick={clearNotification} className="text-white ml-4">
            ✖
          </button>
        </div>
      )}

      <h2 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-3 space-y-6">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={96}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={e =>
                    handleQuantityChange(item.id, Math.max(1, +e.target.value))
                  }
                  min="1"
                  step="1"
                  className="w-20 text-center border-gray-300 rounded-md"
                />
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => {
                    if (wishlist.includes(item.id)) {
                      handleRemoveFromWishlist(item.id);
                    } else {
                      handleAddToWishlist(item.id);
                    }
                  }}
                  className={`${
                    wishlist.includes(item.id)
                      ? "text-red-500"
                      : "text-gray-400 hover:text-red-500"
                  } transition-colors`}
                  aria-label="Toggle Wishlist"
                >
                  {wishlist.includes(item.id) ? "❤️" : "🤍"}
                </button>
                <Button
                  label="Remove"
                  onClick={() => handleRemoveFromCart(item.id)}
                  color="teal"
                  size="small"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <h3 className="text-xl font-bold text-gray-800">Order Summary</h3>
          <div className="flex justify-between text-gray-700">
            <span>Subtotal:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between text-lg font-bold text-gray-800">
            <span>Total:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <Button
            label="Checkout"
            color="teal"
            size="large"
            className="w-full"
            onClick={() => router.push("/checkout")}
          />
        </div>
      </div>

      {/* Restored Wishlist Section */}
      {wishlist.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Wishlist</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map(itemId => {
              const item = cartItems.find(cartItem => cartItem.id === itemId);
              return (
                item && (
                  <div
                    key={item.id}
                    className="relative border p-4 rounded-lg shadow-md bg-white flex flex-col items-center"
                  >
                    <button
                      onClick={() => handleRemoveFromWishlist(item.id)}
                      className="absolute top-2 right-2 text-gray-600 hover:text-red-600 transition-colors"
                      aria-label="Remove from Wishlist"
                    >
                      ✖
                    </button>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={96}
                      height={96}
                      className="object-cover rounded-md mb-4"
                    />
                    <h3 className="text-base font-semibold text-gray-800">
                      {item.name}
                    </h3>
                  </div>
                )
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
