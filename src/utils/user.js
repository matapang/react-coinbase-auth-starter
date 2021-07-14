import storage from "./storage";
import { CURRENT_USER, BEARERS_TOKEN } from "./constants";

export function currentUser() {
  return storage.get(CURRENT_USER);
}

export function isUserAuthenticated() {
  return !!storage.get(BEARERS_TOKEN);
}

export function logout() {
  storage.clear();
  window.location = "/";
}
