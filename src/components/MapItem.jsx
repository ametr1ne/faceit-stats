import React from "react";

const MapItem = ({ map }) => {
  return (
    <li className='bg-zinc-700 text-white rounded-md py-1 px-4 grid grid-cols-6 gap-2 justify-center'>
      <p>{map.label}</p>
      <div className='flex flex-col items-center'>
        <b>{map.stats["Matches"]}</b>
      </div>
      <div className='flex flex-col items-center'>
        <b>{map.stats["Average K/D Ratio"]}</b>
      </div>
      <div className='flex flex-col items-center'>
        <b>{map.stats["Average K/R Ratio"]}</b>
      </div>
      <div className='flex flex-col items-center'>
        <b>{map.stats["Average Kills"]}</b>
      </div>
      <div className='flex flex-col items-center'>
        <b>{map.stats["Win Rate %"]} %</b>
      </div>
    </li>
  );
};

export default MapItem;
