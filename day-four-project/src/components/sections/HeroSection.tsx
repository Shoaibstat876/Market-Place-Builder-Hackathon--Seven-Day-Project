import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      {/* Main Section */}
      <div className="container mx-auto max-w-screen-xl flex flex-col-reverse lg:flex-row items-center">
        {/* Text Content */}
        <header className="lg:w-1/2 text-center lg:text-left px-6">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Welcome to Chairy
          </p>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            Best Furniture Collection For Your Interior.
          </h1>
          <p className="mt-4 text-gray-600">
            Discover our exclusive collection of furniture designed for comfort
            and elegance.
          </p>
          {/* Button Navigation */}
          <Link
            href="/products"
            className="mt-6 inline-block px-6 py-3 bg-teal-500 text-white text-lg font-medium rounded-lg shadow hover:bg-teal-600 focus:ring-4 focus:ring-teal-300 focus:outline-none transition"
            aria-label="Shop Now and Discover our Furniture"
          >
            Shop Now <span className="ml-2">→</span>
          </Link>
        </header>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/assets/images/Product Image.png"
            alt="Stylish and comfortable chair for home interiors."
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
