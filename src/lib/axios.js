import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_API_ENDPOINT + "/api/v1" ||
  window.location.protocol + "//" + window.location.hostname + "/api/v1";

const Api = axios.create({
  baseURL: BASE_URL,
});

export default Api;
