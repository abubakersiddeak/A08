import React from "react";

export default function TrustSection() {
  return (
    <div className="w-full h-[200px] md:h-[250px] bg-gradient-to-l from-[#9F62F2] to-[#632EE3] flex flex-col justify-center items-center gap-10 p-4">
      <div className="text-gray-200 inter text-lg md:text-2xl">
        Trusted by Millions, Built for You
      </div>
      <div className="flex justify-center gap-4 md:gap-8 xl:gap-20 text-white  ">
        <div className="flex flex-col justify-center items-center">
          <div className="text-gray-200 text-[8px] md:text-xs">
            Total Downloads
          </div>
          <div className="text-2xl md:text-4xl inter">29.6M</div>
          <div className="text-gray-200 text-[8px] md:text-xs">
            21% more than last month
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-gray-200 text-[8px] md:text-xs">
            Total Reviews
          </div>
          <div className="text-2xl md:text-4xl inter">906K</div>
          <div className="text-gray-200 text-[8px] md:text-xs">
            46% more than last month
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-gray-200 text-[8px] md:text-xs">Active Apps</div>
          <div className="text-2xl md:text-4xl inter">132+</div>
          <div className="text-gray-200 text-[8px] md:text-xs">
            31 more will Launch
          </div>
        </div>
      </div>
    </div>
  );
}
