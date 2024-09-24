// src/components/TeamMember.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, GraduationCap, Briefcase, Award } from "lucide-react";

const TeamMember = ({ member, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="p-6">
        {/* Placeholder for member image */}
        <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
        <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
          {member.name}
        </h3>
        <p className="text-gray-600 text-center mb-4">{member.role}</p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-gray-900 text-white px-4 py-2 rounded font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center"
        >
          {isExpanded ? "Show Less" : "Learn More"}
          <ChevronRight
            size={20}
            className={`ml-2 transition-transform ${
              isExpanded ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>
      {isExpanded && (
        <div className="px-6 pb-6">
          <div className="flex items-center mb-2">
            <GraduationCap
              size={20}
              className="text-gray-900 mr-2 flex-shrink-0"
            />
            <p className="text-gray-600">{member.education}</p>
          </div>
          <div className="flex items-center mb-2">
            <Briefcase size={20} className="text-gray-900 mr-2 flex-shrink-0" />
            <p className="text-gray-600">{member.experience}</p>
          </div>
          <div className="flex items-center">
            <Award size={20} className="text-gray-900 mr-2 flex-shrink-0" />
            <p className="text-gray-600">{member.achievements}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default TeamMember;
