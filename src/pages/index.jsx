import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { SearchBlock } from "@/components/SearchBlock";
import { PlayerService } from "@/services/Player.service";
import { LeaderboardList } from "@/components/LeaderboardList";
import { cookieHandler } from "@/utils/CookieHandler";

export default function Home({ players }) {
  const [searchValue, setSearchValue] = useState("");
  const [cookieObject, setCookieObject] = useState([]);

  const router = useRouter();

  useEffect(() => {
    Cookies.get("recent_searches") && setCookieObject(JSON.parse(Cookies.get("recent_searches")));
  }, []);

  const submitSearch = (e) => {
    e.preventDefault();

    cookieHandler(cookieObject, setCookieObject, searchValue);

    router.push("/player/" + searchValue);
  };

  return (
    <>
      <Head>
        <title>Home | CS:GO Stats</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className='pt-20 md:pt-40 px-2 md:px-5 pb-20'>
        <div className='wrapper max-w-5xl mx-auto flex flex-col items-center'>
          <div className='text-center'>
            <h1 className='font-bold text-4xl md:text-5xl mb-10 md:mb-20 max-w-3xl md:leading-tight mx-auto'>
              Hello, brother <br /> Here you can check your statistics from FACEIT
            </h1>
            <h2 className='font-bold text-2xl md:text-3xl mb-20 max-w-3xl leading-tight mx-auto'>
              Just type your nickname from FACEIT and GOOO
            </h2>
          </div>

          <SearchBlock
            onChange={(e) => setSearchValue(e.target.value)}
            submitSearch={(e) => submitSearch(e)}
            searchValue={searchValue}
            cookieObject={cookieObject}
          />

          <LeaderboardList
            players={players.items}
            cookieObject={cookieObject}
            setCookieObject={setCookieObject}
          />
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  try {
    const players = await PlayerService.getWorldRating();

    return { props: { players: players }, revalidate: 30 };
  } catch {
    return { props: { players: null } };
  }
}
