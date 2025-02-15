import "../styles/globals.css";
import { CartProvider } from "../context/CartContext";
import { NotificationProvider } from "../context/NotificationContext"; // ✅ Added
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
          <NotificationProvider> {/* ✅ Wrapped entire app inside NotificationProvider */}
            <Header />
            <main className="min-h-screen bg-gray-50" aria-label="Main Content">
              {children}
            </main>
            <Footer />
          </NotificationProvider>
        </CartProvider>
      </body>
    </html>
  );
}
