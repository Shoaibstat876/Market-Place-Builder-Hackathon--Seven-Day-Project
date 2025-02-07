"use client";
import React, { useState, useEffect } from "react";

const initialFaqs = [
  {
    question: "What types of products do you offer?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "How can we get in touch with you?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Do your products come with a warranty?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "What is your return policy?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const FaqPage = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedAnswer, setEditedAnswer] = useState<string>("");
  const [faqs, setFaqs] = useState(initialFaqs);

  useEffect(() => {
    setFaqs(initialFaqs);
  }, []);

  const toggleAnswer = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleEdit = (index: number, answer: string) => {
    setEditingIndex(index);
    setEditedAnswer(answer);
  };

  const handleSave = (index: number) => {
    setFaqs((prev) =>
      prev.map((faq, i) => (i === index ? { ...faq, answer: editedAnswer } : faq))
    );
    setEditingIndex(null);
  };

  const handleCancel = () => {
    setEditingIndex(null);
  };

  return (
    <section className="py-16">
      {/* Title Section */}
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-lg">
          Find answers to the most common questions we receive.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="py-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Question Section */}
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleAnswer(index)}
              role="button"
              tabIndex={0}
              aria-expanded={openIndices.includes(index)}
            >
              <h3 className="font-semibold text-gray-800 text-xl">{faq.question}</h3>
              <span
                className={`text-gray-600 text-2xl font-bold transform transition-transform duration-300 ${
                  openIndices.includes(index) ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </div>

            {/* Answer Section */}
            {openIndices.includes(index) && (
              <div className="mt-4">
                {editingIndex === index ? (
                  <div>
                    <textarea
                      value={editedAnswer}
                      onChange={(e) => setEditedAnswer(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                      rows={4}
                    />
                    <div className="mt-2 flex justify-between">
                      <button
                        onClick={() => handleSave(index)}
                        className="text-teal-500 text-sm font-semibold hover:underline"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="text-gray-500 text-sm font-semibold hover:underline"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600 text-base">{faq.answer}</p>
                )}
              </div>
            )}

            {/* Edit Button */}
            {editingIndex !== index && (
              <button
                onClick={() => handleEdit(index, faq.answer)}
                className="text-gray-600 mt-2 text-sm font-semibold hover:underline"
              >
                Edit
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqPage;
