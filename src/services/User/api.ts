import axios from "axios";

export const api = axios.create({
  baseURL: "https://fake-api-covid.onrender.com",
  timeout: 15000,
});
