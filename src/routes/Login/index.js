import React from "react";
import { Button } from "antd";
import { COINBASE_AUTH_URL } from "../../utils/constants";

function Login() {
  return (
    <div className="h-100 login-page">
      <div className="text-center" style={{ paddingTop: "20%" }}>
        <h1>
          Breach Insured Test
          <div>
            <small>
              Allow Breach Insured read-only access to your Coinbase
            </small>
          </div>
        </h1>
        <Button
          type="primary"
          onClick={() => {
            window.location.replace(COINBASE_AUTH_URL);
          }}
        >
          Login using Coinbase
        </Button>
      </div>
    </div>
  );
}

export default Login;
