// src/components/CoreValue.jsx
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const CoreValue = ({ value, index, isExpanded, toggleExpand }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <div
      className="p-6 cursor-pointer flex items-center justify-between"
      onClick={toggleExpand}
    >
      <div className="flex items-center">
        <value.icon size={24} className="text-gray-900 mr-4" />
        <h4 className="text-xl font-semibold">{value.title}</h4>
      </div>
      <ChevronDown
        size={20}
        className={`text-gray-600 transform transition-transform ${
          isExpanded ? "rotate-180" : ""
        }`}
      />
    </div>
    {isExpanded && (
      <div className="px-6 pb-6">
        <p className="text-gray-700">{value.description}</p>
      </div>
    )}
  </motion.div>
);

export default CoreValue;
