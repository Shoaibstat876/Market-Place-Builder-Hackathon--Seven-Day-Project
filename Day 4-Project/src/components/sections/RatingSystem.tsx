// src/components/RatingSystem.tsx
import React from "react";

interface RatingSystemProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

const RatingSystem: React.FC<RatingSystemProps> = ({ rating, onRatingChange }) => {
  return (
    <div className="flex mt-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill={rating > index ? (rating >= 4 ? "#FFD700" : "#029fae") : "#D3D3D3"} // Teal for filled, Gold for 4-5 stars, Grey for empty
          className="bi bi-star-fill cursor-pointer transition-all duration-200 transform hover:scale-110"
          viewBox="0 0 16 16"
          onClick={() => onRatingChange(index + 1)} // Rating is 1-5
        >
          <path d="M3.612 15.443c-.397.208-.861-.107-.838-.567l.756-4.746L.173 6.708c-.322-.314-.155-.858.295-.924l4.749-.69L7.706.11c.188-.38.675-.38.863 0l2.029 4.98 4.749.69c.45.065.617.61.295.924l-3.357 3.422.756 4.746c.023.46-.441.775-.838.567l-4.248-2.234-4.248 2.234z" />
        </svg>
      ))}
    </div>
  );
};

export default RatingSystem;
