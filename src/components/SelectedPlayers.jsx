import React from "react";
import { Trash2 } from "lucide-react";

const SelectedPlayers = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between p-4 ">
        <div className="flex items-center gap-4">
          {/* Placeholder for Avatar */}
          <div className="w-12 h-12 rounded-lg">
            <img src="../assets/logo.png" alt="" />
          </div>

          {/* Player Details */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold leading-tight">Darrell Steward</h3>
            <span className="text-sm text-gray-400">Left-Hand-Bat</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          className="p-2 text-red-400 hover:bg-red-50 rounded-full transition-all"
          aria-label="Delete player"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;
