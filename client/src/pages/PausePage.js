import React from "react";
// import # from "../components/#";
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
          <button>Save & Quit Game</button>
          <button>Quit Game</button>
        </div>
      </div>
    </>
  );
};

export default PausePage;
