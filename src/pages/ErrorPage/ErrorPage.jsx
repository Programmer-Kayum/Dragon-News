import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
        <p className="text-xl text-gray-700 mt-4">
          Something went wrong. Please try again later.
        </p>
        <div className="mt-6">
          <Link to="/">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
