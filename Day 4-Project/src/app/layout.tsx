// File: src/app/layout.tsx

import "../styles/globals.css";
import { CartProvider } from "../context/CartContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main className="min-h-screen bg-gray-50" aria-label="Main Content">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
