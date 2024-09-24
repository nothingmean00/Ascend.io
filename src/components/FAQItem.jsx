// src/components/FAQItem.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <button
        className="w-full flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question}`}
      >
        <h3 className="text-xl font-semibold">{question}</h3>
        {isOpen ? (
          <ChevronUp size={24} aria-hidden="true" />
        ) : (
          <ChevronDown size={24} aria-hidden="true" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            id={`faq-answer-${question}`}
            className="mt-4 text-gray-600"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="region"
            aria-labelledby={`faq-answer-${question}`}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQItem;
