import React from "react";
import { v4 as uuidv4 } from "uuid";
import Stats from "./stats";

const StatsCards = () => {
  return (
    <>
      <div className="characterCard statsCard max-h-screen relative  bg-white shadow-lg w-60 border-2 border-gray-500 flex items-center  flex-col">
        <Stats />
      </div>
    </>
  );
};

export default StatsCards;
