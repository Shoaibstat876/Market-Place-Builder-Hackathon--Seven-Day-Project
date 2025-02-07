"use client";
import React, { useState } from "react";
import { FiMapPin, FiPhone, FiClock } from "react-icons/fi"; // Icon imports

const ContactPage = () => {
  // State to manage form submission message
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(
      "It's always a pleasure to make new connections and explore potential opportunities."
    );
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="space-y-8">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Get In Touch With Us
            </h1>
            <p className="text-gray-600 max-w-md mx-auto">
              For more information about our products & services, feel free to
              drop us an email. Our staff is always here to help!
            </p>
          </div>

          {/* Address, Phone, and Working Time */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-center space-x-4">
              <FiMapPin className="text-black text-2xl" />
              <div>
                <h3 className="font-bold text-black">Address</h3>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <FiPhone className="text-black text-2xl" />
              <div>
                <h3 className="font-bold text-black">Phone</h3>
                <p className="text-gray-600">Mobile: (+84) 546-6789</p>
                <p className="text-gray-600">Hotline: (+84) 456-6789</p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-center space-x-4">
              <FiClock className="text-black text-2xl" />
              <div>
                <h3 className="font-bold text-black">Working Time</h3>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-600 font-medium"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-600 font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-gray-600 font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Optional"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-600 font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Hi! I’d like to ask about..."
                rows={5}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 hover:scale-105 transition-transform"
            >
              Submit
            </button>
          </form>

          {/* Success Message */}
          {message && (
            <div className="mt-6 text-center text-teal-500 font-semibold">
              {message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
