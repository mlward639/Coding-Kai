import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useQuery } from "@apollo/client";
// import { QUERY_PROFILES } from "../utils/queries";
import CharacterCards from "../components/characterCards/CharacterCards";

const username = "Test User"; //update with get request data from mongo db

const Homepage = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];
  // console.log(GetCharacters[0].name, "5555");
  localStorage.setItem("coordX", -640);
  localStorage.setItem("coordY", -304);

  return (
    <>
      <h1 className="welcomeHomepage">Welcome to Coding Kai!</h1>
      <div className="characterCardsContainer">
        <CharacterCards />
      </div>
      <div className="startNewGameContainer">
        <Link to="/new">
          <button className="startNewGame">Start a new game</button>
        </Link>
      </div>
    </>
  );
};

export default Homepage;

///*** ADD A USER ID FROM LOCAL STORAGE ONCE ITS AVAILABLE */
