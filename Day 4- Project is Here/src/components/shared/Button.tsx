// src/components/shared/Button.tsx
import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  color?: "teal" | "red" | "gray";  // Flexible color options
  size?: "small" | "medium" | "large";  // Flexible size options
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  color = "teal",  // Default to teal if not provided
  size = "medium",  // Default to medium size
  className = "",
  style = {},
}) => {
  const colorClasses = {
    teal: "bg-teal-500 hover:bg-teal-600 focus:ring-teal-400",
    red: "bg-red-500 hover:bg-red-600 focus:ring-red-400",
    gray: "bg-gray-500 hover:bg-gray-600 focus:ring-gray-400",
  };

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
      } ${sizeClasses[size]} ${className}`}
      style={style}
    >
      {label}
    </button>
  );
};

export default Button;
