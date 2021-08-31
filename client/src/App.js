import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./screen/Home/Home";
import Login from "./screen/Login/Login";
import Register from "./screen/Register/Register";
import TopBar from "./components/TopBar/TopBar";
import Single from "./screen/Single/Single";
import Settings from "./screen/Settings/Settings";
import Write from "./screen/Write/Write";

import "./App.css";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
