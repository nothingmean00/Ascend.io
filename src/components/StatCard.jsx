// src/components/ServiceCard.jsx
import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ icon: Icon, label, description, benefits }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Icon */}
      <div className="flex items-center justify-center mb-4">
        <Icon size={32} className="text-gray-900" />
      </div>

      {/* Label */}
      <h3 className="text-xl font-semibold mb-2 text-center">{label}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-4 text-center">{description}</p>

      {/* Benefits */}
      {benefits && benefits.length > 0 && (
        <ul className="list-disc list-inside text-gray-600">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default ServiceCard;
