import React, { useState, useEffect } from "react";
import { MatchService } from "@/services/Match.service";
import PlayerItem from "@/components/PlayerItem";
import Head from "next/head";

const Match = ({ match }) => {
  const team1 = match.teams.faction1;
  const team2 = match.teams.faction2;

  console.log(match);

  return (
    <>
      <Head>
        <title>Match Info</title>
      </Head>
      <div className='pt-20 md:pt-40 px-2 md:px-5 pb-20'>
        <div className='head flex flex-col items-center mb-10'>
          <small>{match.competition_name}</small>
          <p>Status: {match.status}</p>
        </div>
        <div className='max-w-5xl mx-auto mb-5'>
          <h2 className='text-white font-bold text-center text-xl mb-5'>{team1.name}</h2>
          <div className='table w-full'>
            <div className='flex w-full gap-4 items-center text-xs px-8 mb-2'>
              <div className='w-8 text-center'>lvl</div>
              <div className='w-64'>Nickname</div>
              <div className='w-12 text-center'>Matches</div>
              <div className='w-12 text-center'>K/D</div>
              <div className='w-16 text-center'>HS %</div>
              <div className='w-24 text-center'>Current win streak</div>
            </div>
            <div className='flex flex-col gap-2'>
              {team1.roster.map((item) => (
                <PlayerItem
                  key={item.player_id}
                  nickname={item.nickname}
                  id={item.player_id}
                  match={match}
                  info={item}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='max-w-5xl mx-auto'>
          <h2 className='text-white font-bold text-center text-xl mb-5'>{team2.name}</h2>
          <div className='table w-full'>
            <div className='flex w-full gap-4 items-center text-xs px-8 mb-2'>
              <div className='w-8 text-center'>lvl</div>
              <div className='w-64'>Nickname</div>
              <div className='w-12 text-center'>Matches</div>
              <div className='w-12 text-center'>K/D</div>
              <div className='w-16 text-center'>HS %</div>
              <div className='w-24 text-center'>Current win streak</div>
            </div>
            <div className='flex flex-col gap-2'>
              {team2.roster.map((item) => (
                <PlayerItem
                  key={item.player_id}
                  nickname={item.nickname}
                  id={item.player_id}
                  match={match}
                  info={item}
                />
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
  const match = await MatchService.getOneById(params.id);

  return { props: { match } };
}
