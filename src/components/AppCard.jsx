import { Download, Star } from "lucide-react";
import React from "react";

export default function AppCard() {
  return (
    <div className="">
      <div className="card bg-base-100 w-full shadow-sm relative p-2">
        <figure className="  rounded-lg">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="py-4 flex flex-col gap-3">
          <h2 className="card-title">Card Title</h2>

          <div className="card-actions justify-between">
            <div className="badge bg-[#F1F5E8] text-green-500 py-4">
              <Download /> <span className="inter">9M</span>
            </div>
            <div className="badge bg-[#FFF0E1] text-orange-500 py-4">
              <Star fill="orange" /> <span className="inter">5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
