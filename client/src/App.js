import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Player from "./components/player";
import Homepage from "./pages/Homepage";
import Storypage from "./pages/Storypage";
import PausePage from "./pages/PausePage";

//routing NOT working
export default function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/story">
            <Storypage />
          </Route>
          <Route path="/pause">
            <PausePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// <div className="zone-container"><Player skin="m2" /></div>
