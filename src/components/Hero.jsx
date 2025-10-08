import React from "react";
import bennerImg from "../assets/hero.png";
import googleplayIcon from "../assets/google-play_6124997.png";
import appstoreIcon from "../assets/app-store_5977575.png";
import TrustSection from "./TrustSection";
import TrendingApps from "./TrendingApps";

export default function Hero() {
  return (
    <>
      <div className="mt-10 mx-auto flex flex-col gap-4 justify-center items-center">
        <div className="text-3xl text-center font-bold inter">
          We Build <br />
          <span className="text-purple-400">Productive</span> Apps
        </div>
        <div className=" text-center md:w-[700px] text-gray-500">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </div>
        <div className="flex justify-center items-center gap-4">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
            <img
              className="h-5 w-5"
              src={googleplayIcon}
              alt="googleplayIcon"
            />{" "}
            Google Play
          </button>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
            <img className="h-5 w-5" src={appstoreIcon} alt="appstoreIcon" />{" "}
            App Store
          </button>
        </div>

        <img src={bennerImg} alt="banner-img" className="w-75 md:w-155"></img>
      </div>
      <TrustSection />
      <TrendingApps />
    </>
  );
}
