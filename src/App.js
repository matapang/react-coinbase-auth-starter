import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Layout, Button } from "antd";
import { currentUser, logout } from "./utils/user";
import { Login, Dashboard, ValidateLogin } from "./routes";
import "antd/dist/antd.css";
import "./App.css";
const { Header, Content } = Layout;

const withCurrentUserCheck = (Cmp) => (props) => {
  useEffect(() => {
    if (!currentUser()) {
      logout();
    }
  }, []);
  if (!currentUser()) {
    return false;
  }
  return (
    <Layout className="h-100">
      <Header>
        <div className="pull-right">
          <Button onClick={() => logout()}>Logout</Button>
        </div>
      </Header>
      <Content className="breach-app-content">
        <Cmp {...props} />
      </Content>
    </Layout>
  );
};

const RouteWithCheck = withCurrentUserCheck(Route);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/validate">
          <ValidateLogin />
        </Route>
        <RouteWithCheck path="/dashboard">
          <Dashboard />
        </RouteWithCheck>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
