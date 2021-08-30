import React, { useEffect, useState } from "react";
import axios from "axios";

// import Stats from "./stats";
import { v4 as uuidv4 } from "uuid";
import TestImg from "../../images/test-character.png";

// const character =
//   //update with get request data from mongo db
//   {
//     id: uuidv4(),
//     name: "Test Character",
//     img: TestImg,
//     HP: 10,
//     attack: 1,
//     experience: 5,
//     level: 2,
//   };

const CharacterFight = () => {
  const [currentCharacter, setCurrentCharacter] = useState("");
  let _id = JSON.parse(localStorage.getItem("character_id"));
  useEffect(() => {
    axios.get(`/api/character/${_id}`).then((response) => {
      console.log("1111111", response.data);
      setCurrentCharacter(response.data);
      console.log("222222", currentCharacter.name);
    });
    // .then(console.log("$$$$$$", setCurrentQuestion));
  }, []);
  return (
    <>
      <div className="characterFight">
        <p className="characterFightName">{currentCharacter.name}</p>
        <div className="characterFightImgDiv">
          <img src={TestImg} className="characterFightImg" />
        </div>
        {/*UPDATE IMAGE BASED ON CHARACTER... think id need to store a url for each character in the db. then can pull the url here to get pic. *** !!! }
        {/* <div className="healthBar">health bar goes here</div>
      </div> CREATE IF TIME *** !!!! */}
        <div className="characterStats">
          <div className="characterHP">HP: {currentCharacter.hitPoints}</div>
          <div className="characterAttack">
            Attack: {currentCharacter.attack}
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterFight;
