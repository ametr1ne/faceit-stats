import axios from "axios";

export const TeamService = {
  async getOne(id) {
    const res = await axios.get("https://open.faceit.com/data/v4/teams/" + id, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    });
    return res.data;
  },
};
