import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PlayerService } from "@/services/Player.service";
import { EloBlock } from "@/components/EloBlock";
import { HeadBlock } from "@/components/HeadBlock";
import { RecentStats } from "@/components/RecentStats";
import { StatsBlock } from "@/components/StatsBlock";
import { History } from "@/components/History";
import { Loader } from "@/components/Loader";
import Head from "next/head";

const Player = ({ player, stats, history }) => {
  const router = useRouter();

  const [color, setColor] = useState("border-[#EEEEEE]");

  useEffect(() => {
    if (player.games.csgo.skill_level > 1 && player.games.csgo.skill_level <= 3) {
      setColor("border-[#1CE400]");
    } else if (player.games.csgo.skill_level > 3 && player.games.csgo.skill_level <= 7) {
      setColor("border-[#FFC800]");
    } else if (player.games.csgo.skill_level > 7 && player.games.csgo.skill_level <= 9) {
      setColor("border-[#FF6309]");
    } else if (player.games.csgo.skill_level === 10) {
      setColor("border-[#FE1F00]");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Player | {player.nickname}</title>
      </Head>
      <div className='pt-20 md:pt-40 px-2 md:px-5 pb-20'>
        <div className='max-w-5xl mx-auto'>
          <HeadBlock user={player} />
          <div className='flex gap-3 flex-wrap md:flex-nowrap'>
            <EloBlock color={color} player={player} />
            <RecentStats stats={stats} user={player} history={history} />
          </div>
          <StatsBlock stats={stats.lifetime} />
          <History user={player} history={history} />
        </div>
      </div>
    </>
  );
};

export default Player;

export async function getServerSideProps({ params }) {
  try {
    const player = await PlayerService.getOne(params.nickname);
    const stats = await PlayerService.getStats(player.player_id);
    const history = await PlayerService.getHistory(player.player_id);

    return { props: { player: player, stats: stats, history: history } };
  } catch {
    return { props: { player: null, stats: null, history: null } };
  }
}
