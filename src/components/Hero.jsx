import React, { useEffect, useState } from "react";
import bennerImg from "../assets/hero.png";
import googleplayIcon from "../assets/google-play_6124997.png";
import appstoreIcon from "../assets/app-store_5977575.png";
import TrustSection from "./TrustSection";
import TrendingApps from "./TrendingApps";
import { Link } from "react-router";

export default function Hero() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json");
        const resData = await res.json();
        setData(resData);
        setLoading(false);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
      </div>
    );
  }

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
          <Link
            to="https://play.google.com"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
          >
            <img
              className="h-5 w-5"
              src={googleplayIcon}
              alt="googleplayIcon"
            />{" "}
            Google Play
          </Link>
          <Link
            to="https://www.apple.com/app-store/"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"
          >
            <img className="h-5 w-5" src={appstoreIcon} alt="appstoreIcon" />{" "}
            App Store
          </Link>
        </div>

        <img src={bennerImg} alt="banner-img" className="w-75 md:w-155"></img>
      </div>
      <TrustSection />
      <TrendingApps data={data} />
    </>
  );
}
