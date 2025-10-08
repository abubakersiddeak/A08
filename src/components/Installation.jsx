import { Download, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Installation() {
  const [loading, setLoading] = useState(true);
  const [installedApps, setInstalledApps] = useState([]);
  const [allApps, setAllApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("high");

  useEffect(() => {
    const localStorageJson = localStorage.getItem("installedApp");
    const installedIds = localStorageJson ? JSON.parse(localStorageJson) : [];
    setInstalledApps(installedIds);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json");
        const resData = await res.json();
        setLoading(false);
        setAllApps(resData);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };
    fetchData();
  }, []);

  // Filter installed apps & sort by downloads
  const filteredApps = allApps
    .filter((app) => installedApps.includes(app.id))
    .sort((a, b) => {
      const convertDownloads = (d) => {
        if (d.toUpperCase().includes("M")) return parseFloat(d) * 1_000_000;
        if (d.toUpperCase().includes("K")) return parseFloat(d) * 1_000;
        return parseInt(d);
      };
      return sortOrder === "high"
        ? convertDownloads(b.downloads) - convertDownloads(a.downloads)
        : convertDownloads(a.downloads) - convertDownloads(b.downloads);
    });

  const handleUninstall = (app) => {
    const updated = installedApps.filter((id) => id !== app.id);
    localStorage.setItem("installedApp", JSON.stringify(updated));
    setInstalledApps(updated);
    toast(`${app.title} Uninstalled`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 sm:p-8 flex justify-center bg-gray-100">
      <div className="w-full max-w-5xl p-6 sm:p-10">
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Your Installed Apps
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-500 font-light">
            Explore all apps you have installed from our marketplace.
          </p>
        </header>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <p className="font-extrabold px-2 py-2">
            {filteredApps.length} Apps Installed
          </p>

          <div className="relative inline-block text-left mt-2 sm:mt-0">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 pl-4 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 cursor-pointer text-sm"
            >
              <option value="high">High - Low</option>
              <option value="low">Low - High</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {filteredApps.length === 0 && (
            <p className="text-center text-gray-500">No apps installed yet.</p>
          )}
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="flex flex-col md:flex-row items-center justify-between p-4 sm:p-5 bg-white hover:bg-gray-50 rounded-lg shadow-sm transition duration-150 ease-in-out"
            >
              <div className="flex items-center space-x-4 w-full md:w-auto">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex flex-col text-center md:text-left">
                  <span className="text-base sm:text-lg font-semibold text-gray-800">
                    {app.title}
                  </span>
                  <div className="flex flex-wrap items-center text-sm text-gray-500 mt-1 gap-4">
                    <span className="flex items-center gap-1 text-green-500 font-bold">
                      <Download className="h-4 w-4" />
                      {app.downloads}
                    </span>
                    <span className="flex items-center gap-1 text-orange-500 font-bold">
                      <Star className="h-4 w-4" />
                      {app.ratingAvg}
                    </span>
                    <span className="text-gray-600 font-medium">
                      {app.size} MB
                    </span>
                  </div>
                </div>
              </div>

              <button
                className="bg-green-500 cursor-pointer text-white font-medium px-4 py-2 rounded-lg shadow-md hover:bg-red-600 active:bg-red-700 transition duration-150 ease-in-out mt-4 md:mt-0 text-sm"
                onClick={() => handleUninstall(app)}
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
