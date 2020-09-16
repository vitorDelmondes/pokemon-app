import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.pokemontcg.io/v1",
  // headers: { 'X-Custom-Header': 'foobar' }
});

export default axiosInstance;
