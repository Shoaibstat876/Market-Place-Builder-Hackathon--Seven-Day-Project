import React from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { FiPhone, FiHelpCircle, FiFileText } from "react-icons/fi"; // Importing icons

const PagesMenu = () => {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-10">
          Explore More Pages
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Contact Us */}
          <Link
            href="/contact"
            aria-label="Contact Us Page"
            className="block bg-teal-50 hover:bg-teal-100 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center space-x-4">
              <FiPhone className="text-teal-500 text-2xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
                <p className="text-gray-600 mt-2">
                  Reach out to us for assistance and inquiries.
                </p>
              </div>
            </div>
          </Link>

          {/* FAQs */}
          <Link
            href="/faq"
            aria-label="FAQs Page"
            className="block bg-teal-50 hover:bg-teal-100 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center space-x-4">
              <FiHelpCircle className="text-teal-500 text-2xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">FAQs</h2>
                <p className="text-gray-600 mt-2">Find answers to common questions.</p>
              </div>
            </div>
          </Link>

          {/* Terms & Conditions */}
          <Link
            href="/terms"
            aria-label="Terms & Conditions Page"
            className="block bg-teal-50 hover:bg-teal-100 p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center space-x-4">
              <FiFileText className="text-teal-500 text-2xl" />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Terms & Conditions</h2>
                <p className="text-gray-600 mt-2">
                  Understand our policies and practices.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default PagesMenu;
