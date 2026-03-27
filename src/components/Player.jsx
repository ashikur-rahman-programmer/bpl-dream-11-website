import React, { useState } from "react";
import { CircleUserRound, Flag, Star } from "lucide-react";

const Player = ({ player, coin, setCoin }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectedPlayers = () => {
    let newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin(coin - player.price);
    } else {
      alert("Not enough price available");
      return;
    }
    alert(`${player.name} is selected!`);
    setIsSelected(!isSelected);
  };
  return (
    <div className="container mx-auto mt-4">
      <div className="max-w-sm rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 shadow-2xl">
        {/* Image */}
        <img
          src={player.image}
          alt="player"
          className="w-full h-56 object-cover object-top"
        />

        <div className="p-4 space-y-3">
          {/* Icon + Name */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-lg font-semibold">
              <CircleUserRound />
              <span>{player.name}</span>
            </div>
          </div>

          {/* Country + role */}
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1">
              <Flag /> {player.country}
            </span>
            <span className="btn">{player.role}</span>
          </div>

          {/* Rating */}
          {/* <div className="flex items-center justify-between"> */}
          <span className="flex justify-between items-center gap-2 font-semibold">
            <span>Rating</span>
            <span className="flex justify-center items-center gap-2 font-semibold">
              <span>
                <Star />
              </span>
              {player.rating}
            </span>
          </span>
          {/* </div> */}

          {/* batting position */}
          <div className="flex justify-between items-center">
            <span>{player.batting}</span>
            <span>{player.bowling}</span>
          </div>

          {/* Price + Button */}
          <div className="flex justify-between items-center mt-4">
            <span className="text-xl font-bold text-green-600">
              Price : ${player.price}
            </span>
            <button
              onClick={handleSelectedPlayers}
              disabled={isSelected}
              className="btn"
            >
              {isSelected ? "Selected" : "Choose Player"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
