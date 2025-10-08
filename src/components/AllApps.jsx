import React, { useEffect, useState } from "react";
import AppCard from "./AppCard";

export default function AllApps() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json");
        const resData = await res.json();
        setData(resData);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchData();
  }, []);
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
          <span className="font-bold">({data.length}) Apps Found</span>
          <label className="input">
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
            <input type="search" required placeholder="Search Apps" />
          </label>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-4 gap-4">
          {data.map((d) => (
            <AppCard key={d.id} data={d} />
          ))}
        </div>
      </div>
    </div>
  );
}
