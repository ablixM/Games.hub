import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "b0fedb41332346bcace58a9991993b47"
    }
})
