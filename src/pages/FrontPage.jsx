// src/pages/FrontPage.jsx

import React from "react";
import { ChevronRight, Award, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import StatCard from "../components/StatCard";
import ServiceCard from "../components/ServiceCard";
import Testimonial from "../components/Testimonial";

const FrontPage = () => {
  const stats = [
    { icon: Award, value: "98%", label: "Admission to Top 20 Universities" },
    { icon: TrendingUp, value: "3x", label: "Higher Acceptance Rate" },
    { icon: Users, value: "1000+", label: "Students Placed" },
  ];

  const services = [
    { icon: TrendingUp, label: "Application Strategy" },
    { icon: Award, label: "Essay Development" },
    { icon: Users, label: "Interview Preparation" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-tr from-[#667eea] to-[#764ba2]"
          aria-labelledby="hero-heading"
        >
          {/* Overlay for better text readability */}
          <div
            className="absolute inset-0 bg-black opacity-30"
            aria-hidden="true"
          ></div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
            >
              Elevate Your{" "}
              <span className="text-gray-300">Academic Future</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300"
            >
              Strategic guidance for admission to elite universities. Our expert
              team provides personalized counseling to maximize your success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center group"
                aria-label="Begin Your Journey"
              >
                Begin Your Journey
                <ChevronRight
                  size={20}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/services"
                className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center justify-center"
                aria-label="Explore Our Services"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <StatCard
                    icon={stat.icon}
                    value={stat.value}
                    label={stat.label}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
              Our Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  label={service.label}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12">What Our Students Say</h2>
            <div className="max-w-4xl mx-auto">
              <Testimonial
                quote="Ascend's guidance was invaluable in my journey to Harvard. Their personalized approach and expert insights made all the difference."
                name="Sarah L."
                university="Harvard University '24"
                image="https://picsum.photos/80" // Using Picsum for placeholder images
              />
              {/* Add more testimonials as needed */}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold mb-8 text-gray-900"
            >
              Ready to Elevate Your Academic Future?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-12 max-w-2xl mx-auto text-gray-600"
            >
              Contact us today to schedule your personalized consultation and
              take the first step towards your dream university.
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
                aria-label="Contact Us"
              >
                Contact Us
                <ChevronRight
                  size={20}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FrontPage;
