import React from "react";
import { v4 as uuidv4 } from "uuid";
import TestImg from "../../images/test-character.png";

const character =
  //update with get request data from mongo db
  {
    id: uuidv4(),
    name: "Test Character",
    img: TestImg,
    HP: 10,
    attack: 1,
    experience: 5,
    level: 2,
  };

const Stats = () => {
  return (
    <>
      <div className="absolute -top-10 characterImgPauseDiv" key={character.id}>
        <img
          className=" h-24 w-24 rounded-full object-cover characterImg characterImgPause"
          src={character.img}
          alt="character pic"
        />
      </div>
      <div className="mt-16 flex items-center flex-col justify-center">
        <h1 className="font-bold text-2xl mt-4 characterName characterName2">
          {character.name}
        </h1>
        <p className="font-semibold text-xl text-gray-500 characterHP">
          HP: {character.HP}
        </p>
        <p className="font-semibold text-xl text-gray-500 characterAttack">
          Attack: {character.attack}
        </p>
        <p className="font-semibold text-xl text-gray-500 characterExperience">
          Experience: {character.experience}
        </p>
        <p className="font-semibold text-xl text-gray-500 characterLevel">
          Level: {character.level}
        </p>
      </div>
    </>
  );
};

export default Stats;
