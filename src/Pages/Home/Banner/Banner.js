import React from "react";
import banner from "../../../assets/images/banner.jpg";
import './Banner.css';

const Banner = () => {
  return (
    <div className=" relative w-full">
      <div className="banner-image">
        <img src={banner} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute transform -translate-y-1/2 left-20 text-center right-20 top-1/3">
        <h1 className="text-5xl font-bold text-white banner-title">
          The most precious moments of your life deserve to be captured.
        </h1>
        <p className="text-2xl text-white banner-text mt-6">perfect moments captured forever...</p>
      </div>
      
    </div>
  );
};

export default Banner;
