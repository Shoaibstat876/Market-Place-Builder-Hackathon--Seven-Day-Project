"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "") {
      setMessage("Please enter a valid email address.");
    } else {
      setMessage("Email sent successfully!");
      setEmail("");
    }
  };

  const socialLinks = [
    { icon: faFacebookF, href: "https://facebook.com", label: "Facebook" },
    { icon: faTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: faInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: faPinterest, href: "https://pinterest.com", label: "Pinterest" },
    { icon: faYoutube, href: "https://youtube.com", label: "YouTube" },
  ];

  const categories = [
    { name: "Chairs", slug: "chairs" },
    { name: "Sofas", slug: "sofas" },
    { name: "Tables", slug: "tables" },
    { name: "Beds", slug: "beds" },
    { name: "Storage", slug: "storage" },
  ];

  const supportLinks = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "FAQs", href: "/faq" },
  ];

  const handleCategoryClick = (slug: string) => {
    setActiveCategory(slug);
    if (window.location.pathname !== "/categories") {
      router.push(`/categories#${slug}`);
      return;
    }
    const section = document.getElementById(slug);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      section.classList.add("bg-yellow-100");
      setTimeout(() => section.classList.remove("bg-yellow-100"), 1000);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main footer content */}
      <div className="w-full px-4 py-6 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 sm:gap-10 lg:grid-cols-4 xl:gap-12">
            {/* Logo & Social Links Section */}
            <div className="flex flex-col items-center xs:items-start">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                  <Image
                    src="/assets/images/Logo Icon-1.png"
                    alt="Comforty Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Comforty</h1>
              </div>
              <p className="mt-4 text-sm sm:text-base text-gray-600 text-center xs:text-left">
                Comforts is your one-stop destination for all things. Explore a wide range
                of products to enhance your comfort experience.
              </p>
              <div className="flex flex-wrap justify-center xs:justify-start gap-3 mt-4">
                {socialLinks.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-colors duration-300 text-base sm:text-xl"
                  >
                    <FontAwesomeIcon icon={icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Categories Section */}
            <div className="flex flex-col items-center xs:items-start">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">CATEGORY</h2>
              <ul className="mt-4 space-y-2 text-sm sm:text-base text-gray-600">
                {categories.map(({ name, slug }) => (
                  <li key={slug}>
                    <button
                      onClick={() => handleCategoryClick(slug)}
                      className={`transition-colors duration-300 ${
                        activeCategory === slug
                          ? "text-teal-600 font-semibold underline"
                          : "hover:text-teal-500"
                      }`}
                    >
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Section */}
            <div className="flex flex-col items-center xs:items-start">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">SUPPORT</h2>
              <ul className="mt-4 space-y-2 text-sm sm:text-base text-gray-600">
                {supportLinks.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className="hover:text-teal-500 transition-colors duration-300"
                      aria-label={`Read ${name}`}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="flex flex-col items-center xs:items-start">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">NEWSLETTER</h2>
              <form 
                onSubmit={handleSubmit}
                className="mt-4 w-full max-w-md"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    aria-label="Enter your email"
                    className="flex-1 px-4 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors duration-300 text-sm sm:text-base whitespace-nowrap"
                    aria-label="Subscribe to Newsletter"
                  >
                    Subscribe
                  </button>
                </div>
                {message && (
                  <p className="mt-2 text-sm sm:text-base text-teal-600">{message}</p>
                )}
              </form>
              <p className="mt-4 text-sm sm:text-base text-gray-600 text-center xs:text-left">
                Kindly enter your email here please.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;