import React, { useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { currentUser } from "../../utils/user";
import coinbaseApi from "../../utils/coinbaseApi";

function ValidateLogin() {
  const user = currentUser();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (!user) {
      setTimeout(() => {
        coinbaseApi.login(code).then(() => {
          goToDashboard();
        });
      }, 300);
    } else {
      goToDashboard();
    }
  }, [user]);
  return (
    <div className="text-center m-top-center">
      <LoadingOutlined style={{ fontSize: 100 }} />
    </div>
  );
}
const goToDashboard = () => {
  window.location = "/dashboard";
};

export default ValidateLogin;
