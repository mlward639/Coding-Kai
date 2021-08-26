import React from "react";
import { Link } from "react-router-dom";

const StartFight = () => {
  return (
    <>
      <div className="startBtnDiv">
        <Link to="/question">
          <button className="startBtn">Start Fight</button>
        </Link>
      </div>
    </>
  );
};

export default StartFight;
