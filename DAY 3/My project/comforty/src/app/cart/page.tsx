"use client";
import React from "react";
import { useCart } from "../../context/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, calculateTotal } = useCart();
  const router = useRouter();

  const handleRemove = (id: number) => {
    if (confirm("Are you sure you want to remove this item?")) {
      removeFromCart(id);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Your Cart is Empty</h2>
        <p className="text-gray-600 mt-4">Add some products to see them here.</p>
        <button
          onClick={() => router.push("/products")}
          className="mt-6 bg-teal-500 text-white py-2 px-6 rounded hover:bg-teal-600 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>
      <div className="grid gap-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded-lg shadow"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={96}
              height={96}
              className="object-cover rounded-md"
            />
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right">
        <h3 className="text-xl font-bold text-gray-800">
          Total: ${calculateTotal().toFixed(2)}
        </h3>
      </div>
    </div>
  );
};

export default CartPage;
