import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import Player from "./components/player";
import Homepage from "./pages/Homepage";
import Storypage from "./pages/Storypage";
import PausePage from "./pages/PausePage";
import FightPage from "./pages/FightPage";
import FightPageQuestion from "./pages/FightPageQuestion";
import QuitPage from "./pages/QuitPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MeetTeamPage from "./pages/meetTeam";
import Canvas from "./components/Canvas/Canvas";

//routing NOT working
export default function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/api/character">
            <Homepage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
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
          <Route path="/meet">
            <MeetTeamPage />
          </Route>
          <Route path="/game">
            <Canvas />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// <div className="zone-container"><Player skin="m2" /></div>

// ADD HERE
{
  /* <Switch>
<Route exact path="/">
  if logged in
  <Homepage />
  if !logged in
  <LoginPage />
</Route>
 */
}
