import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import TestImg from "../../images/test-character.png";

const character =
  //update with get request data from mongo db
  {
    id: uuidv4(),
    name: "Test Character",
    img: TestImg,
    hitPoints: 10,
    attack: 1,
    experience: 5,
    level: 2,
  };

const Stats = () => {
  const [currentCharacter, setCurrentCharacter] = useState("");
  let _id = JSON.parse(localStorage.getItem("character_id"));
  useEffect(() => {
    axios.get(`/api/character/${_id}`).then((response) => {
      console.log("***", response.data);
      setCurrentCharacter(response.data);
    });
    // .then(console.log("$$$$$$", setCurrentQuestion));
  }, []);
  console.log("###", currentCharacter);

  return (
    <>
      <div
        className="absolute -top-10 characterImgPauseDiv"
        key={currentCharacter.id}
      >
        <img
          className=" h-24 w-24 rounded-full object-cover characterImg characterImgPause"
          src={TestImg}
          alt="character pic"
        />
      </div>
      <div className="mt-16 flex items-center flex-col justify-center">
        <h1 className="font-bold text-2xl mt-4 characterName characterName2">
          {currentCharacter.name}
        </h1>
        <p className="font-semibold text-xl text-gray-500 characterHP">
          HP: {currentCharacter.hitPoints}
        </p>
        <p className="font-semibold text-xl text-gray-500 characterAttack">
          Attack: {currentCharacter.attack}
        </p>
        <p className="font-semibold text-xl text-gray-500 characterExperience">
          Experience: {currentCharacter.experience}
        </p>
        <p className="font-semibold text-xl text-gray-500 characterLevel">
          Level: {currentCharacter.level}
        </p>
      </div>
    </>
  );
};

export default Stats;
