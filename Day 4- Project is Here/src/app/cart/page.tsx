// src/app/cart/page.tsx
"use client";

import React from "react";
import { useCart } from "../../context/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../../components/shared/Button";
import Input from "../../components/shared/Input";

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, calculateTotal, addToCart } = useCart();
  const router = useRouter();

  const handleRemove = (id: number) => {
    if (confirm("Are you sure you want to remove this item?")) {
      removeFromCart(id);
    }
  };

  const handleQuantityChange = (id: number, value: number) => {
    if (value <= 0) {
      removeFromCart(id);
    } else {
      const existingItem = cartItems.find(item => item.id === id);
      if (existingItem) {
        addToCart({ ...existingItem, quantity: value });
      }
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Your Cart is Empty</h2>
        <p className="text-gray-600 mt-4">Add some products to see them here.</p>
        <Button
          label="Continue Shopping"
          onClick={() => router.push("/products")}
          color="teal"
          size="medium"
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 px-4 lg:px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Cart</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-3">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded-lg shadow mb-4"
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
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={e => handleQuantityChange(item.id, +e.target.value)}
                  placeholder="Quantity"
                  className="w-20"
                />
              </div>
              <Button
                label="Remove"
                onClick={() => handleRemove(item.id)}
                color="red"
                size="small"
              />
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Summary</h3>
          <div className="flex justify-between text-gray-700 mb-2">
            <span>Subtotal:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-700 mb-4">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-gray-800">
            <span>Total:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <Button
            label="Checkout"
            color="teal"
            size="large"
            className="w-full mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
