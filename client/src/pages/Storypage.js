import React from "react";
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
            Story will go here. Placeholder... Placeholder... Placeholder...
            Placeholder... Placeholder... Placeholder... Placeholder...
            Placeholder... Placeholder... Placeholder... Placeholder...
            Placeholder... Placeholder... Placeholder...
          </p>
          <div className="storyNext">
            <button className="storyNextBtn">Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Storypage;

// Add link to the map page to begin game
