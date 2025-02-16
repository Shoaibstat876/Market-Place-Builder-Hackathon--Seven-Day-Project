'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n'; // Import i18n config
import '../styles/globals.css';
import { CartProvider } from '../context/CartContext';
import { NotificationProvider } from '../context/NotificationContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <html lang="en">
        <body>
          <CartProvider>
            <NotificationProvider>
              <Header />
              <main className="min-h-screen bg-gray-50" aria-label="Main Content">
                {children}
              </main>
              <Footer />
            </NotificationProvider>
          </CartProvider>
        </body>
      </html>
    </I18nextProvider>
  );
}
