// File: src/components/shared/CategoryDropdown.tsx

"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRouter } from "next/navigation";

// Categories list (Must match section IDs on Categories Page)
const categories = [
  { name: "Chairs", slug: "chairs", count: 12 },
  { name: "Sofas", slug: "sofas", count: 8 },
  { name: "Tables", slug: "tables", count: 6 },
  { name: "Beds", slug: "beds", count: 4 },
  { name: "Storage", slug: "storages", count: 2 },
];

const ListIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`w-6 h-6 ${className}`}
    aria-hidden="true"
  >
    <circle cx="4" cy="6" r="2" />
    <circle cx="4" cy="12" r="2" />
    <circle cx="4" cy="18" r="2" />
    <rect x="8" y="5" width="12" height="2" />
    <rect x="8" y="11" width="12" height="2" />
    <rect x="8" y="17" width="12" height="2" />
  </svg>
);

const CategoryDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Scrolls to the category section
  const handleCategoryClick = (slug: string) => {
    setIsOpen(false);
    if (window.location.pathname !== "/categories") {
      router.push(`/categories#${slug}`);
      return;
    }

    const section = document.getElementById(slug);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });

      // Highlight effect
      section.classList.add("bg-yellow-100"); // Temporary highlight
      setTimeout(() => section.classList.remove("bg-yellow-100"), 1000);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* ✅ Dropdown Toggle Button */}
      <div className="flex items-center gap-3 cursor-pointer">
        {/* Left - Clickable List Icon */}
        <button
          onClick={() => router.push("/categories")}
          className="flex items-center text-gray-700 hover:text-purple-900 transition-colors"
          aria-label="Navigate to Categories"
        >
          <ListIcon className="text-gray-700 hover:text-purple-900" />
        </button>

        {/* Separator */}
        <span className="border-l border-gray-400 h-6"></span>

        {/* Right - Clickable Chevron */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-gray-700 hover:text-purple-900 transition-colors focus:outline-none"
          aria-expanded={isOpen}
          aria-controls="category-dropdown"
          aria-label="Toggle category dropdown"
        >
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {/* ✅ Dropdown Menu */}
      {isOpen && (
        <div
          id="category-dropdown"
          className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg p-2 z-50 border border-gray-300"
          role="menu"
        >
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.slug}>
                <button
                  onClick={() => handleCategoryClick(category.slug)}
                  className="w-full text-left text-gray-700 px-3 py-2 hover:bg-teal-100 rounded-md transition"
                  role="menuitem"
                >
                  {category.name} <span className="text-gray-500">({category.count})</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
