import axios from "axios";

export const PlayerService = {
  async getWorldRating() {
    const { data } = await axios.get(
      "https://open.faceit.com/data/v4/rankings/games/csgo/regions/EU",
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      }
    );
    return data;
  },
  async getOneById(id) {
    const res = await axios.get("https://open.faceit.com/data/v4/players/" + id, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    });
    return res.data;
  },
  async getOne(nickname) {
    const res = await axios.get("https://open.faceit.com/data/v4/players?nickname=" + nickname, {
      mode: "no-cors",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    });
    return res.data;
  },
  async getStats(id) {
    const res = await axios.get("https://open.faceit.com/data/v4/players/" + id + "/stats/csgo", {
      mode: "no-cors",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    });
    return res.data;
  },
  async getHistory(id) {
    const res = await axios.get(
      "https://open.faceit.com/data/v4/players/" + id + "/history?game=csgo&limit=25",
      {
        mode: "no-cors",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      }
    );
    return res.data;
  },
};
