import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Player from "./components/player";
import Homepage from "./pages/Homepage";
import Storypage from "./pages/Storypage";
import PausePage from "./pages/PausePage";
import FightPage from "./pages/FightPage";
import FightPageQuestion from "./pages/FightPageQuestion";
import QuitPage from "./pages/QuitPage";

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
          <Route path="/fight">
            <FightPage />
          </Route>
          <Route path="/question">
            <FightPageQuestion />
          </Route>
          <Route path="/quit">
            <QuitPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// <div className="zone-container"><Player skin="m2" /></div>
