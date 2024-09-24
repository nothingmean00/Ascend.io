// src/components/ErrorBoundary.jsx
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to display fallback UI on the next render
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI when an error is caught
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Something Went Wrong.</h1>
            <p className="text-lg text-gray-700 mb-6">
              We're sorry for the inconvenience. Please try refreshing the page
              or contact support if the problem persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    // Render children if no error is caught
    return this.props.children;
  }
}

export default ErrorBoundary;
