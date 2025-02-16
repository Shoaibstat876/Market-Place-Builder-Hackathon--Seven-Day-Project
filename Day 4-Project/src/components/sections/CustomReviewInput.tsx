// src/components/CustomReviewInput.tsx
import React from "react";

interface CustomReviewInputProps {
  customReview: string;
  onReviewChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CustomReviewInput: React.FC<CustomReviewInputProps> = ({ customReview, onReviewChange }) => {
  return (
    <textarea
      className="w-full mt-4 p-2 border border-gray-300 rounded-md"
      value={customReview}
      onChange={onReviewChange}
      placeholder="Write your review..."
      rows={3}
    />
  );
};

export default CustomReviewInput;
