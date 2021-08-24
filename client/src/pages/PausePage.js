import React from "react";
import { Link } from "react-router-dom";
// import { useQuery } from "@apollo/client";
// import { QUERY_PROFILES } from "../utils/queries";
import StatsCards from "../components/stats/statsCards";

const PausePage = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
      <div className="pausePageDiv">
        <h1>Game is paused...</h1>
        <div className="StatsSection">
          <StatsCards />
        </div>
        <div className="pauseBtnsDiv">
          <button>Resume Game</button>
          <Link to="/quit">
            <button>Save & Quit Game</button>
          </Link>
          <Link to="/quit">
            <button>Quit Game</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PausePage;

//add link to ResumeGame BTN to return to map.
//add functionality to save score if they choose save and quit or delete ??local storage?? with current score if they click quit game
