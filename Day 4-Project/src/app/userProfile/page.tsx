// src/app/userProfile/page.tsx
"use client";
import React, { useState, useEffect } from "react";

// Define the User Profile Type
interface Order {
  id: number;
  product: string;
  date: string;
  status: string;
}

interface UserProfileData {
  name: string;
  email: string;
  shippingAddress: string;
  orderHistory: Order[];
}

const UserProfile: React.FC = () => {
  // Initialize state with user data
  const [user, setUser] = useState<UserProfileData>({
    name: "John Doe",
    email: "john.doe@example.com",
    shippingAddress: "123 Main St, Springfield, IL 62701",
    orderHistory: [
      { id: 1, product: "Product 1", date: "2025-01-01", status: "Delivered" },
      { id: 2, product: "Product 2", date: "2025-01-05", status: "Shipped" },
      { id: 3, product: "Product 3", date: "2025-01-10", status: "Pending" },
    ],
  });

  // Handle changes in input fields
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle form submission (saving the data)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userProfile", JSON.stringify(user));
    alert("Profile Updated and Saved!");
    console.log("User Profile Saved:", user);
  };

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      setUser(JSON.parse(savedProfile) as UserProfileData);
    }
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>

      {/* Editable Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-sm mb-6">
        <h2 className="text-2xl font-semibold">Personal Information</h2>
        <div>
          <label htmlFor="name" className="block text-lg font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="email" className="block text-lg font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mt-4">
          <label htmlFor="shippingAddress" className="block text-lg font-semibold">Shipping Address</label>
          <input
            type="text"
            id="shippingAddress"
            name="shippingAddress"
            value={user.shippingAddress}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button type="submit" className="mt-6 bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition-colors">
          Save Changes
        </button>
      </form>

      {/* Order History (Non-editable for now) */}
      <div className="bg-white p-6 rounded-md shadow-sm">
        <h2 className="text-2xl font-semibold">Order History</h2>
        <ul className="mt-4">
          {user.orderHistory.map((order) => (
            <li key={order.id} className="border-b py-2">
              <p><strong>Product:</strong> {order.product}</p>
              <p><strong>Date:</strong> {order.date}</p>
              <p><strong>Status:</strong> {order.status}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
