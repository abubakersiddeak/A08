import React, { useEffect, useState } from "react";
import AppCard from "./AppCard";

export default function AllApps() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json");
        const resData = await res.json();
        console.log("Fetched data:", resData);
        setData(resData);
        setFilteredData(resData);
        setLoading(false);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setSearchLoading(true);

    setTimeout(() => {
      if (value === "") {
        setFilteredData(data);
      } else {
        const result = data.filter((app) =>
          app.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredData(result);
      }
      setSearchLoading(false);
    }, 500);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-10">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold">Our All Applications</h1>
        <p className="text-xs text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="font-bold">({filteredData.length}) Apps Found</span>
          <label className="input flex items-center gap-2 border rounded-md px-2 py-1">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              placeholder="Search Apps"
              value={searchTerm}
              onChange={handleSearchChange}
              className="outline-none"
            />
          </label>
        </div>

        {searchLoading ? (
          <div className="flex justify-center items-center mt-10">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-purple-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-4 gap-4">
            {filteredData.length > 0 ? (
              filteredData.map((d) => <AppCard key={d.id} data={d} />)
            ) : (
              <p className="text-center text-3xl font-extrabold">
                No apps found
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
