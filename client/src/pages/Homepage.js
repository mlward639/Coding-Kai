import React from "react";
import { Link } from "react-router-dom";
// import { useQuery } from "@apollo/client";
// import { QUERY_PROFILES } from "../utils/queries";
import CharacterCards from "../components/characterCards/CharacterCards";

const username = "Test User"; //update with get request data from mongo db

const Homepage = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
      <h1 className="welcomeHomepage">Welcome, {username}!</h1>
      <div className="characterCardsContainer">
        <CharacterCards />
      </div>
      <div className="startNewGameContainer">
        <Link to="/story">
          <button className="startNewGame">Start a new game</button>
        </Link>
      </div>
    </>
  );
};

export default Homepage;

//DO WE WANT A SELECT CHARACTER PAGE (so when they click start new game, it takes them to select character page)?? Or just randomly assign them a character??
