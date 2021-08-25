import React from "react";
// import Stats from "./stats";
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

const CharacterFight = () => {
  return (
    <>
      <div className="characterFight">
        <p className="characterFightName">{character.name}</p>
        <div className="characterFightImgDiv">
          <img src={character.img} className="characterFightImg" />
        </div>
        <div className="healthBar">health bar goes here</div>
      </div>
    </>
  );
};

export default CharacterFight;
