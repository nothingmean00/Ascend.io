// src/pages/AboutUsPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet";

import TeamMember from "../components/TeamMember";
import CoreValue from "../components/CoreValue";

// Importing icons from lucide-react for Core Values
import {
  UserCheck,
  Lightbulb,
  Users,
  RefreshCw,
  Globe,
  Zap,
} from "lucide-react";

// Sample data for team members
const teamMembers = [
  {
    name: "Zehua",
    role: "General Counselor",
    education:
      "Graduate of Columbia University, focused on Mathematics and Statistics.",
    experience: "Quantitative Researcher at SigTech.",
    achievements: "",
    image: "https://picsum.photos/seed/zehua/200/200", // Replace with actual image URLs
  },
  {
    name: "Malik",
    role: "General Counselor",
    education: "Graduate of NYU Stern School of Business, focused on Finance.",
    experience: "Investment Solutions Analyst at SigTech.",
    achievements: "",
    image: "https://picsum.photos/seed/malik/200/200",
  },
  {
    name: "Sabiq",
    role: "Essay Specialist",
    education:
      "Electrical Engineering student at the University of Pennsylvania.",
    experience: "",
    achievements:
      "Scored 99% percentile on the SAT and authored an award-winning college application essay.",
    image: "https://picsum.photos/seed/sabiq/200/200",
  },
  {
    name: "Anjali",
    role: "SAT/ACT Specialist",
    education: "Studied Economics at Harvard University.",
    experience: "Art Dealer at the Shin Gallery.",
    achievements: "",
    image: "https://picsum.photos/seed/anjali/200/200",
  },
  {
    name: "Marc",
    role: "Academic Specialist",
    education: "Graduate of NYU Stern, focused on Management.",
    experience: "Currently working at LVMH.",
    achievements: "",
    image: "https://picsum.photos/seed/marc/200/200",
  },
  {
    name: "Abiel",
    role: "Strategy Specialist",
    education: "Graduate of Cornell University.",
    experience:
      "Former Investment Banker at Wells Fargo and currently an Investment Associate at MIT Endowment.",
    achievements: "",
    image: "https://picsum.photos/seed/abiel/200/200",
  },
  {
    name: "Steven",
    role: "Interview Specialist",
    education: "",
    experience: "",
    achievements: "",
    image: "https://picsum.photos/seed/steven/200/200",
  },
];

// Sample data for core values
const coreValues = [
  {
    title: "Excellence",
    description:
      "We strive for the highest standards in all aspects of our service, constantly pushing ourselves and our students to achieve their best.",
    icon: "Lightbulb",
  },
  {
    title: "Integrity",
    description:
      "We uphold ethical practices in college counseling, ensuring transparency and honesty in all our interactions with students, parents, and educational institutions.",
    icon: "UserCheck",
  },
  {
    title: "Cultural Bridge",
    description:
      "We leverage our unique understanding of both Chinese and American cultures to provide nuanced, culturally sensitive guidance.",
    icon: "Globe",
  },
  {
    title: "Personalization",
    description:
      "We recognize each student's unique strengths, aspirations, and challenges, tailoring our approach to meet individual needs.",
    icon: "Users",
  },
  {
    title: "Efficiency",
    description:
      "We optimize our processes and utilize innovative tools to deliver high-quality services in a timely and resource-effective manner, respecting the value of our clients' time and investment.",
    icon: "RefreshCw",
  },
  {
    title: "Innovation",
    description:
      "We continuously evolve our methods and utilize cutting-edge technology to provide the most effective counseling services.",
    icon: "Zap",
  },
  {
    title: "Empowerment",
    description:
      "We equip students with the knowledge, skills, and confidence to succeed not just in college applications, but in their future academic and professional endeavors.",
    icon: "Lightbulb",
  },
  {
    title: "Collaboration",
    description:
      "We foster strong partnerships with students, parents, and educational institutions to create a supportive network for student success.",
    icon: "Users",
  },
  {
    title: "Lifelong Learning",
    description:
      "We are committed to continuous improvement and staying updated with the latest trends in college admissions and educational practices.",
    icon: "RefreshCw",
  },
];

const AboutUsPage = () => {
  // State to manage expanded Core Values
  const [expandedValues, setExpandedValues] = useState(
    Array(coreValues.length).fill(false)
  );

  // Function to toggle expansion of a core value
  const toggleExpand = (index) => {
    setExpandedValues((prevState) =>
      prevState.map((item, idx) => (idx === index ? !item : item))
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Us - Ascend Consulting</title>
        <meta
          name="description"
          content="Learn more about Ascend Consulting's mission, values, and team dedicated to empowering students to achieve their academic dreams."
        />
      </Helmet>

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="relative pt-32 pb-12 flex items-center justify-center overflow-hidden text-center"
          style={{
            background: "linear-gradient(135deg, #1F2937 0%, #374151 100%)", // from-gray-900 to-gray-800
          }}
          aria-labelledby="aboutus-hero-heading"
        >
          <div className="container mx-auto px-6 relative z-10">
            <motion.h1
              id="aboutus-hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold mb-4 text-white"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Ascend empowers elite students to realize their full potential and
              achieve their dreams of attending top US universities. We bridge
              cultural and educational gaps, providing personalized guidance and
              comprehensive support throughout the college application process.
            </motion.p>
          </div>
        </section>

        {/* Our Team Section */}
        <section
          className="py-20 bg-gray-50"
          aria-labelledby="ourteam-section-heading"
        >
          <div className="container mx-auto px-6">
            <h2
              id="ourteam-section-heading"
              className="text-3xl font-bold mb-12 text-center text-gray-900"
            >
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Our Core Values Section */}
        <section
          className="py-20 bg-gray-100"
          aria-labelledby="corevalues-section-heading"
        >
          <div className="container mx-auto px-6">
            <h2
              id="corevalues-section-heading"
              className="text-3xl font-bold mb-12 text-center text-gray-900"
            >
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <CoreValue
                  key={index}
                  value={value}
                  index={index}
                  isExpanded={expandedValues[index]}
                  toggleExpand={() => toggleExpand(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section
          className="py-20 bg-gray-100"
          aria-labelledby="aboutus-cta-heading"
        >
          <div className="container mx-auto px-6 text-center">
            <motion.h2
              id="aboutus-cta-heading"
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
              className="text-xl mb-12 max-w-2xl mx-auto text-gray-700"
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

export default AboutUsPage;
