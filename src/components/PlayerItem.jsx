import { PlayerService } from "@/services/Player.service";
import React, { useEffect, useState } from "react";

const PlayerItem = ({ nickname, id, info }) => {
  const [playerStats, setPlayerStats] = useState({});

  const [color, setColor] = useState("border-[#EEEEEE]");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      if (info["game_skill_level"] > 1 && info["game_skill_level"] <= 3) {
        setColor("border-[#1CE400]");
      } else if (info["game_skill_level"] > 3 && info["game_skill_level"] <= 7) {
        setColor("border-[#FFC800]");
      } else if (info["game_skill_level"] > 7 && info["game_skill_level"] <= 9) {
        setColor("border-[#FF6309]");
      } else if (info["game_skill_level"] === 10) {
        setColor("border-[#FE1F00]");
      }

      const res = await PlayerService.getStats(id);

      setPlayerStats(res.lifetime);

      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className='py-3 md:py-0 w-full md:h-[64px] border rounded-md border-gray-500 px-12 mx-auto animate-pulse flex gap-4 md:gap-0 flex-col md:flex-row items-center justify-between'>
        <div className='h-7 bg-gray-200 rounded-full dark:bg-gray-700 w-48'></div>
        <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[280px]'></div>
        <div className='h-[40px] bg-gray-200 rounded-md dark:bg-gray-700 w-[141px]'></div>
      </div>
    );
  }

  return (
    <div className='flex px-8 py-4 bg-slate-800 rounded-lg gap-4 text-white font-semibold items-center w-full'>
      <div
        className={
          "rounded-full w-8 h-8 flex justify-center items-center border-2 font-bold " + color
        }>
        {info["game_skill_level"]}
      </div>
      <h3 className='w-64'>{nickname}</h3>
      <div className='text-center w-12'>
        <p>{playerStats["Matches"]}</p>
      </div>
      <div className='text-center w-12'>
        <p className={playerStats["Average K/D Ratio"] > 1 ? "text-green-300" : "text-yellow-200"}>
          {playerStats["Average K/D Ratio"]}
        </p>
      </div>
      <div className='text-center w-16'>
        <p>{playerStats["Average Headshots %"]}</p>
      </div>
      <div className='text-center w-24'>
        <p>{playerStats["Current Win Streak"]}</p>
      </div>
    </div>
  );
};

export default PlayerItem;
