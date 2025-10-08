import React from "react";
import { Link } from "react-router-dom";

export default function ErrorAppPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100 p-6 text-center">
      <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-14 max-w-lg w-full transform transition-all duration-300 hover:scale-[1.02]">
        <div className="relative flex justify-center mb-6">
          <div className="w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 h-14"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75h4.5m-4.5 4.5h4.5M12 2.25a9.75 9.75 0 11-9.75 9.75A9.75 9.75 0 0112 2.25z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
          App Not Found
        </h1>

        <p className="text-gray-500 text-lg leading-relaxed mb-8">
          The application you’re looking for doesn’t exist or may have been
          removed. Please check the name or go back to explore other apps.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Go to Home
          </Link>
          <Link
            to="/apps"
            className="px-8 py-3 bg-indigo-50 text-indigo-600 rounded-lg text-lg font-semibold border border-indigo-200 hover:bg-indigo-100 transition duration-300"
          >
            Browse All Apps
          </Link>
        </div>

        <p className="mt-10 text-sm text-gray-400 uppercase tracking-wider">
          Error Code: APP_NOT_FOUND
        </p>
      </div>
    </div>
  );
}
