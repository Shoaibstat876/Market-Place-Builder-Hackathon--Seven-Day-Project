// src/components/sections/ExploreNewStyles.tsx
"use client"
import React, { useState } from "react";
import Image from "next/image";
import { mockExploreNewStyles } from "@/utils/mockExploreNewStyles";

const ExploreNewStyles = () => {
  const [largeImageError, setLargeImageError] = useState(false);
  const [smallImageErrors, setSmallImageErrors] = useState<boolean[]>(new Array(mockExploreNewStyles.smallImages.length).fill(false));

  return (
    <section className="py-8 bg-white w-full relative">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Horizontal Heading for Small Screens */}
        <h2 className="block lg:hidden text-center text-2xl font-bold text-gray-800 mb-8">
          {mockExploreNewStyles.heading}
        </h2>

        {/* Vertical Heading - Outside Large Image */}
        <h2 className="absolute hidden lg:block -left-16 top-1/2 -translate-y-1/2 -rotate-90 text-2xl font-bold text-gray-800 whitespace-nowrap -ml-8">
          {mockExploreNewStyles.heading}
        </h2>

        {/* Layout Wrapper */}
        <div className="flex flex-col lg:flex-row gap-8 lg:ml-24">
          {/* Large Image Section */}
          <div className="w-full lg:w-[50%] h-[280px] sm:h-[360px] lg:h-[480px] relative">
            <Image
              src={largeImageError ? mockExploreNewStyles.fallbackImage : mockExploreNewStyles.largeImage.src}
              alt={mockExploreNewStyles.largeImage.alt}
              fill
              className="rounded-lg object-cover shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
              priority
              onError={() => setLargeImageError(true)}
            />
          </div>

          {/* Smaller Images Section */}
          <div className="w-full lg:w-[50%] grid grid-cols-2 gap-6 sm:gap-8">
            {mockExploreNewStyles.smallImages.map((image, index) => (
              <div key={index} className="w-full h-[160px] sm:h-[200px] lg:h-[230px] relative">
                <Image
                  src={smallImageErrors[index] ? mockExploreNewStyles.fallbackImage : image.src}
                  alt={image.alt}
                  fill
                  className="rounded-lg object-cover shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                  priority
                  onError={() => {
                    const newErrors = [...smallImageErrors];
                    newErrors[index] = true;
                    setSmallImageErrors(newErrors);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreNewStyles;
