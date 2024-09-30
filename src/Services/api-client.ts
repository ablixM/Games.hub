import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "13ad0271ce0d47a494bde4b33105d730",
  },
});
