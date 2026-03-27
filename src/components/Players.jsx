import React, { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

const Players = ({ PlayersPromise, coin, setCoin }) => {
  const players = use(PlayersPromise);

  const [selectedType, setSelectedType] = useState("Available");

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-between items-center flex-wrap my-4">
          {selectedType === "Available" ? (
            <h2 className="text-2xl font-semibold">Available Players</h2>
          ) : (
            <h2 className="text-2xl font-semibold">Selected Player (0)</h2>
          )}

          <div className="flex justify-center items-center ">
            <button
              onClick={() => setSelectedType("Available")}
              className={`btn text-xl ${selectedType === "Available" ? "bg-[#e9fe29ea] text-black" : ""}  rounded-xl rounded-r-none  `}
            >
              Available
            </button>
            <button
              onClick={() => setSelectedType("Selected")}
              className={`btn text-xl ${selectedType === "Selected" ? "bg-[#e9fe29ea] text-black" : ""} rounded-xl rounded-l-none  `}
            >
              Selected
            </button>
          </div>
        </div>
      </div>

      {selectedType === "Available" ? (
        <AvailablePlayers players={players} coin={coin} setCoin={setCoin} />
      ) : (
        <SelectedPlayers />
      )}
    </div>
  );
};

export default Players;
