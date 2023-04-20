import React, { useEffect, useState } from "react";
import MapItem from "./MapItem";

const MapsStats = ({ stats }) => {
  const [maps, setMaps] = useState(stats.filter((item) => item.mode === "5v5"));

  useEffect(() => {
    const arr = maps.sort((a, b) => b.stats["Matches"] - a.stats["Matches"]);
    arr.map((item) => {
      console.log(item.stats["Matches"]);
    });
    setMaps(arr);
  }, [maps]);

  return (
    maps.length > 0 && (
      <div className='w-full p-5 bg-zinc-800 mt-3 rounded-md'>
        <h2 className='text-sm text-center font-bold'>Maps stats</h2>
        <ul className='flex flex-col gap-y-2 mt-5'>
          <li className='grid grid-cols-6 text-xs gap-2 justify-center'>
            <div className='flex flex-col items-center'>
              <p>Map</p>
            </div>
            <div className='flex flex-col items-center'>
              <p>Matches</p>
            </div>
            <div className='flex flex-col items-center'>
              <p>K/D</p>
            </div>
            <div className='flex flex-col items-center'>
              <p>K/R</p>
            </div>
            <div className='flex flex-col items-center'>
              <p>AVG Kills</p>
            </div>
            <div className='flex flex-col items-center'>
              <p>Win Rate</p>
            </div>
          </li>
          {maps.map((map) => (
            <MapItem key={map.label} map={map} />
          ))}
        </ul>
      </div>
    )
  );
};

export default MapsStats;
