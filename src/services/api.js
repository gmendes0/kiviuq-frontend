import axios from "axios";

const api = axios.create({
  baseURL: "https://kiviuq-api.herokuapp.com"
});

export default api;
