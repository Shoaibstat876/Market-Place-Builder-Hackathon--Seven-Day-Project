// src/app/confirmation/page.tsx

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/shared/Button";

const ConfirmationPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto py-16 px-4 lg:px-8 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Order Confirmed!</h1>
      <p className="text-lg text-gray-600 mb-8">
        Thank you for your purchase. Your order has been placed successfully.
      </p>
      <p className="text-gray-500 mb-8">
        You will receive an email confirmation shortly with your order details.
      </p>
      <Button
        label="Back to Home"
        onClick={() => router.push("/")}
        color="teal"
        size="large"
        className="mb-4"
      />
      <Button
        label="View More Products"
        onClick={() => router.push("/products")}
        color="gray"
        size="large"
      />
    </div>
  );
};

export default ConfirmationPage;