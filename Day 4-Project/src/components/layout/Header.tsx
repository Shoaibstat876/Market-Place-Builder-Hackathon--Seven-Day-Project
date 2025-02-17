// File: src/components/layout/Header.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { useCart } from "../../context/CartContext"; // ✅ Import Cart Context
import CategoryDropdown from "../shared/CategoryDropdown";
import { useTranslation } from "react-i18next"; // ✅ Add this line
import LanguageSwitcher from "../sections/LanguageSwitcher";

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // ✅ State to control dropdown
  const searchRef = useRef<HTMLDivElement>(null); // ✅ Reference for outside click detection

  const [cartCount, setCartCount] = useState(0);


  const { t } = useTranslation(); // ✅ Initialize translation hook
  // ✅ Get cart items from CartContext
  const { cartItems } = useCart();

  // ✅ Ensure cart count is updated only on the client to prevent hydration mismatch
  useEffect(() => {
    setCartCount(cartItems.reduce((total, item) => total + item.quantity, 0));
  }, [cartItems]);

const navLinks: NavLink[] = [
  { name: t("Home"), path: "/" },
  { name: t("Shop"), path: "/products" },
  { name: t("Trend"), path: "/trend" }, 
  { name: t("About Us"), path: "/about" },
  { name: t("Contact"), path: "/contact" },
  { name: t("FAQs"), path: "/faq" },
  { name: t("Terms & Conditions"), path: "/terms" },
  { name: t("Profile"), path: "/userProfile" },
];

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      try {
        const response = await fetch(`/api/search?query=${searchQuery}`);
        const data = await response.json();
        setSearchResults(data);
        setIsDropdownOpen(true); // ✅ Show dropdown when results are available
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
  };

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header>
    {/* Top Bar */}
<div className="bg-[#272343] font-bold text-white text-sm py-2">
  <div className="container mx-auto px-6 flex justify-between items-center">
    
    {/* Free Shipping Message */}
    <p className="text-white">✔ {t("Free Shipping")}</p>

    {/* Right Side: Language Switcher, FAQs, Help */}
    <div className="hidden sm:flex items-center space-x-6">
      
      {/* Language Switcher ✅ */}
      <LanguageSwitcher /> 

      {/* FAQs Link */}
      <Link href="/faq" className="hover:text-gray-300 transition-colors">
        {t("FAQs")}
      </Link>

        {/* Need Help Section ✅ */}
        <div className="flex items-center gap-2 hover:text-gray-300 transition-colors">
        <div className="bg-white text-purple-900 rounded-full h-6 w-6 flex items-center justify-center" aria-hidden="true">!</div>
        <p>{t("Need Help?")}</p>
      </div>

    </div>
  </div>
</div>


   {/* Main Header */}
<div className="bg-gray-100 py-5 shadow-sm">
  <div className="container mx-auto px-6 flex justify-between items-center">
    {/* Logo ✅ */}
    <Link href="/" className="flex items-center gap-4">
      <Image src="/assets/images/Logo Icon-1.png" alt="Comforty Logo" width={50} height={50} className="rounded-full" priority />
      <h1 className="text-3xl font-bold text-black">{t("Logo")}</h1>
    </Link>

         {/* Search Bar ✅ */}
         <div className="relative w-[400px]" ref={searchRef}>
            <form onSubmit={handleSearch} className="hidden md:flex items-center border border-gray-300 rounded-lg px-4 py-2 w-full">
              <input
                type="text"
                placeholder={t("Search Placeholder")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full outline-none px-3 py-2 text-gray-700 placeholder-gray-400 text-lg"
                onFocus={() => setIsDropdownOpen(true)} // ✅ Show dropdown when focused
                onKeyDown={(e) => {
                  if (e.key === "Enter") setIsDropdownOpen(false); // ✅ Close dropdown on Enter
                }}
              />
              <button type="submit" className="bg-teal-500 text-white px-5 py-2 rounded-lg hover:bg-teal-600 transition-colors duration-200 text-lg">
                {t("Search")}
              </button>
            </form>

             {/* Search Results Dropdown */}
             {isDropdownOpen && searchResults.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg p-4 mt-2 rounded-lg z-50">
                <ul>
                  {searchResults.map((product) => (
                    <li key={product.id} className="flex items-center space-x-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => {
                        setSearchQuery(""); // ✅ Clear search input
                        setIsDropdownOpen(false); // ✅ Close dropdown
                      }}
                    >
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
          </div>

          {/* Contact & Cart */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center text-gray-700 cursor-pointer hover:text-purple-900 transition-colors">
              <Link href="/contact">
              <p className="font-bold text-lg">{t("Contact Number")}</p>
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
