//src\components\layout\Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

interface NavLink {
  name: string;
  path: string;
}

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Product", path: "/product/1" },
    { name: "Pages", path: "/pages" },
  ];

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-[#272343] font-[800] text-white text-sm py-2">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Free Shipping Message */}
          <div className="flex items-center gap-2">
            <span aria-hidden="true">✔</span>
            <p className="text-white font-bold">
              Free Shipping On All Orders Over $50
            </p>
          </div>

          {/* Right Section */}
          <div className="hidden sm:flex items-center space-x-6">
            {/* Language Selector */}
            <button
              className="cursor-pointer hover:text-gray-300 transition-colors"
              aria-label="Select Language"
              aria-haspopup="true"
            >
              Eng ▾
            </button>

            {/* FAQs */}
            <Link href="/faq" className="hover:underline hover:text-gray-300 transition-colors">
              FAQs
            </Link>

            {/* Need Help */}
            <div className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <div
                className="bg-white text-purple-900 rounded-full h-6 w-6 flex items-center justify-center"
                aria-hidden="true"
              >
                !
              </div>
              <p>Need Help</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gray-100 py-4 shadow-sm">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/assets/images/Logo Icon-1.png"
              alt="Comforty Logo"
              width={40}
              height={40}
              className="rounded-full"
              priority
            />
            <h1 className="text-2xl font-bold text-black">Comforty</h1>
          </Link>

          {/* Cart and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <div className="relative">
              <Link href="/cart" passHref>
                <div className="bg-gray-200 px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer">
                  <PiShoppingCartSimpleLight
                    className="text-purple-900 text-2xl"
                    aria-hidden="true"
                  />
                  <span className="bg-teal-500 text-white text-xs font-bold rounded-full px-2 py-1">
                    2
                  </span>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden text-purple-900 focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <span className="text-2xl" aria-hidden="true">
                  &times;
                </span>
              ) : (
                <span className="text-2xl" aria-hidden="true">
                  &#9776;
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="sm:hidden bg-gray-100 py-4">
          <ul className="space-y-2 px-6 text-gray-700">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <Link
                  href={path}
                  className="block hover:text-purple-900 transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Desktop Navigation */}
      <div className="hidden sm:block py-4 border-b border-gray-300">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <nav>
            <ul className="flex space-x-6 text-gray-700">
              {navLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    href={path}
                    className={`hover:text-purple-900 transition-colors ${
                      name === "Home" ? "text-teal-500 font-semibold" : ""
                    }`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href="/contact">
            <div className="text-gray-700 cursor-pointer hover:text-purple-900 transition">
              Contact: <span className="font-bold">(808) 555-0111</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
