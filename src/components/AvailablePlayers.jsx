import React from "react";
import Player from "./Player";

const AvailablePlayers = ({ players, coin, setCoin }) => {
  return (
    <div className="container mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {players.map((player) => (
        <Player key={player.id} player={player} coin={coin} setCoin={setCoin} />
      ))}
    </div>
  );
};

export default AvailablePlayers;
