import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TestImg from "../images/test-character.png";
import StatsCards from "../components/Canvas/stats";

const NewUser = () => {
  const characterNameArray = [
    "Chen Zhen",
    "Zatoichi",
    "Daigoro",
    "Rama",
    "Mad Dog",
    "Bone",
    "Kato",
    "Tsurugi",
    "Blade",
    "Pai Mei",
    "Mr Miyagi",
    "Azumi",
    "Bruce Leroy",
    "Ryu",
    "Po",
    "Raphael",
    "Kenshiro",
    "Scorpion",
    "Naruto",
  ];
  let randomNumber = Math.floor(Math.random() * characterNameArray.length);
  const createNewCharacter = () => {
    let index = randomNumber;
    const newCharacter = {
      user_id: ["6129095c379a40808472a82a"],
      name: characterNameArray[index],
      hitPoints: 5,
      attack: 5,
      experience: 0,
      level: 1,
    };
    axios
      .post("/api/character", newCharacter)
      .then((response) => console.log(response.data));
    let newCharacterUserId = newCharacter.user_id[0];
    // localStorage.setItem("character_id", JSON.stringify(resumeGameBtnValue));
    console.log(newCharacter);
    let newCharacterName = newCharacter.name;
    console.log(newCharacterName);
    axios.get(`/api/character/name/${newCharacterName}`).then((response) => {
      console.log("test", response.data);
      let gotNewCharacter = response.data;
      let gotNewCharacterId = gotNewCharacter._id;
      console.log("$$$", gotNewCharacterId);
      localStorage.setItem("character_id", JSON.stringify(gotNewCharacterId));
    });
  };
  createNewCharacter();
  const [currentCharacter, setCurrentCharacter] = useState("");
  let _id = JSON.parse(localStorage.getItem("character_id"));
  useEffect(() => {
    axios.get(`/api/character/${_id}`).then((response) => {
      console.log("***", response.data);
      setCurrentCharacter(response.data);
    });
    // .then(console.log("$$$$$$", setCurrentQuestion));
  }, []);
  // console.log("###", currentCharacter);

  return (
    <>
      <div
        className="statsCard3 max-h-screen relative  bg-white shadow-lg w-60 border-2 border-gray-500 flex items-center  flex-col"
        key={currentCharacter.id}
      >
        <div
          className="absolute -top-10 characterImgPauseDiv"
          key={currentCharacter.id}
        >
          <img
            className=" h-24 w-24 rounded-full object-cover newCharacterImg characterImg"
            src={TestImg}
            alt="character pic"
          />
        </div>
        <div className="flex items-center flex-col justify-center newUserStats">
          <h1 className="font-bold text-2xl mt-4 characterName characterName4">
            Meet {currentCharacter.name}!
          </h1>
          <p className="font-semibold text-xl text-gray-500 characterHP4">
            HP: {currentCharacter.hitPoints}
          </p>
          <p className="font-semibold text-xl text-gray-500 characterAttack4">
            Attack: {currentCharacter.attack}
          </p>
          <p className="font-semibold text-xl text-gray-500 characterExperience4">
            Experience: {currentCharacter.experience}
          </p>
          <p className="font-semibold text-xl text-gray-500 characterLevel4">
            Level: {currentCharacter.level}
          </p>
        </div>
      </div>
      <div className="nextPageContainer">
        <button className="letsPlay">
          <Link to="/story">Let's Play!</Link>
        </button>
      </div>
    </>
  );
  {
    /* <div className="newUserContainer">Test</div>
      <h1 className="welcomeNewUSer">Welcome, {}!</h1>
      <div
        className="characterCard max-h-screen relative  bg-white shadow-lg w-60 border-2 border-gray-500 flex items-center  flex-col"
        key={currentCharacter._id}
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
            {currentCharacter.name}
          </h1>
          <p className="font-semibold text-xl text-gray-500 characterHP2">
            HP: {currentCharacter.hitPoints}
          </p>
          <p className="font-semibold text-xl text-gray-500 characterAttack2">
            Attack: {currentCharacter.attack}
          </p>
          <p className="font-semibold text-xl text-gray-500 characterExperience">
            Experience: {currentCharacter.experience}
          </p>
          <p className="font-semibold text-xl text-gray-500 characterLevel">
            Level: {currentCharacter.level}
          </p>
        </div>
        <div className="nextPageContainer">
          <button className="startNewGame">
            <Link to="/new">Let's Play!</Link>
          </button>
        </div>
      </div> */
  }
};

export default NewUser;
