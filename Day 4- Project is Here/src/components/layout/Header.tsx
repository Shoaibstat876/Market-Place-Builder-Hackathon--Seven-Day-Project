"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

// Define the type for product items in search results
interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

interface NavLink {
  name: string;
  path: string;
}

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Product", path: "/product/1" },
    { name: "Pages", path: "/pages" },
  ];

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      try {
        const response = await fetch(`/api/search?query=${searchQuery}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
  };

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-[#272343] font-[800] text-white text-sm py-2">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Free Shipping Message */}
          <div className="flex items-center gap-2">
            <span aria-hidden="true">✔</span>
            <p className="text-white font-bold">Free Shipping On All Orders Over $50</p>
          </div>

          {/* Right Section */}
          <div className="hidden sm:flex items-center space-x-6">
            <button className="cursor-pointer hover:text-gray-300 transition-colors" aria-label="Select Language">
              Eng ▾
            </button>
            <Link href="/faq" className="hover:underline hover:text-gray-300 transition-colors">
              FAQs
            </Link>
            <div className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <div className="bg-white text-purple-900 rounded-full h-6 w-6 flex items-center justify-center" aria-hidden="true">!</div>
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
            <Image src="/assets/images/Logo Icon-1.png" alt="Comforty Logo" width={40} height={40} className="rounded-full" priority />
            <h1 className="text-2xl font-bold text-black">Comforty</h1>
          </Link>

          {/* Cart and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <div className="relative">
              <Link href="/cart" passHref>
                <div className="bg-gray-200 px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer">
                  <PiShoppingCartSimpleLight className="text-purple-900 text-2xl" aria-hidden="true" />
                  <span className="bg-teal-500 text-white text-xs font-bold rounded-full px-2 py-1">2</span>
                </div>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="sm:hidden text-purple-900 focus:outline-none" aria-expanded={isMobileMenuOpen} aria-label="Toggle Navigation Menu">
              {isMobileMenuOpen ? <span className="text-2xl" aria-hidden="true">&times;</span> : <span className="text-2xl" aria-hidden="true">&#9776;</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar in Third Layer (Desktop Navigation) */}
      <div className="py-4 border-b border-gray-300">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Navigation Links */}
          <nav className="hidden sm:flex flex-grow">
            <ul className="flex space-x-6 text-gray-700 justify-start">
              {navLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link href={path} className={`hover:text-purple-900 transition-colors ${name === "Home" ? "text-teal-500 font-semibold" : ""}`}>{name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Centered Search Bar and Contact Number */}
          <div className="flex items-center justify-between flex-grow">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex items-center border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-96 mx-auto">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full outline-none px-2 py-1 text-gray-700 placeholder-gray-400"
              />
              <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors duration-200">Search</button>
            </form>

            {/* Contact Info */}
            <div className="hidden md:flex items-center text-gray-700 cursor-pointer hover:text-purple-900 transition-colors ml-4">
              <Link href="/contact">
                <p className="font-bold text-sm">(808) 555-0111</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Display Search Results */}
      {searchResults.length > 0 && (
        <div className="bg-white shadow-lg p-4 mt-4 absolute top-16 left-1/2 transform -translate-x-1/2 w-96 z-50">
          <ul>
            {searchResults.map((product: Product) => (
              <li key={product.id} className="flex items-center space-x-4 py-2">
                <Image src={product.image} alt={product.name} width={50} height={50} className="rounded-md object-cover" />
                <div>
                  <Link href={`/product/${product.id}`} className="text-teal-500 font-semibold">{product.name}</Link>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="sm:hidden bg-gray-100 py-4">
          <ul className="space-y-2 px-6 text-gray-700">
            {navLinks.map(({ name, path }) => (
              <li key={name}>
                <Link href={path} className="block hover:text-purple-900 transition-colors">{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;