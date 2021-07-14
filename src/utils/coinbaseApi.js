import http from "./http";
import storage from "./storage";
import {
  BEARERS_TOKEN,
  CURRENT_USER,
  CLIENT_ID,
  REDIRECT_URL,
  CLIENT_SECRET,
} from "./constants";

const api = {
  login: validateCode,
  getAccountBalance,
};

//implementation
const API_COIN_BASE = "https://api.coinbase.com";
async function validateCode(code) {
  if (code) {
    const response = await http.post(`${API_COIN_BASE}/oauth/token`, {
      grant_type: "authorization_code",
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URL,
    });
    if (!response?.error && response?.access_token) {
      storage.set(BEARERS_TOKEN, response.access_token);
      return getUser();
    }
  } else {
    return Promise.reject(null);
  }
}

async function getUser() {
  const userData = await http.getData(`${API_COIN_BASE}/v2/user`);
  if (userData) {
    storage.set(CURRENT_USER, userData);
  }
  return userData;
}

function getAccountBalance() {
  return http.getData(`${API_COIN_BASE}/v2/accounts`);
}

export default api;
