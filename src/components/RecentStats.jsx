import React, { useEffect, useState } from "react";
import { MatchService } from "../services/Match.service";

export const RecentStats = ({ stats, user, history }) => {
  const [recentData, setRecentData] = useState({
    avgKills: 0,
    avgKD: 0,
    avgKR: 0,
    avgHSPercent: 0,
    avgAssists: 0,
  });

  function fetchData() {
    let killsCounter = 0;
    let kdCounter = 0;
    let krCounter = 0;
    let hsPercentageCounter = 0;
    let assistsCounter = 0;

    const matches = history.items.filter((match) => match.game_mode === "5v5").slice(0, 20);

    const matchesLength = matches.length;

    matches.map(async (match) => {
      const { rounds } = await MatchService.getMatchStats(match.match_id);

      const teams = rounds[0].teams;

      teams.forEach((team) => {
        const player = team.players.find((item) => item.player_id == user.player_id);

        if (player) {
          killsCounter += +player.player_stats["Kills"];
          kdCounter += +player.player_stats["K/D Ratio"];
          krCounter += +player.player_stats["K/R Ratio"];
          hsPercentageCounter += +player.player_stats["Headshots %"];
          assistsCounter += +player.player_stats["Assists"];

          setRecentData({
            avgKills: (killsCounter / matchesLength).toFixed(1),
            avgKD: (kdCounter / matchesLength).toFixed(2),
            avgKR: (krCounter / matchesLength).toFixed(2),
            avgHSPercent: (hsPercentageCounter / matchesLength).toFixed(1),
            avgAssists: (assistsCounter / matchesLength).toFixed(1),
          });
        }
      });
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='relative stats py-10 xl:py-0 w-full md:w-2/3 bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 xl:h-60 rounded-md flex flex-col items-center justify-center'>
      <small className='absolute top-4'>Recent results 5v5</small>
      <div className='top grid max-w-screen-xl grid-cols-2 gap-x-8 gap-y-4 md:gap-y-8 p-4 grid-flow-dense mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-5 dark:text-white sm:p-8'>
        <div className='flex flex-col items-center justify-center'>
          <span>AVG Kills</span>
          <h4 className='text-white font-bold text-3xl'>{recentData.avgKills}</h4>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <span>AVG K/D</span>
          <h4 className='text-white font-bold text-3xl'>{recentData.avgKD}</h4>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <span>AVG K/R</span>
          <h4 className='text-white font-bold text-3xl'>{recentData.avgKR}</h4>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <span>AVG HS %</span>
          <h4 className='text-white font-bold text-3xl'>{recentData.avgHSPercent}</h4>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <span>AVG Assists</span>
          <h4 className='text-white font-bold text-3xl'>{recentData.avgAssists}</h4>
        </div>
      </div>
      <div className='history flex gap-3'>
        {stats &&
          stats.lifetime["Recent Results"].map((item, index) =>
            item == 1 ? (
              <h2 key={index} className='text-green-500 font-bold text-2xl'>
                W
              </h2>
            ) : (
              <h2 key={index} className='text-red-400 font-bold text-2xl'>
                L
              </h2>
            )
          )}
      </div>
    </div>
  );
};
