"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Notification {
  id: string;
  message: string;
  type: "success" | "error" | "info" | "warning";
  duration?: number; // Allow custom timeout per notification
}

interface NotificationContextProps {
  addNotification: (message: string, type: Notification["type"], duration?: number) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (message: string, type: Notification["type"], duration: number = 3000) => {
    const id = crypto.randomUUID(); // More reliable unique ID
    setNotifications((prev) => [...prev, { id, message, type, duration }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((notif) => notif.id !== id));
    }, duration);
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}

      {/* Notification Container */}
      <div className="fixed bottom-5 right-5 space-y-2 z-50">
        <AnimatePresence>
          {notifications.map(({ id, message, type }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.3 }}
              className={`p-4 rounded-lg shadow-lg text-white font-semibold max-w-sm text-sm transition-all
                ${type === "success" ? "bg-green-500" : ""}
                ${type === "error" ? "bg-red-500" : ""}
                ${type === "info" ? "bg-blue-500" : ""}
                ${type === "warning" ? "bg-yellow-500 text-black" : ""}`}
            >
              {message}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </NotificationContext.Provider>
  );
};



// ✅ Enhancements for Checkout & Cart Page:
// - Success notification for order placement
// - Error notifications for form validation
// - Warning if cart is empty
// - Info notification when adding/removing from wishlist
// - Success notification for checkout completion
// - Warning notifications support added
