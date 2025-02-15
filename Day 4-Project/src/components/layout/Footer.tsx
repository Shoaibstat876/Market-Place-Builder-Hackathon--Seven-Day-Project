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

const Footer: React.FC = () => {
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
    <footer className="bg-white py-8 md:py-10 lg:py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 lg:px-8 max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Social Links */}
          <div className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-center space-x-3">
              <Image
                src="/assets/images/Logo Icon-1.png"
                alt="Comforty Logo"
                width={50}
                height={50}
                priority
              />
              <h1 className="text-2xl font-bold text-gray-800">Comforty</h1>
            </div>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Comforts is your one-stop destination for all things. Explore a wide
              range of products to enhance your comfort experience.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4 mt-4">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition text-xl"
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="text-center sm:text-left">
            <h2 className="text-gray-800 font-semibold text-xl">CATEGORY</h2>
            <ul className="mt-4 space-y-2 text-base text-gray-600">
              {categories.map(({ name, slug }) => (
                <li key={slug}>
                  <button
                    onClick={() => handleCategoryClick(slug)}
                    className={`w-full text-left transition ${
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

          {/* Support */}
          <div className="text-center sm:text-left">
            <h2 className="text-gray-800 font-semibold text-xl">SUPPORT</h2>
            <ul className="mt-4 space-y-2 text-base text-gray-600">
              {supportLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="hover:text-teal-500 transition"
                    aria-label={`Read ${name}`}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h2 className="text-gray-800 font-semibold text-xl">NEWSLETTER</h2>
            <form className="mt-4 flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-3" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                aria-label="Enter your email"
                className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-base"
              />
              <button
                type="submit"
                className="bg-teal-500 text-white px-5 py-2 rounded-md hover:bg-teal-600 text-base"
                aria-label="Subscribe to Newsletter"
              >
                Subscribe
              </button>
            </form>
            {message && <p className="mt-2 text-teal-600">{message}</p>}
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              Kindly enter your email here please.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
