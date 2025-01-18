import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      {/* Main Section */}
      <div className="container mx-auto max-w-screen-lg flex flex-col-reverse lg:flex-row items-center">
        {/* Text Content */}
        <header className="lg:w-1/2 text-center lg:text-left px-6">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Welcome to Chairy
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            Best Furniture Collection For Your Interior.
          </h1>
          <p className="mt-4 text-gray-600">
            Discover our exclusive collection of furniture designed for comfort
            and elegance.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition"
            aria-label="Shop Now and Discover our Furniture"
          >
            Shop Now <span className="ml-2">→</span>
          </button>
        </header>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/assets/images/Product Image.png"
            alt="Stylish and comfortable chair for your home"
            width={600}
            height={400}
            className="rounded-lg object-cover w-full"
            priority // Ensures faster loading for hero image
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
