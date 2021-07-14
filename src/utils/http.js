import axios from "axios";
import { BEARERS_TOKEN } from "./constants";
import storage from "./storage";
import { logout } from "./user";

const http = {
  get: (url, query) => axios.get(url, { params: query }),
  getData: (url, query) =>
    axios.get(url, { params: query }).then((r) => r?.data),
  post: (url, payload) => axios.post(url, payload),
};

axios.interceptors.request.use(function (config) {
  const token = storage.get(BEARERS_TOKEN);
  if (token && !config.headers["Authorization"]) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(statusHandler, function (error) {
  if (error) {
    console.log(error);
    logout();
  }
});

function statusHandler(response) {
  if (!response) {
    return Promise.reject(null);
  }
  const { status, data, headers } = response;
  const contentType = headers["content-type"];
  const isJsonBody =
    contentType && contentType.indexOf("application/json") > -1;
  return status === 500 ? Promise.reject(data) : isJsonBody ? data : response;
}

export default http;
