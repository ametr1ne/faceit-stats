import React, { useState, useEffect } from "react";
import { MatchService } from "@/services/Match.service";
import PlayerItem from "@/components/PlayerItem";
import Head from "next/head";
import { TeamService } from "@/services/Team.service";

const Match = ({ match, teams }) => {
  return (
    <>
      <Head>
        <title>Match Info</title>
      </Head>
      <div className='pt-20 md:pt-40 px-2 md:px-5 pb-20'>
        <div className='head flex flex-col items-center mb-10'>
          <small>{match.game_mode}</small>
          <p>Score: {match.round_stats["Score"]}</p>
          <p>Map: {match.round_stats["Map"]}</p>
        </div>
        <div className='max-w-5xl mx-auto mb-5'>
          <h2 className='text-white font-bold text-center text-xl mb-5'>{teams.team1.name}</h2>
          <div className='table w-full'>
            <div className='flex w-full gap-4 items-center text-xs px-8 mb-2'>
              <div className='w-8 text-center'>lvl</div>
              <div className='w-12 text-center'>elo</div>
              <div className='w-64'>Nickname</div>
              <div className='w-12 text-center'>Kills</div>
              <div className='w-12 text-center'>Deaths</div>
              <div className='w-12 text-center'>Assists</div>
              <div className='w-12 text-center'>K/D</div>
              <div className='w-12 text-center'>K/R</div>
              <div className='w-12 text-center'>HS</div>
              <div className='w-12 text-center'>HS %</div>
            </div>
            <div className='flex flex-col gap-2'>
              {match.teams[0].players.map((item) => (
                <PlayerItem key={item.player_id} {...item} />
              ))}
            </div>
          </div>
        </div>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-white font-bold text-center text-xl mb-5'>{teams.team2.name}</h2>
          <div className='table w-full'>
            <div className='flex w-full gap-4 items-center text-xs px-8 mb-2'>
              <div className='w-8 text-center'>lvl</div>
              <div className='w-12 text-center'>elo</div>
              <div className='w-64'>Nickname</div>
              <div className='w-12 text-center'>Kills</div>
              <div className='w-12 text-center'>Deaths</div>
              <div className='w-12 text-center'>Assists</div>
              <div className='w-12 text-center'>K/D</div>
              <div className='w-12 text-center'>K/R</div>
              <div className='w-12 text-center'>HS</div>
              <div className='w-12 text-center'>HS %</div>
            </div>
            <div className='flex flex-col gap-2'>
              {match.teams[1].players.map((item) => (
                <PlayerItem key={item.player_id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Match;

export async function getServerSideProps({ params }) {
  const { rounds } = await MatchService.getMatchStats(params.id);

  const team1 = await TeamService.getOne(rounds[0].teams[0].team_id);
  const team2 = await TeamService.getOne(rounds[0].teams[1].team_id);

  if (!rounds || !team1 || !team2) {
    return {
      notFound: true,
    };
  }

  return { props: { match: rounds[0], teams: { team1, team2 } } };
}
