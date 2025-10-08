import React from "react";
import { Link } from "react-router";

export default function Errorpage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans text-gray-800">
      {/* Main content card: White, soft shadows */}
      <div className="relative z-10 max-w-2xl w-full text-center bg-white p-10 md:p-16 rounded-3xl shadow-2xl transition duration-500 hover:shadow-3xl hover:shadow-indigo-200">
        {/* Large 404 Text: Vibrant, modern gradient on white */}
        <h1 className="text-9xl md:text-[10rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 mb-6 relative animate-bounce-slow">
          404
        </h1>

        {/* Title/Heading: Clear and direct */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
          Oops! Page Not Found 🧭
        </h2>

        {/* Descriptive Text: Helpful tone */}
        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
          It looks like the digital address you requested doesn't exist. Let's
          get you back to familiar territory!
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Primary Button: Solid, inviting color */}
          <Link
            href="/"
            className="px-8 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-full shadow-lg shadow-indigo-300/50 hover:bg-indigo-700 transition duration-300 transform hover:-translate-y-0.5"
          >
            Go to Homepage
          </Link>

          {/* Secondary Button: Subtle outline/ghost style */}
          <Link
            href="/support"
            className="px-8 py-3 text-lg font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-full hover:bg-indigo-100 transition duration-300"
          >
            Report an Issue
          </Link>
        </div>

        <p className="mt-12 text-sm text-gray-400 uppercase tracking-wider">
          Error Code: 404_PAGE_MISSING
        </p>
      </div>
    </div>
  );
}
