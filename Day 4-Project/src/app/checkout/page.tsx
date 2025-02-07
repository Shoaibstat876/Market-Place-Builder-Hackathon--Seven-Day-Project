// src/app/checkout/page.tsx

"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import Button from "@/components/shared/Button";
import Input from "@/components/shared/Input";
import { useRouter } from "next/navigation";

// Define a type for the errors
type Errors = {
  fullName: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
};

const CheckoutPage: React.FC = () => {
  const { cartItems, calculateTotal } = useCart();
  const router = useRouter();

  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const [errors, setErrors] = useState<Errors>({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  });

  // Handle input change dynamically
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Errors) => {
    setShippingDetails((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" })); // Clear errors on typing
  };

  const handleCheckout = () => {
    const { fullName, email, address, city, zipCode } = shippingDetails;
    
    // Explicitly define newErrors as Errors type
    const newErrors: Errors = {
      fullName: "",
      email: "",
      address: "",
      city: "",
      zipCode: "",
    };

    let hasError = false;

    // Validate fields
    if (!fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      hasError = true;
    }
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Valid Email is required";
      hasError = true;
    }
    if (!address.trim()) {
      newErrors.address = "Address is required";
      hasError = true;
    }
    if (!city.trim()) {
      newErrors.city = "City is required";
      hasError = true;
    }
    if (!zipCode.trim() || zipCode.length < 5) {
      newErrors.zipCode = "Valid Zip Code is required";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors); // ✅ Fix: Now TypeScript will not complain
      return;
    }

    // Mock order submission
    const orderData = {
      shippingDetails,
      orderItems: cartItems,
      totalAmount: calculateTotal().toFixed(2),
    };

    // Save order details (Mock)
    localStorage.setItem("orderData", JSON.stringify(orderData));

    alert("Order placed successfully! Redirecting...");
    router.push("/confirmation"); // Navigate to confirmation page
  };

  return (
    <div className="container mx-auto py-16 px-4 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between text-gray-700">
              <span>{item.name} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <hr className="my-4" />
        <div className="flex justify-between text-lg font-bold text-gray-800">
          <span>Total:</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
      </div>

      {/* Shipping Details */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Shipping Details</h2>
        <form className="space-y-4">
          <Input
            type="text"
            value={shippingDetails.fullName}
            onChange={(e) => handleInputChange(e, "fullName")}
            placeholder="Full Name"
            className="w-full"
          />
          {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}

          <Input
            type="email"
            value={shippingDetails.email}
            onChange={(e) => handleInputChange(e, "email")}
            placeholder="Email Address"
            className="w-full"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <Input
            type="text"
            value={shippingDetails.address}
            onChange={(e) => handleInputChange(e, "address")}
            placeholder="Address"
            className="w-full"
          />
          {errors.address && <p className="text-red-500">{errors.address}</p>}

          <Input
            type="text"
            value={shippingDetails.city}
            onChange={(e) => handleInputChange(e, "city")}
            placeholder="City"
            className="w-full"
          />
          {errors.city && <p className="text-red-500">{errors.city}</p>}

          <Input
            type="text"
            value={shippingDetails.zipCode}
            onChange={(e) => handleInputChange(e, "zipCode")}
            placeholder="Zip Code"
            className="w-full"
          />
          {errors.zipCode && <p className="text-red-500">{errors.zipCode}</p>}
        </form>
      </div>

      {/* Checkout Button */}
      <Button
        label="Place Order"
        onClick={handleCheckout}
        color="teal"
        size="large"
        className="w-full"
      />
    </div>
  );
};

export default CheckoutPage;
