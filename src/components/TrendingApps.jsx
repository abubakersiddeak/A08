import React from "react";
import AppCard from "./AppCard";

export default function TrendingApps() {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="text-center">
        <h1 className="font-bold text-3xl">Trending Apps</h1>
        <p className="text-xs text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-15">
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
      </div>
      <button className="btn bg-gradient-to-tr to-[#632EE3] from-[#9F62F2] text-white mt-10">
        Show All
      </button>
    </div>
  );
}
