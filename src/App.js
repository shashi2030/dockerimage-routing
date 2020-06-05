import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import history from './history';
import Dashboard from "./Component/Dashboard";
import AboutUs from "./Component/AboutUs";
function App() {
  return (

    <Router history={history}>
      <div>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
