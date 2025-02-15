"use client";

import React, { createContext, useContext, useState } from "react";

type NotificationType = "info" | "success" | "warning" | "error";

interface Notification {
  id: string;
  message: string;
  type: NotificationType;
  duration?: number;
}

interface NotificationContextProps {
  addNotification: (message: string, type: NotificationType, duration?: number) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (message: string, type: NotificationType, duration: number = 3000) => {
    const id = crypto.randomUUID(); // More reliable unique ID
    setNotifications((prev) => [...prev, { id, message, type, duration }]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, duration);
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      {/* Display Notifications */}
      <div className="fixed top-4 right-4 space-y-2 z-50">
        {notifications.map(({ id, message, type }) => (
          <div
            key={id}
            className={`p-3 rounded-md text-white shadow-md transition-opacity duration-300 ${
              type === "success" ? "bg-green-500" :
              type === "error" ? "bg-red-500" :
              type === "warning" ? "bg-yellow-500" :
              "bg-blue-500"
            }`}
          >
            {message}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};
