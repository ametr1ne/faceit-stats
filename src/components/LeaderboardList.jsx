import React from "react";
import { LeaderboardCard } from "./LeaderboardCard";

export const LeaderboardList = ({ players, cookieObject, setCookieObject }) => {
  return (
    <div className='flex flex-col space-y-5 mt-20 w-full'>
      <h2 className='text-white font-bold text-3xl mb-5 text-center'>List of leaders: TOP 20</h2>

      {players.map((player) => (
        <LeaderboardCard
          key={player.player_id}
          player={player}
          cookieObject={cookieObject}
          setCookieObject={setCookieObject}
        />
      ))}
    </div>
  );
};
