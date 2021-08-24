import React from "react";
// import Stats from "./stats";
import { v4 as uuidv4 } from "uuid";
import TestEnemyImg from "../../images/test-enemy.jpg";

const enemy =
  //update with get request data from mongo db
  {
    id: uuidv4(),
    name: "Test Enemy",
    img: TestEnemyImg,
    HP: 8,
    attack: 3,
    experience: 2,
    level: 4,
  };

const EnemyFight = () => {
  return (
    <>
      <div className="enemyFight">
        <p className="enemyFightName">{enemy.name}</p>
        <div className="enemyFightImgDiv">
          <img src={enemy.img} className="enemyFightImg" />
        </div>
        <div className="enemyHealthBar">health bar goes here</div>
      </div>
    </>
  );
};

export default EnemyFight;
