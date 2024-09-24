// src/components/ApproachStep.jsx

import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ApproachStep = ({ step, index }) => {
  const { icon: Icon, title, description, outcomes } = step;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
    >
      <div className="flex items-center mb-4">
        <Icon size={32} className="text-indigo-600 mr-2" aria-hidden="true" />
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-2">Key Outcomes:</h4>
        <ul className="list-disc list-inside text-gray-600">
          {outcomes.map((outcome, i) => (
            <li key={i}>{outcome}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

ApproachStep.propTypes = {
  step: PropTypes.shape({
    icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    outcomes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

// Use React.memo to prevent unnecessary re-renders if props don't change
export default React.memo(ApproachStep);
