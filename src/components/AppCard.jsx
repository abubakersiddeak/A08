import { Download, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

export default function AppCard({ data }) {
  console.log(data);
  return (
    <Link to={`/appDetils/${data.id}`} className="w-full">
      <div className="card bg-base-100 shadow-sm relative p-2 flex flex-col h-full">
        <figure className="rounded-lg h-56 sm:h-64 md:h-72 lg:h-80 w-full">
          <img
            className="w-full h-full object-contain"
            src={data.image}
            alt={data.title}
          />
        </figure>

        <div className="py-4 flex flex-col gap-3 flex-1">
          <h2 className="card-title text-sm sm:text-base md:text-lg">
            {data.title}
          </h2>

          <div className="card-actions justify-between mt-auto flex flex-wrap gap-2">
            <div className="badge bg-[#F1F5E8] text-green-500 py-2 px-3 flex items-center gap-2 text-sm sm:text-base">
              <Download /> <span className="inter">{data.downloads}</span>
            </div>

            <div className="badge bg-[#FFF0E1] text-orange-500 py-2 px-3 flex items-center gap-2 text-sm sm:text-base">
              <Star fill="orange" />{" "}
              <span className="inter">{data.ratingAvg}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
