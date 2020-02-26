import axios from "axios";

const api = axios.create({
  baseURL: "https://kiviuq.herokuapp.com"
});

export default api;
