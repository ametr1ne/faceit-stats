import axios from "axios";

export const MatchService = {
  async getAll() {
    const res = await axios.get("https://open.faceit.com/data/v4/games", {
      mode: "no-cors",
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });
    return res.data;
  },
  async getOneById(id) {
    const res = await axios.get("https://open.faceit.com/data/v4/matches/" + id, {
      mode: "no-cors",
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });
    return res.data;
  },
  async getOne(id) {
    const res = await axios.get("https://open.faceit.com/data/v4/matches/" + id + "/stats", {
      mode: "no-cors",
      headers: {
        Authorization: `Bearer 62e9c8b8-d4db-4890-b119-e0e8932187c2`,
      },
    });
    return res.data;
  },
};
