import React, { useContext } from "react";
import { HistoryItem } from "./HistoryItem";

export const History = ({ user, history }) => {
  return (
    <div className='history-block mt-12 flex flex-col gap-6'>
      <h2 className='text-white font-bold text-2xl mb-4'>Last 25th matches</h2>
      {history.items.map((item) => (
        <HistoryItem playerId={user.player_id} key={item.match_id} match={item} />
      ))}
    </div>
  );
};
