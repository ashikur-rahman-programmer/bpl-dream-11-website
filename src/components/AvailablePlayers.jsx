import React from "react";

const AvailablePlayers = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center flex-wrap my-4">
        <h2 className="text-2xl font-semibold">Available Players</h2>
        <div className="flex justify-center items-center gap-2">
          <button className="btn text-xl bg-[#e9fe29ea] rounded-xl text-black ">
            Available
          </button>
          <button className="btn text-xl bg-[#e9fe29ea] rounded-xl text-black ">
            Selected
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayers;
