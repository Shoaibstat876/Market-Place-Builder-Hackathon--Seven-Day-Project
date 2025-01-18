import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: faFacebookF, href: "https://facebook.com", label: "Facebook" },
    { icon: faTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: faInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: faPinterest, href: "https://pinterest.com", label: "Pinterest" },
    { icon: faYoutube, href: "https://youtube.com", label: "YouTube" },
  ];

  const categories = [
    { name: "Sofa", href: "/cart" },
    { name: "Armchair", href: "/cart" },
    { name: "Wing Chair", href: "/cart" },
    { name: "Desk Chair", href: "/cart" },
    { name: "Wooden Chair", href: "/cart" },
    { name: "Park Bench", href: "/cart" },
  ];

  const supportLinks = [
    { name: "Help & Support", href: "/help-support" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "FAQs", href: "/faqs" },
  ];

  return (
    <footer className="bg-white py-6 md:py-8 lg:py-10 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-screen-lg grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Social Links */}
        <div>
          <div className="flex items-center space-x-2">
            <Image
              src="/assets/images/Logo Icon-1.png"
              alt="Comforty Logo"
              width={32}
              height={32}
            />
            <h1 className="text-lg font-bold text-gray-800">Comforty</h1>
          </div>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          <div className="flex space-x-4 mt-4">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition"
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-gray-800 font-semibold text-sm">CATEGORY</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            {categories.map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="hover:text-teal-500 transition"
                  aria-label={`View ${name}`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-gray-800 font-semibold text-sm">SUPPORT</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
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
        <div>
          <h2 className="text-gray-800 font-semibold text-sm">NEWSLETTER</h2>
          <form className="mt-4">
            <div className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Your email"
                aria-label="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
              />
              <button
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 text-sm"
                aria-label="Subscribe to Newsletter"
              >
                Subscribe
              </button>
            </div>
          </form>
          <p className="mt-4 text-xs text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
