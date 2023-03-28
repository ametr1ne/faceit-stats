import { PlayerService } from "@/services/Player.service";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const PlayerItem = ({ nickname, player_id, player_stats }) => {
  // const [playerStats, setPlayerStats] = useState({});

  const [loading, setLoading] = useState(false);
  const [playerInfo, setPlayerInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const data = await PlayerService.getOneById(player_id);

      setPlayerInfo(data);

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
      {playerInfo && (
        <>
          <div>
            <Image
              src={`/faceit${playerInfo.games.csgo.skill_level}.svg`}
              width={35}
              height={35}
              alt={"faceit_lvl"}
            />
          </div>
          <div className='w-12 text-center'>
            <p className='text-sm text-zinc-400'>{playerInfo.games.csgo.faceit_elo}</p>
          </div>
        </>
      )}
      <h3 className='w-64'>{nickname}</h3>
      <div className='text-center w-12'>
        <p>{player_stats["Kills"]}</p>
      </div>
      <div className='text-center w-12'>
        <p>{player_stats["Deaths"]}</p>
      </div>
      <div className='text-center w-12'>
        <p>{player_stats["Assists"]}</p>
      </div>
      <div className='text-center w-12'>
        <p>{player_stats["K/D Ratio"]}</p>
      </div>
      <div className='text-center w-12'>
        <p>{player_stats["K/R Ratio"]}</p>
      </div>
      <div className='text-center w-12'>
        <p>{player_stats["Headshots"]}</p>
      </div>
      <div className='text-center w-12'>
        <p>{player_stats["Headshots %"]}</p>
      </div>
    </div>
  );
};

export default PlayerItem;
