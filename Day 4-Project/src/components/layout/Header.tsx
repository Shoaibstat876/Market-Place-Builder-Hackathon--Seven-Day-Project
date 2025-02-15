// File: src/components/layout/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { useCart } from "../../context/CartContext"; // ✅ Import Cart Context
import CategoryDropdown from "../shared/CategoryDropdown";

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
  const [cartCount, setCartCount] = useState(0);

  // ✅ Get cart items from CartContext
  const { cartItems } = useCart();

  // ✅ Ensure cart count is updated only on the client to prevent hydration mismatch
  useEffect(() => {
    setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
  }, [cartItems]);

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/products" },
    { name: "Trend", path: "/trend" }, 
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQs", path: "/faq" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Studio", path: "/studio" } // Added Studio link
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
      <div className="bg-[#272343] font-bold text-white text-sm py-2">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <p className="text-white">✔ Free Shipping On All Orders Over $50</p>
          <div className="hidden sm:flex items-center space-x-6">
            <button className="hover:text-gray-300 transition-colors" aria-label="Select Language">
              Eng ▾
            </button>
            <Link href="/faq" className="hover:text-gray-300 transition-colors">FAQs</Link>
            <div className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <div className="bg-white text-purple-900 rounded-full h-6 w-6 flex items-center justify-center" aria-hidden="true">!</div>
              <p>Need Help</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gray-100 py-5 shadow-sm">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <Image src="/assets/images/Logo Icon-1.png" alt="Comforty Logo" width={50} height={50} className="rounded-full" priority />
            <h1 className="text-3xl font-bold text-black">Comforty</h1>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center border border-gray-300 rounded-lg px-4 py-2 w-[400px]">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full outline-none px-3 py-2 text-gray-700 placeholder-gray-400 text-lg"
            />
            <button type="submit" className="bg-teal-500 text-white px-5 py-2 rounded-lg hover:bg-teal-600 transition-colors duration-200 text-lg">
              Search
            </button>
          </form>

          {/* Contact & Cart */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center text-gray-700 cursor-pointer hover:text-purple-900 transition-colors">
              <Link href="/contact">
                <p className="font-bold text-lg">(808) 555-0111</p>
              </Link>
            </div>

            {/* Cart Icon with Dynamic Count ✅ */}
            <Link href="/cart" className="relative">
              <div className="bg-gray-200 px-5 py-3 rounded-lg flex items-center gap-2 cursor-pointer">
                <PiShoppingCartSimpleLight className="text-purple-900 text-3xl" aria-hidden="true" />
                {cartCount > 0 && (
                  <span className="bg-teal-500 text-white text-sm font-bold rounded-full px-3 py-1">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>

            <button 
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} 
              className="sm:hidden text-purple-900 focus:outline-none text-3xl" 
              aria-expanded={isMobileMenuOpen} 
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <span aria-hidden="true">&times;</span> : <span aria-hidden="true">&#9776;</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="py-5 border-b border-gray-300">
        <div className="container mx-auto px-6">
          <nav className="hidden sm:flex items-center justify-center">
            <ul className="flex items-center space-x-8 text-[18px] text-gray-800 tracking-wide">
              {navLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link href={path} className="py-3 px-4 hover:text-teal-600 font-semibold transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
              <li>
                <CategoryDropdown />
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Search Results Section */}
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
                <Link href={path} className="block py-2 px-3 hover:text-teal-600 transition-colors">
                  {name}
                </Link>
              </li>
            ))}
            <li>
              <CategoryDropdown />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
