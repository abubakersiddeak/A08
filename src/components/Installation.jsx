import React, { useState } from "react";
const mockApps = [
  {
    id: 1,
    name: "Forest: Focus For Productivity",
    downloads: "9M",
    rating: 5,
    size: "258 MB",
  },
  {
    id: 2,
    name: "Forest: Focus For Productivity",
    downloads: "9M",
    rating: 5,
    size: "258 MB",
  },
  {
    id: 3,
    name: "Forest: Focus For Productivity",
    downloads: "9M",
    rating: 5,
    size: "258 MB",
  },
  {
    id: 4,
    name: "Calendar: Time Management",
    downloads: "15M",
    rating: 4.8,
    size: "180 MB",
  },
];
export default function Installation() {
  const starColor = "text-yellow-500";
  const [app, setApp] = useState(mockApps);
  const [sort, setSort] = useState("size");
  return (
    <div className="min-h-screen  p-4 sm:p-8 flex justify-center bg-gray-100">
      <div className="w-full max-w-5xl  p-6 sm:p-10 ">
        {/* Header Section */}
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Your Installed Apps
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-500 font-light">
            Explore All Trending Apps on the Market developed by us
          </p>
        </header>

        {/* Controls Bar */}
        <div className="flex justify-between items-center mb-6 border-b pb-4 border-gray-100">
          <span className="text-base font-medium text-gray-700">
            {app.length} Apps Found
          </span>

          {/* Sort Dropdown */}
          <div className="relative inline-block text-left">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="
                                appearance-none bg-white border border-gray-300 text-gray-700 
                                py-2 pl-4 pr-10 rounded-lg shadow-sm focus:outline-none 
                                focus:ring-2 focus:ring-teal-500 focus:border-teal-500 
                                cursor-pointer text-sm font-medium
                            "
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%236B7280'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E")`,
                backgroundPosition: "right 0.5rem center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "1.5em 1.5em",
              }}
            >
              <option value="size">Sort By Size</option>
              <option value="name">Sort By Name</option>
              <option value="rating">Sort By Rating</option>
            </select>
          </div>
        </div>

        {/* Apps List */}
        <div className="space-y-1">
          <div className="flex items-center justify-between p-4 sm:p-5 border-b last:border-b-0 transition duration-150 ease-in-out bg-white hover:bg-gray-50 rounded-md">
            {/* Left section: App Icon, Name, and Stats */}
            <div className="flex items-center space-x-4">
              {/* App Icon Placeholder */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-lg flex-shrink-0">
                {/* Could place an actual icon/image here */}
              </div>

              {/* App Details */}
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-semibold text-gray-800">
                  {app.name}
                </span>
                <div className="flex items-center text-sm text-gray-500 mt-1 space-x-3">
                  {/* Downloads */}
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 text-teal-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 11.586V3a1 1 0 112 0v8.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="font-medium text-teal-600">
                      {app.downloads}
                    </span>
                  </span>

                  {/* Rating */}
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 mr-1 ${starColor}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.62-.921 1.92 0l2.455 7.554 7.927.001c.969 0 1.371 1.24.588 1.81l-6.427 4.673 2.455 7.554c.3.921-.755 1.688-1.542 1.116L10 17.58l-6.427 4.673c-.787.572-1.842-.195-1.542-1.116l2.455-7.554L.078 12.292c-.783-.57-.381-1.81.588-1.81l7.927-.001L9.049 2.927z" />
                    </svg>
                    <span className="text-gray-600 font-medium">
                      {app.rating}
                    </span>
                  </span>

                  {/* Size */}
                  <span className="text-gray-600 font-medium">{app.size}</span>
                </div>
              </div>
            </div>

            {/* Right section: Uninstall Button */}
            <button
              className="
                    bg-teal-500 text-white font-medium px-4 py-2 rounded-lg 
                    shadow-md hover:bg-teal-600 active:bg-teal-700 
                    transition duration-150 ease-in-out transform hover:scale-105 
                    whitespace-nowrap text-sm
                "
              onClick={() => console.log(`Uninstalling ${app.name}`)}
            >
              Uninstall
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
