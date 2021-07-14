import React, { useEffect, useState } from "react";
import Balance from "./components/Balance";
import Profile from "./components/Profile";
import coinbaseApi from "../../utils/coinbaseApi";
import { currentUser } from "../../utils/user";

function Dashboard() {
  const [balance, setBalance] = useState(null);
  const user = currentUser() || {};
  useEffect(() => {
    const authenticate = async () => {
      const bal = await coinbaseApi.getAccountBalance();
      setBalance(bal);
    };
    authenticate();
  }, []);

  return (
    <div>
      <Profile value={user} />
      <Balance value={balance} />
    </div>
  );
}

export default Dashboard;
