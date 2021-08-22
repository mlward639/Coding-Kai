import React from "react";
// import # from "../components/#";
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
        <button className="startNewGame">Start a new game</button>
      </div>
    </>
  );
};

export default Homepage;
