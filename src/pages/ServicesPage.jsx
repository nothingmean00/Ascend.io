// src/pages/ServicesPage.jsx

import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Briefcase, GraduationCap } from "lucide-react";

// Import the ServiceCard component
import ServiceCard from "../components/ServiceCard";

/**
 * ServicesPage Component
 *
 * Displays a list of services offered by Ascend Consulting.
 *
 * @returns {JSX.Element} Rendered ServicesPage component
 */
const ServicesPage = () => {
  // Sample data for services
  const services = [
    {
      icon: Briefcase,
      title: "Application Strategy",
      description:
        "Develop a tailored application plan that highlights your strengths and aligns with your target schools.",
      benefits: [
        "Personalized application roadmap",
        "School selection guidance",
        "Timeline and milestone planning",
      ],
    },
    {
      icon: GraduationCap,
      title: "Essay Development",
      description:
        "Craft compelling essays that tell your unique story and resonate with admissions committees.",
      benefits: [
        "Professional essay editing",
        "Storytelling workshops",
        "Personal statement refinement",
      ],
    },
    {
      icon: Briefcase,
      title: "Interview Preparation",
      description:
        "Prepare for college interviews with mock sessions and personalized feedback to ensure you present your best self.",
      benefits: [
        "Mock interview sessions",
        "Personalized feedback",
        "Confidence-building techniques",
      ],
    },
    {
      icon: GraduationCap,
      title: "Extracurricular Optimization",
      description:
        "Optimize your extracurricular activities to demonstrate leadership, commitment, and impact.",
      benefits: [
        "Activity selection guidance",
        "Leadership skill development",
        "Impact measurement strategies",
      ],
    },
    {
      icon: Briefcase,
      title: "Test Preparation",
      description:
        "Achieve your target scores with comprehensive test preparation strategies for SAT, ACT, and more.",
      benefits: [
        "Customized study plans",
        "Practice exams and reviews",
        "Time management techniques",
      ],
    },
    {
      icon: GraduationCap,
      title: "Career Guidance",
      description:
        "Align your academic pursuits with your career aspirations through strategic planning and mentorship.",
      benefits: [
        "Career exploration sessions",
        "Mentorship from industry professionals",
        "Long-term goal setting",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Services - Ascend Consulting</title>
        <meta
          name="description"
          content="Discover Ascend Consulting's comprehensive services designed to support your academic journey and help you achieve your college admission goals."
        />
      </Helmet>

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative pt-32 pb-12 flex items-center justify-center overflow-hidden text-center"
          style={{
            background: "linear-gradient(135deg, #1F2937 0%, #374151 100%)",
          }}
          aria-labelledby="services-hero-heading"
        >
          <div className="container mx-auto px-6 relative z-10">
            <motion.h1
              id="services-hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-4 text-white"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Comprehensive support tailored to your unique academic journey and
              aspirations.
            </motion.p>
          </div>
        </section>

        {/* Services Section */}
        <section
          className="py-20 bg-white"
          aria-labelledby="services-section-heading"
        >
          <div className="container mx-auto px-6">
            <h2
              id="services-section-heading"
              className="text-3xl font-bold mb-12 text-center text-gray-900"
            >
              What We Offer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  benefits={service.benefits}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          className="py-20 bg-gray-100"
          aria-labelledby="services-cta-heading"
        >
          <div className="container mx-auto px-6 text-center">
            <motion.h3
              id="services-cta-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold mb-8 text-gray-900"
            >
              Ready to Elevate Your Academic Journey?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-12 max-w-2xl mx-auto text-gray-700"
            >
              Contact us today to schedule a consultation and discover how our
              expertise can help you achieve your academic goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                to="/contact"
                className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all hover:shadow-lg inline-flex items-center group"
                aria-label="Get Started with Ascend Consulting"
              >
                Get Started
                <ChevronRight
                  size={20}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;
