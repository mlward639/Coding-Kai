import React, { useEffect, useState } from "react";
import axios from "axios";

// import Stats from "./stats";
// import { v4 as uuidv4 } from "uuid";
import TestEnemyImg from "../../images/test-enemy.png";

// const enemy =
//   //update with get request data from mongo db
//   {
//     id: uuidv4(),
//     name: "Test Enemy",
//     img: TestEnemyImg,
//     HP: 8,
//     attack: 3,
//     experience: 2,
//     level: 4,
//   };

let index;
const EnemyFight = () => {
  //i think i need to put this function in the fight page and then pass the enemy name to this page through props *** !!!
  const [currentEnemies, setCurrentEnemies] = useState("");
  const [currentEnemy, setCurrentEnemy] = useState("");
  useEffect(() => {
    // //trying to get the array length of enemies so it can dynamically update based on number of enemies in db. same thing could be done for questions db. come back if time *** !!!
    // axios.get("/api/enemy").then((response) => {
    //   console.log("enemies resp.data", response.data);
    //   setCurrentEnemies(response.data);
    //   const randomNumber = Math.floor(Math.random() * currentEnemies.length);
    //   index = randomNumber;
    //   console.log("&&&&&&currentenemies[index", currentEnemies[index]);
    //   let id = currentEnemies[index]._id;
    //   console.log("&&&&&&id", id);
    // });
    // //this gives an array of objects. when i try to access data from the array by doing currentEnemy[0].name, it returns undefined.... ***
    // axios.get(`/api/enemy/${id}`).then((response) => {
    //   console.log("enemies resp.data", response.data);
    //   setCurrentEnemy(response.data);
    //   console.log("######currentEnemy", currentEnemy);
    // });
    const randomNumber = Math.floor(Math.random() * 16); // ***!!! 2 is current number of enemies
    let id = randomNumber;
    console.log("id", id);
    axios.get(`/api/enemy/${id}`).then((response) => {
      console.log("enemies resp.data", response.data);
      setCurrentEnemy(response.data);
      console.log("######currentEnemy", currentEnemy.name);
    });
  }, []);
  return (
    <>
      <div className="enemyFight">
        <p className="enemyFightName">{currentEnemy.name}</p>
        <div className="enemyFightImgDiv">
          <img src={TestEnemyImg} className="enemyFightImg" />
        </div>
        {/* <div className="enemyHealthBar">health bar goes here</div> CREATE IF TIME *** !!!! */}
        <div className="enemyStats">
          <div className="enemyHP">HP: {currentEnemy.hitPoints}</div>
          <div className="enemyAttack">Attack: {currentEnemy.attack}</div>
        </div>
      </div>
    </>
  );
};

export default EnemyFight;
