import React, { useEffect } from "react";
import { useState } from "react";
import { MatchService } from "../services/Match.service";

export const HistoryItem = ({ playerId, match }) => {
  const [playerStats, setPlayerStats] = useState(null);
  const [kdColor, setKdColor] = useState("text-white");

  const [winClassName, setWinClassName] = useState("border-r-red-400 hover:border-r-red-500");

  const date = new Date(match.started_at * 1000);
  const started_at =
    date.toLocaleDateString() +
    " " +
    ("0" + date.getHours()).slice(-2) +
    ":" +
    ("0" + date.getMinutes()).slice(-2);

  const [matchStats, setMatchStats] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { rounds } = await MatchService.getOne(match.match_id);
      setMatchStats(rounds[0]);

      const teams = rounds[0].teams;

      teams.map((team) => {
        team.players.map(async (player) => {
          if (player.player_id === playerId) {
            setPlayerStats(player.player_stats);
          }
        });
      });
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (playerStats) {
      if (playerStats["K/D Ratio"] > 1.1) {
        setKdColor("text-green-400");
      } else if (playerStats["K/D Ratio"] > 0.9 && playerStats["K/D Ratio"] <= 1.1) {
        setKdColor("text-yellow-300");
      } else if (playerStats["K/D Ratio"] <= 0.9) {
        setKdColor("text-red-400");
      }

      if (playerStats["Result"] === "1") {
        setWinClassName("border-r-green-300 hover:border-r-green-500");
      }
    }
  }, [playerStats]);

  if (!matchStats) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className={
        "history-item w-full py-3 px-5 lg:px-12 rounded-xl flex flex-col md:flex-row border border-r-4 border-zinc-800 items-center transition-all duration-300 bg-zinc-800 gap-5 md:gap-10 " +
        winClassName
      }>
      <div className='match-info text-xs md:text-sm flex md:flex-col space-x-2 md:space-x-0 items-center md:items-start justify-between w-full md:w-52'>
        <p className='date text-white'>{started_at}</p>
        <p className='text-white'>
          Map: <span className='font-medium'>{matchStats.round_stats["Map"]}</span>
        </p>
        <p className='text-white'>
          Score: <span className='font-medium'>{matchStats.round_stats["Score"]}</span>
        </p>
      </div>
      {playerStats ? (
        <div className='player-stats w-full flex space-x-4 items-center justify-between'>
          <h4 className='text-md md:text-xl font-semibold md:w-32 flex flex-col'>
            <span className='text-white text-xs md:text-sm font-medium'>K / D / A</span>
            <div>
              <span className='text-blue-500'>{playerStats["Kills"]}</span> /{" "}
              <span className='text-red-300'>{playerStats["Deaths"]}</span> /{" "}
              <span>{playerStats["Assists"]}</span>
            </div>
          </h4>
          <h4 className={"font-semibold text-md md:text-xl md:w-20 flex flex-col " + kdColor}>
            <span className='text-white text-xs md:text-sm font-medium'>K / D</span>{" "}
            {playerStats["K/D Ratio"]}
          </h4>
          <h4 className={"font-semibold text-md md:text-xl md:w-20 flex flex-col"}>
            <span className='text-white text-xs md:text-sm font-medium'>K / R</span>{" "}
            {playerStats["K/R Ratio"]}
          </h4>
          <div className='flex flex-col font-semibold text-md md:text-xl'>
            <span className='text-white text-xs md:text-sm font-medium'>HS</span>
            {playerStats["Headshots"]}
          </div>
          <div className='flex flex-col font-semibold text-md md:text-xl'>
            <span className='text-white text-xs md:text-sm font-medium'>HS %</span>
            {playerStats["Headshots %"]}
          </div>
        </div>
      ) : (
        <p className='w-full text-sm md:text-md'>Stats is not available for this match</p>
      )}
    </div>
  );
};
