import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TestImg from "../images/test-character.png";

import StatsCards from "../components/stats/statsCards";
import Footer from "../components/authentication/footer";

const removeCharacterLocalStorage = () => {
  localStorage.removeItem("character_id");
  localStorage.removeItem("coordX");
  localStorage.removeItem("coordY");
};

const QuitPage = () => {
  const [currentCharacter, setCurrentCharacter] = useState("");
  let _id = JSON.parse(localStorage.getItem("character_id"));
  useEffect(() => {
    axios.get(`/api/character/${_id}`).then((response) => {
      console.log("***", response.data);
      setCurrentCharacter(response.data);
    });
    // .then(console.log("$$$$$$", setCurrentQuestion));
  }, []);
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];
  return (
    <>
      <div className="QuitGameDiv">
        <h1 className="quitPageTitle">Thanks for playing!</h1>
        <h2 className="quitPageSubtitle">Your final score:</h2>
        <div className="quitScores">
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
        </div>
        <div className="startNewGameDiv">
          <Link to="/">
            <button
              className="startNewGame"
              onClick={removeCharacterLocalStorage}
            >
              Go back to homepage
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default QuitPage;
