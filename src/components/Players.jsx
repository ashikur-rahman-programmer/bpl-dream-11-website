import React from "react";

const Players = () => {
  return (
    <div className="container mx-auto mt-4">
      <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
        {/* Image */}
        <img
          src="https://via.placeholder.com/400x250"
          alt="player"
          className="w-full h-56 object-cover"
        />

        <div className="p-4 space-y-3">
          {/* Icon + Name */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span>Shakib Al Hasan</span>
            </div>
            <span className="text-gray-500 text-sm">All-rounder</span>
          </div>

          {/* Country + Batting */}
          <div className="flex justify-between text-gray-600 text-sm">
            <span>Bangladesh</span>
            <span>Right-hand Bat</span>
          </div>

          {/* Rating */}
          <div className="flex justify-between items-center text-yellow-500">
            <div className="flex items-center gap-1">
              {/* <FaStar /> */}
              <span className="text-gray-800 font-medium">4.8</span>
            </div>
            <span className="text-gray-500 text-sm">Rating</span>
          </div>

          {/* Price + Button */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-green-600">$120</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Players;
