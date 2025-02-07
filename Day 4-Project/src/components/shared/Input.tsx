// File: src/components/shared/Input.tsx

import React, { ChangeEvent } from "react";

interface InputProps {
  type: "text" | "number" | "email" | string; // Flexible input types
  value: string | number; // The value for the input field
  onChange: (e: ChangeEvent<HTMLInputElement>) => void; // Handler for value changes
  placeholder?: string; // Placeholder text
  disabled?: boolean; // Disable the input field
  className?: string; // Additional custom CSS classes
  style?: React.CSSProperties; // Inline styles
  min?: string; // Minimum value (e.g., for number inputs)
  step?: string; // Step value (e.g., for number inputs)
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder = "",
  disabled = false,
  className = "",
  style = {},
  min,
  step,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      min={min}
      step={step}
      className={`border border-gray-300 text-gray-700 p-2 rounded-md focus:ring-2 focus:ring-teal-500 focus:ring-opacity-75 focus:outline-none transition-all duration-300 ease-in-out ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      style={style}
    />
  );
};

export default Input;
