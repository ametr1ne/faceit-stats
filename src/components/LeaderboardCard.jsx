import { PlayerService } from "@/services/Player.service";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { cookieHandler } from "@/utils/CookieHandler";

export const LeaderboardCard = ({ player, cookieObject, setCookieObject }) => {
  const [playerInfo, setPlayerInfo] = useState({});
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const submitSearch = (nickname) => {
    cookieHandler(cookieObject, setCookieObject, nickname);
    router.push("/player/" + nickname);
  };

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const data = await PlayerService.getOneById(player.player_id);
      const statsData = await PlayerService.getStats(player.player_id);
      setPlayerInfo(data);
      setStats(statsData.lifetime);

      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <div className='py-3 md:py-0 h-[96px] border rounded-md border-gray-500 px-12 w-full mx-auto animate-pulse flex gap-4 md:gap-0 flex-col md:flex-row items-center justify-between'>
          <div className='w-[50px] md:w-[70px] h-[50px] md:h-[70px] bg-gray-300 rounded-full dark:bg-gray-700'></div>
          <div className='flex flex-col justify-center items-center'>
            <div className='h-7 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
            <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[180px] mb-2.5'></div>
          </div>
          <div className='h-[40px] bg-gray-200 rounded-md dark:bg-gray-700 w-[141px]'></div>
        </div>
      ) : (
        <>
          <div
            onClick={() => submitSearch(player.nickname)}
            className='flex border cursor-pointer border-zinc-700 rounded-md px-10 py-3 text-xl w-full items-center hover:border-zinc-400 transition-all duration-500'>
            <div className='w-[20px] mr-2'>{player.position}.</div>
            <div className='text-green-400 font-bold w-[50px] ml-0'>{player.faceit_elo}</div>
            <div className='flex items-center justify-between w-full space-x-7 ml-20 font-semibold text-white'>
              <img
                src={playerInfo.avatar ? playerInfo.avatar : "/user.png"}
                alt='img'
                width={70}
                className='rounded-full'
              />
              <div className='text-white font-semibold w-[120px]'>{player.nickname}</div>
              <div className='flex flex-col text-center '>
                <span className='font-light text-xs'>Matches:</span>
                {stats["Matches"]}
              </div>
              <div className='flex flex-col text-center '>
                <span className='font-light text-xs'>K/D:</span>
                {stats["Average K/D Ratio"]}
              </div>
              <div className='flex flex-col text-center '>
                <span className='font-light text-xs'>HS %</span>
                {stats["Average Headshots %"]}
              </div>
              <div className='flex flex-col text-center '>
                <span className='font-light text-xs'>Win rate:</span>
                {stats["Win Rate %"]}%
              </div>
              <div className='flex flex-col text-center '>
                <span className='font-light text-xs'>Country:</span>
                {player.country}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
