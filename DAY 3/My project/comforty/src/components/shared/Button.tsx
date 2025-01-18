// src/components/shared/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  className = '',
  style = {},
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-teal-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:bg-teal-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-75 ${className}`}
      style={style}
    >
      {label}
    </button>
  );
};

export default Button;
