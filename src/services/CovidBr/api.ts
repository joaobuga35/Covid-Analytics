import axios from "axios";

export const apiCovid = axios.create({
  baseURL: "https://covid19-brazil-api.now.sh",
  timeout: 15000,
});