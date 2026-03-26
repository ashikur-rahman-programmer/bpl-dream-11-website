import React from "react";
import bgImage from "../assets/bg-shadow.png";
import heroImage from "../assets/banner-main.png";

const Hero = () => {
  return (
    <div className="container mx-auto">
      {/*  */}
      <div
        className="hero "
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "16px",
        }}
      >
        <div className="hero-overlay rounded-2xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="p-16">
            <div className="flex justify-center mb-2">
              <img src={heroImage} alt="hero" />
            </div>
            <h1 className="mb-5 text-5xl font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="mb-5 text-2xl text-gray-500 font-semibold">
              Beyond Boundaries Beyond Limits{" "}
            </p>
            <div className="p-1 border border-[#E7FE29] rounded-xl inline-block">
              <button className="btn bg-[#E7FE29] text-black rounded-xl">
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
