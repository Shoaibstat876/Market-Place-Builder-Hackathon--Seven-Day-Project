// src/components/sections/HeroSection.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mockHeroSection } from "@/utils/mockHeroSection";

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      {/* Main Section */}
      <div className="container mx-auto max-w-screen-xl flex flex-col-reverse lg:flex-row items-center">
        {/* Text Content */}
        <header className="lg:w-1/2 text-center lg:text-left px-6">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            {mockHeroSection.tagline}
          </p>
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            {mockHeroSection.heading}
          </h1>
          <p className="mt-4 text-gray-600">{mockHeroSection.description}</p>
          {/* Button Navigation */}
          <Link
            href={mockHeroSection.button.link}
            className="mt-6 inline-block px-6 py-3 bg-teal-500 text-white text-lg font-medium rounded-lg shadow hover:bg-teal-600 focus:ring-4 focus:ring-teal-300 focus:outline-none transition"
            aria-label={`Shop Now and Discover our Furniture`}
          >
            {mockHeroSection.button.text} <span className="ml-2">→</span>
          </Link>
        </header>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src={mockHeroSection.image.src}
            alt={mockHeroSection.image.alt}
            width={mockHeroSection.image.width}
            height={mockHeroSection.image.height}
            className="rounded-lg object-cover w-full"
            priority // Ensures faster loading for hero image
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
