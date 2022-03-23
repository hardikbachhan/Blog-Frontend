import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import DisplayPost from "./pages/display post/DisplayPost";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route exact path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route exact path="/write">
          {user ? <Write /> : <Register />}
        </Route>
        <Route exact path="/settings">
          {user ? <Settings /> : <Register />}
        </Route>
        <Route exact path="/post/:postId">
          <DisplayPost />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
