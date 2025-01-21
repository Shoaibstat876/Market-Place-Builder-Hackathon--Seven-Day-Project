import React from "react";
import Image from "next/image";

const BrandingSection = () => {
  const logos = [
    {
      src: "/assets/images/Logo-6.png",
      alt: "Zapier",
      height: 87,
      width: 85,
    
    },
    {
      src: "/assets/images/Logo-7.png",
      alt: "Pipedrive",
      height: 109,
      width: 107,
     
    },
    {
      src: "/assets/images/Logo-8.png",
      alt: "CIB BANK",
      height: 139,
      width: 135,
      
    },
    {
      src: "/assets/images/Logo-9.png",
      alt: "7",
      height: 65,
      width: 63,
     
    },
    {
      src: "/assets/images/Logo-10.png",
      alt: "Burnt Toast",
      height: 101,
      width: 98,
     
    },
    {
      src: "/assets/images/Logo-11.png",
      alt: "PandaDoc",
      height: 115,
      width: 113,
    
    },
    {
      src: "/assets/images/Logo-12.png",
      alt: "Moz",
      height: 87,
      width: 84,
     
    },
  ];

  return (
    <section className="bg-gray-50 py-12">
      {/* Branding Logos Container */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
          {logos.map((logo) => (
            <a
              key={logo.alt}
            
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${logo.alt}`}
              title={`Visit ${logo.alt}`}
              className="flex items-center justify-center p-4 rounded-lg bg-white shadow-sm hover:shadow-lg hover:opacity-80 transform hover:scale-105 transition-all border border-gray-200"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain max-h-20 sm:max-h-24 md:max-h-32 h-auto"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingSection;
