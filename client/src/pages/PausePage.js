import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StatsCards from "../components/stats/statsCards";

async function deleteGame() {
  console.log("deleting game");
  let _id = JSON.parse(localStorage.getItem("character_id"));
  await axios.delete("/DELETE ROUTE PENDING/_id");
  console.log("deleted game");
} //TEST ONCE HAVE ROUTE

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
          <Link to="/game">
            <button>Resume Game</button>
          </Link>
          <Link to="/quit">
            <button>Save & Quit Game</button>
          </Link>
          <Link to="/quit">
            <button onClick={deleteGame}>Quit Game</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PausePage;

//add link to ResumeGame BTN to return to map.
//add functionality to save score if they choose save and quit or delete ??local storage?? with current score if they click quit game
