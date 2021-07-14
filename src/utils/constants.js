export const CLIENT_ID =
  "5de930919a48ededaf93e97fcaaf832671202976f6ec9b1e9f286ed3ceacc060";
export const CLIENT_SECRET =
  "d6855b6e644031fbf76c99ca3500f1d4752c46c697b93fde825f6c25bedd42be";
export const REDIRECT_URL = "http://localhost:3000/validate";

export const COINBASE_AUTH_URL = `https://www.coinbase.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
  REDIRECT_URL
)}&state=${generateUUID()}&scope=wallet:accounts:read`;

// export const COINBASE_AUTH_URL = `https://www.coinbase.com/oauth/authorize/oauth_signin?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
//   REDIRECT_URL
// )}&response_type=code&scope=wallet%3Aaccounts%3Aread&state=${generateUUID()}`;

export const CURRENT_USER = "CURRENT_USER";
export const BEARERS_TOKEN = "BEARERS_TOKEN";

function generateUUID() {
  return (
    Math.random().toString(32).replace("0.", "") +
    Math.random().toString(32).replace("0.", "")
  );
}
