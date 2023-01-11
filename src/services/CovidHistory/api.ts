import axios from "axios";

export const apiCovidHistory = axios.create({
  baseURL: "http://localhost:3002",
  timeout: 1500000,
});