import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TestImg from "../../images/test-character.png";
import axios from "axios";
import { Link } from "react-router-dom";

//testing purposes
let characters2 = [
  //update with get request data from mongo db
  {
    id: uuidv4(),
    name: "Test Character",
    img: TestImg,
    hitPoints: 10,
    attack: 1,
    experience: 5,
    level: 2,
  },
  {
    id: uuidv4(),
    name: "Test Character",
    img: TestImg,
    hitPoints: 10,
    attack: 1,
    experience: 5,
    level: 2,
  },
  {
    id: uuidv4(),
    name: "Test Character",
    img: TestImg,
    hitPoints: 10,
    attack: 1,
    experience: 5,
    level: 2,
  },
];

function resumeGame(event) {
  let resumeGameBtn = document.querySelector(".resumeGame");
  resumeGameBtn = event.target;
  const resumeGameBtnValue = resumeGameBtn.value;
  // console.log("hereeee", resumeGameBtnValue);
  localStorage.setItem("character_id", JSON.stringify(resumeGameBtnValue));
}

async function deleteGame(event) {
  let deleteGameBtn = document.querySelector(".deleteGame");
  deleteGameBtn = event.target;
  const deleteGameBtnValue = deleteGameBtn.value;
  console.log("deleting game");
  let _id = deleteGameBtnValue;
  console.log("yyyyy", _id);
  await axios.delete(`/api/character/${_id}`);
  console.log("deleted game");
  document.location.reload();
}

const CharacterCards = () => {
  // console.log("*", characters);
  // console.log("&", characters2);
  const [GetCharacters, setGetCharacters] = useState([]);
  // console.log("still working");
  // characters = []; ***empty page if uncomment. then delete again and it correctly loads data. otherwise it wont load data
  let userid = "";
  useEffect(() => {
    let userid = ""; //need to dynamically update this based on logged in user ***
    // console.log("use effect ran");
    axios.get("/getUsers").then((response) => {
      userid = response.data[0]._id;
      // let userid = "612c8363094d0e5d58d38c93"; //need to dynamically update this based on logged in user ***
      axios.get(`/api/character/user/${userid}`).then((response) => {
        // console.log("1", response.data);
        const test = response.data;
        setGetCharacters(test);
        // console.log("2", test);
        // console.log("22", GetCharacters);
      });
    });
  }, []);

  return GetCharacters.map((character) => (
    <>
      <div
        className="characterCard max-h-screen relative  bg-white shadow-lg w-60 border-2 border-gray-500 flex items-center  flex-col"
        key={character._id}
      >
        <div className="absolute -top-10">
          <img
            className=" h-24 w-24 rounded-full object-cover characterImg"
            src={TestImg}
            alt="character pic"
          />
        </div>
        <div className="mt-16 flex items-center flex-col justify-center">
          <h1 className="font-bold text-2xl mt-4 characterName ">
            {character.name}
          </h1>
          <p className="font-semibold text-xl text-gray-500 characterHP2">
            hitPoints: {character.hitPoints}
          </p>
          <p className="font-semibold text-xl text-gray-500 characterAttack2">
            Attack: {character.attack}
          </p>
          <p className="font-semibold text-xl text-gray-500 characterExperience">
            Experience: {character.experience}
          </p>
          <p className="font-semibold text-xl text-gray-500 characterLevel">
            Level: {character.level}
          </p>
        </div>
        <div>
          <Link to="/story">
            <button
              value={character._id}
              className="resumeGame"
              onClick={resumeGame}
            >
              Resume Game
            </button>
          </Link>

          <Link to="/">
            <button
              className="deleteGame"
              value={character._id}
              onClick={deleteGame}
            >
              Delete Game
            </button>
          </Link>
        </div>
      </div>
    </>
  ));
};

export default CharacterCards;
