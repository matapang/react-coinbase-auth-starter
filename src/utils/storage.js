const storage = {
  set,
  get,
  clear,
};
function getStorage() {
  return localStorage;
}

function set(key, value) {
  if (getStorage()) {
    getStorage().setItem(
      key,
      JSON.stringify({
        [key]: value,
      })
    );
  }
}

function get(key) {
  let ls = {};
  if (getStorage()) {
    try {
      ls = JSON.parse(getStorage().getItem(key)) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function clear() {
  getStorage().clear();
}

export default storage;
