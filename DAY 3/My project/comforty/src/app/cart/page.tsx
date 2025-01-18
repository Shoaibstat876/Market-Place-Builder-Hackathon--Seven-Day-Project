"use client";
import React from "react";
import { useCart } from "../../context/CartContext";

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, calculateTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Your Cart is Empty</h2>
        <p className="text-gray-600 mt-4">Add some products to see them here.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>
      <div className="grid gap-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border p-4 rounded-lg shadow">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
            <div className="flex-1 ml-4">
              <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right">
        <h3 className="text-xl font-bold text-gray-800">Total: ${calculateTotal()}</h3>
      </div>
    </div>
  );
};

export default CartPage;
