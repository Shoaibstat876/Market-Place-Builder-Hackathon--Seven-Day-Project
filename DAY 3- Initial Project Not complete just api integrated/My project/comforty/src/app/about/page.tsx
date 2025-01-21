// src/app/about/page.tsx
import React from "react";
import Image from "next/image";
import { FaShippingFast, FaCheckCircle } from "react-icons/fa";
import Link from "next/link"; // Import Link component

const features = [
  {
    icon: <FaShippingFast />,
    title: "Next day as standard",
    description: "Order before 2pm and get your order the next day as standard",
  },
  {
    icon: <FaCheckCircle />,
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftsmanship",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="48"
        height="48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-teal-500"
      >
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="2"
          ry="2"
          fill="#14B8A6"
        ></rect>
        <rect x="3" y="10" width="18" height="2" fill="#FFFFFF"></rect>
        <line x1="7" y1="15" x2="11" y2="15" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="15" y1="15" x2="17" y2="15" stroke="#FFFFFF" strokeWidth="2" />
      </svg>
    ),
    title: "Unbeatable prices",
    description: "For our materials and quality you won’t find better prices anywhere",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="48"
        height="48"
        className="text-teal-500"
      >
        <path
          fill="currentColor"
          d="M19.5,4.7c-5,0.5-9.3,1-9.5,1.2s0.6,4,1.7,8.6C20.4,50.2,36,75.4,55.4,85.1c7.9,3.9,12.9,5.1,21.6,5.1
            c8.6-0.1,13.4-1,20.2-4.2c2.3-1.1,4.3-1.9,4.6-1.9c1,0,8.8,13.6,14.5,25.1c14.7,29.9,24.3,62.7,25.2,85.9c0.3,8.6,0.3,9.4-1.7,17
            c-2.8,10.9-3.9,19.4-3.9,28.7c0,7.5,0.1,8,1.6,9.4c2.1,2.2,5.5,2.2,7.3,0c1.1-1.3,1.3-3,1.6-12.3c0.5-14.7,3.2-26.4,9.6-41.9
            c3.3-7.9,10.8-22.6,11.6-22.6c0.3,0,1.5,0.7,2.6,1.5c5.9,4.4,13,6.5,20.3,6c20.6-1.4,38.1-23.3,48.9-61.5c2.9-10.1,7.3-30.3,6.7-30.9
            c-0.2-0.2-8.1-0.3-17.5-0.3c-18.5,0-24.8,0.7-36.1,4c-6.9,2-16.3,6.4-21.5,10.1c-19.3,13.8-24.6,39-12.5,59.8c1.2,2.1,1.7,3.3,1.2,3.9
            c-0.3,0.4-2.5,4.2-4.8,8.4c-3.5,6.4-4.3,7.4-4.6,6.1c-0.2-0.8-0.8-4-1.3-7c-5.7-29.6-20.3-66.7-36.1-91.5l-2.8-4.4l3.4-3.6
            c4.3-4.6,7.1-8.9,9.3-14.6c1.5-4,1.7-5.3,1.8-12.2c0-9.3-1.2-13-6.1-19.7C110.4,16.5,96,9.5,73.7,5.7C63.9,4,33.9,3.4,19.5,4.7z"
        />
      </svg>
    ),
    title: "Recycling Packaging",
    description: "We use 100% recycled materials to ensure our footprint is manageable",
  },
];

const products = [
  { id: 1, image: "/assets/images/sofa-big.png", name: "The Poplar Suede Sofa", price: "$99.00", link: "/product/1" },
  { id: 2, image: "/assets/images/black-chair.png", name: "The Dandy Chair", price: "$99.00", link: "/product/2" },
  { id: 3, image: "/assets/images/dark-chair.png", name: "Lonely Chair", price: "$99.00", link: "/product/3" },
];

const AboutPage = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="bg-teal-700 text-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-transform">
            <h1 className="text-2xl font-bold mb-4">About Us - Comforty</h1>
            <p>
              At Comforty, we believe that the right chair can transform your space and elevate your comfort.
              Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
            
            {/* Wrap the button with Link component */}
            <Link href="/products">
              <button className="mt-6 px-6 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition">
                View Collection
              </button>
            </Link>
          </div>

          {/* Right Column */}
          <div>
            <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/images/Image-5.png"
                alt="About Us"
                className="rounded-lg shadow-lg object-cover"
                width={800}
                height={600}
                sizes="(max-width: 640px) 100vw, 
                       (max-width: 768px) 80vw,
                       (max-width: 1024px) 70vw,
                       60vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">What Makes Our Brand Different</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border p-6 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-transform"
              >
                <div className="text-4xl text-teal-500 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-800">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Our Popular Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link key={product.id} href={product.link}>
                <div className="border rounded-lg p-4 shadow hover:shadow-lg hover:scale-105 transition-transform cursor-pointer">
                  <div className="relative w-full h-48 sm:h-56 lg:h-60">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 mt-2">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
