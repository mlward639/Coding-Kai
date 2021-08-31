import React from "react";
import { Link } from "react-router-dom";
// import # from "../components/#";
// import { useQuery } from "@apollo/client";
// import { QUERY_PROFILES } from "../utils/queries";
// import CharacterCards from "../components/characterCards/CharacterCards";
import DojoImg from "../images/dojo.jpg";

const Storypage = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
      <div className="storyContainer">
        <div className="storyImgContainer">
          <img src={DojoImg} alt="dojo background pic" className="dojo-pic" />
        </div>
        <div className="storyDescContainer">
          <p className="storyDescP">
          Recently, an ancient curse washed over the land and stole the light of Frodo... as the last remaining member of the Kai Clan, it's your sworn duty to destroy this curse and bring peace to the land.  15 dojos exist in Jungtown and their masters have been transformed into coding phantoms. Defeat these phantoms using your coding arts and bring the light of Frodo back to Jungtown!  
          </p>
          <div className="storyNext">
            <Link to="/game">
            <button className="storyNextBtn">Next</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Storypage;

// Add link to the map page to begin game
