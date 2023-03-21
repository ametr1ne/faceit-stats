import React, { useContext } from "react";
import { AppContext } from "next/app";
import { lvl_points } from "@/utils/consts.js";

export const EloBlock = ({ color, player }) => {
  const info = player.games.csgo;

  let diffUp = 0;
  let diffDown = 0;

  let lvlUp = +info.skill_level;
  let lvlDown = +info.skill_level - 1;

  if (lvlUp < 10) {
    diffUp = lvl_points[lvlUp] - +info.faceit_elo;
  }

  if (lvlDown > 0) {
    diffDown = +info.faceit_elo - lvl_points[lvlDown];
  }

  return (
    <div className='stats w-full md:w-1/3 bg-zinc-800 py-5 md:py-0 xl:h-60 rounded-md flex flex-col items-center justify-center'>
      <div className='flex items-center space-x-10'>
        <span className='font-semibold'>- {diffDown}</span>
        <div
          className={
            "w-16 h-16 mb-5 mt-2 border-4 rounded-full flex items-center justify-center " + color
          }>
          <h2 className='font-bold text-3xl'>{info.skill_level}</h2>
        </div>
        <span className='font-semibold'>+ {diffUp}</span>
      </div>
      <h2 className='font-bold text-xl'>
        {info.faceit_elo} <small className='font-medium'>elo</small>
      </h2>
    </div>
  );
};
