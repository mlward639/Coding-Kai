import React, { useEffect, useState } from "react";
import axios from "axios";

const Stats2 = () => {
  const [currentCharacter, setCurrentCharacter] = useState("");
  let _id = JSON.parse(localStorage.getItem("character_id"));
  useEffect(() => {
    axios.get(`/api/character/${_id}`).then((response) => {
      // console.log("***", response.data);
      setCurrentCharacter(response.data);
    });
    // .then(console.log("$$$$$$", setCurrentQuestion));
  }, []);
  // console.log("###", currentCharacter);

  return (
    <>
      <div
        className="statsCard2 relative shadow-lg w-60 border-2 border-gray-500 flex items-center  flex-col"
        key={currentCharacter.id}
        
      >
        <div className="flex items-center flex-col justify-center" >
          <h1 className="font-bold text-2xl mt-4 characterName characterName3" >
            {currentCharacter.name}
          </h1>
          <p className="font-semibold text-xl text-gray-500 characterHP3" >
            HP: {currentCharacter.hitPoints}
          </p>
          <p className="font-semibold text-xl text-gray-500 characterAttack3" >
            Attack: {currentCharacter.attack}
          </p>
          <p className="font-semibold text-xl text-gray-500 characterExperience3" >
            Experience: {currentCharacter.experience}
          </p>
          <p className="font-semibold text-xl text-gray-500 characterLevel3" >
            Level: {currentCharacter.level}
          </p>
        </div>
      </div>
    </>
  );
};

export default Stats2;
