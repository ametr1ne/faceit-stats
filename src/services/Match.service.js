import axios from "axios";

export const MatchService = {
  async getAll() {
    const res = await axios.get("https://open.faceit.com/data/v4/games", {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    });
    return res.data;
  },
  async getOneById(id) {
    const res = await axios.get("https://open.faceit.com/data/v4/matches/" + id, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    });
    return res.data;
  },
  async getMatchStats(id) {
    const res = await axios.get("https://open.faceit.com/data/v4/matches/" + id + "/stats", {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    });
    return res.data;
  },
};
