import React from "react";
import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center px-4 text-gray-800">
      <div className="relative max-w-2xl w-full text-center bg-white/80 backdrop-blur-lg p-8 sm:p-12 md:p-16 rounded-3xl shadow-2xl border border-indigo-100">
        <div className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-tr from-indigo-300 via-purple-200 to-pink-100 opacity-60 rounded-3xl"></div>

        <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 animate-pulse mb-4 drop-shadow-lg">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Oops! Page Not Found
        </h2>

        <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-md mx-auto">
          It seems the page you're looking for has wandered off into cyberspace.
          Let’s guide you back to somewhere safe!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link
            to="/"
            className="px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full shadow-md hover:shadow-lg hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            ⬅ Go Home
          </Link>

          <Link
            to="/support"
            className="px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-lg font-semibold text-indigo-600 border border-indigo-200 bg-indigo-50 rounded-full hover:bg-indigo-100 hover:text-indigo-700 transition-all duration-300"
          >
            🛠 Report Issue
          </Link>
        </div>

        <p className="mt-10 text-xs sm:text-sm text-gray-400 uppercase tracking-widest">
          Error Code: 404_PAGE_NOT_FOUND
        </p>
      </div>
    </div>
  );
}
