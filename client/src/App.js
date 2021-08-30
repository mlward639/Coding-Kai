import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// UPDATES  for Apollo
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
//=========================================

// PAGES 
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

//UPDATE=============================================================
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});


// // Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
//====================================================

//routing NOT working
export default function App() {
  return (
    // UPDATE: APOLLO
    <ApolloProvider client={client}>
    <Router>
      <div className="container" style={{display:'flex', flexDirection:'column', alignItems:"center", justifyContent: "center", marginLeft:"15vw"}}>
        <Switch>
          <Route exact path="/">
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
    {/* UPDATE: APOLLO */}
    </ApolloProvider>
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

