// components/ServiceCard.jsx
import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ icon: Icon, label }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1">
    <Icon size={40} className="text-gray-900 mx-auto mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-gray-900">{label}</h3>
    <p className="text-gray-600 mb-4">
      Tailored guidance to enhance your application and maximize your chances of
      success.
    </p>
    <Link
      to="/services"
      className="text-gray-900 font-semibold hover:text-gray-700 transition-colors inline-flex items-center"
    >
      Learn More
      <ChevronRight size={16} className="ml-1" />
    </Link>
  </div>
);

export default ServiceCard;
