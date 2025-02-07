// src/components/sections/TopCategories.tsx

import React from "react";
import Image from "next/image";
import { mockTopCategories } from "@/utils/mockTopCategories";

const TopCategories: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
          Top Categories
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTopCategories.map((category) => (
            <div
              key={category.id}
              aria-label={`Category: ${category.name} with ${category.products}`}
              className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              {/* Category Image */}
              <Image
                src={category.image}
                alt={category.name}
                width={350} 
                height={250}
                className="object-cover w-full h-auto"
              />

              {/* Overlay with Text */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4">
                <h3 className="text-lg font-bold text-white">{category.name}</h3>
                <p className="text-sm text-gray-300">{category.products}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
