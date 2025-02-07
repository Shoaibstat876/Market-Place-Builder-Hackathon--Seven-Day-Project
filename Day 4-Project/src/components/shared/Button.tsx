// File: src/components/shared/Button.tsx

import React from "react";

interface ButtonProps {
  label: string; // Text displayed on the button
  onClick?: () => void; // Optional click handler
  disabled?: boolean; // Disables the button when true
  color?: "teal" | "red" | "gray"; // Predefined color options
  size?: "small" | "medium" | "large"; // Predefined size options
  className?: string; // Additional custom CSS classes
  style?: React.CSSProperties; // Inline styles
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  color = "teal", // Default color is teal
  size = "medium", // Default size is medium
  className = "",
  style = {},
}) => {
  // Map for predefined color classes
  const colorClasses = {
    teal: "bg-teal-500 hover:bg-teal-600 focus:ring-teal-400",
    red: "bg-red-500 hover:bg-red-600 focus:ring-red-400",
    gray: "bg-gray-500 hover:bg-gray-600 focus:ring-gray-400",
  };

  // Map for predefined size classes
  const sizeClasses = {
    small: "py-1 px-3 text-sm",
    medium: "py-2 px-4 text-base",
    large: "py-3 px-6 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`text-white font-semibold rounded-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-75 ${
        colorClasses[color]
      } ${sizeClasses[size]} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      style={style}
    >
      {label}
    </button>
  );
};

export default Button;
