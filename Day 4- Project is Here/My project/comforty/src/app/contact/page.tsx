// src/app/contact/page.tsx
import React from "react";
import { FiMapPin, FiPhone, FiClock } from "react-icons/fi"; // Icon imports

const ContactPage = () => {
  return (
    <>
      {/* Contact Section */}
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
                For more information about our product & services, please feel
                free to drop us an email. Our staff will always be there to help
                you out. Do not hesitate!
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
            <form className="space-y-6">
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
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          {[
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="black"
                  className="w-8 h-8 text-blue-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                  />
                </svg>
              ),
              title: "High Quality",
              description: "Crafted from top materials for ultimate satisfaction.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="black"
                  className="w-8 h-8 text-blue-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              ),
              title: "Warranty Protection",
              description: "Enjoy over 2 years of assured warranty.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  width="40"
                  height="40"
                  className="text-blue-900"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="30"
                    fill="none"
                    stroke="black"
                    strokeWidth="8"
                  />
                  <path
                    d="M20 50 L20 65 Q20 75 30 75 L30 75"
                    stroke="black"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M80 50 L80 65 Q80 75 70 75 L70 75"
                    stroke="black"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M70 65 Q80 65 80 55"
                    stroke="black"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              ),
              title: "Customer Support",
              description: "24/7 assistance from our friendly team.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative flex items-center space-x-4 cursor-pointer"
            >
              {/* Icon */}
              <span className="group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </span>

              {/* Title & Description */}
              <div>
                <p className="text-gray-800 font-bold">{feature.title}</p>
                <p className="text-gray-600 text-sm group-hover:text-teal-500 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ContactPage;
