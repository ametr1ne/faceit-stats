import axios from "axios";

export const PlayerService = {
  async getWorldRating() {
    const { data } = await axios.get(
      "https://open.faceit.com/data/v4/rankings/games/csgo/regions/EU",
      {
        mode: "no-cors",
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      }
    );
    return data;
  },
  async getOneById(id) {
    const res = await axios.get("https://open.faceit.com/data/v4/players/" + id, {
      mode: "no-cors",
      headers: {
        Authorization: `Bearer 62e9c8b8-d4db-4890-b119-e0e8932187c2`,
      },
    });
    return res.data;
  },
  async getOne(nickname) {
    const res = await axios.get("https://open.faceit.com/data/v4/players?nickname=" + nickname, {
      mode: "no-cors",
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });
    return res.data;
  },
  async getStats(id) {
    const res = await axios.get("https://open.faceit.com/data/v4/players/" + id + "/stats/csgo", {
      mode: "no-cors",
      headers: {
        Authorization: `Bearer 62e9c8b8-d4db-4890-b119-e0e8932187c2`,
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
          Authorization: `Bearer 62e9c8b8-d4db-4890-b119-e0e8932187c2`,
        },
      }
    );
    return res.data;
  },
};
