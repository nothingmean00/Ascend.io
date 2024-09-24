// src/components/ContactForm.jsx

import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ContactForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Remove error message upon input change
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Validate form data
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionError("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here, you'd typically send `formData` to your backend API
      console.log("Form Submitted:", formData);

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Form Submission Error:", error);
      setSubmissionError(
        "An error occurred while submitting the form. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Thank You!
          </h3>
          <p className="text-gray-700">
            Your message has been received. We'll get back to you shortly.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full px-4 py-2 border ${
                errors.name
                  ? "border-red-500"
                  : "border-gray-300 focus:border-gray-900"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
              value={formData.name}
              onChange={handleChange}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              required
            />
            {errors.name && (
              <p
                id="name-error"
                className="mt-1 text-red-500 text-sm"
                role="alert"
              >
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-4 py-2 border ${
                errors.email
                  ? "border-red-500"
                  : "border-gray-300 focus:border-gray-900"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
              value={formData.email}
              onChange={handleChange}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              required
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-1 text-red-500 text-sm"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block text-gray-700 font-semibold mb-2"
            >
              Subject<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className={`w-full px-4 py-2 border ${
                errors.subject
                  ? "border-red-500"
                  : "border-gray-300 focus:border-gray-900"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
              value={formData.subject}
              onChange={handleChange}
              aria-invalid={errors.subject ? "true" : "false"}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              required
            />
            {errors.subject && (
              <p
                id="subject-error"
                className="mt-1 text-red-500 text-sm"
                role="alert"
              >
                {errors.subject}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className={`w-full px-4 py-2 border ${
                errors.message
                  ? "border-red-500"
                  : "border-gray-300 focus:border-gray-900"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
              value={formData.message}
              onChange={handleChange}
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
              required
            ></textarea>
            {errors.message && (
              <p
                id="message-error"
                className="mt-1 text-red-500 text-sm"
                role="alert"
              >
                {errors.message}
              </p>
            )}
          </div>

          {/* Submission Error */}
          {submissionError && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-sm text-center"
              role="alert"
            >
              {submissionError}
            </motion.p>
          )}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className={`w-full bg-gray-900 text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center ${
                isSubmitting ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

ContactForm.propTypes = {
  // No props currently, but define if needed in the future
};

export default ContactForm;
