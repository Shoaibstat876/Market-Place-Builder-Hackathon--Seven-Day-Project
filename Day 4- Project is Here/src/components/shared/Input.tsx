// src/components/shared/Input.tsx
import React, { ChangeEvent } from "react";

interface InputProps {
  type: "text" | "number" | "email" | string;  // Hybrid type, more flexible
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  onChange,
  placeholder = "",
  disabled = false,
  className = "",
  style = {},
  errorMessage = "",
}) => {
  return (
    <div className="flex flex-col w-full">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`border-2 border-gray-300 text-gray-700 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 transition duration-300 ease-in-out ${className}`}
        style={style}
      />
      {errorMessage && <span className="text-red-500 text-sm mt-1">{errorMessage}</span>}
    </div>
  );
};

export default Input;
