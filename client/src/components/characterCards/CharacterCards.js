import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TestImg from "../../images/test-character.png";
import axios from "axios";

let characters2 = [
  //update with get request data from mongo db
  {
    id: uuidv4(),
    name: "Test Character",
    img: TestImg,
    HP: 10,
    attack: 1,
    experience: 5,
    level: 2,
  },
  {
    id: uuidv4(),
    name: "Test Character",
    img: TestImg,
    HP: 10,
    attack: 1,
    experience: 5,
    level: 2,
  },
  {
    id: uuidv4(),
    name: "Test Character",
    img: TestImg,
    HP: 10,
    attack: 1,
    experience: 5,
    level: 2,
  },
];

const CharacterCards = () => {
  // characterHandler();
  // console.log("*", characters);
  console.log("&", characters2);
  const [GetCharacters, setGetCharacters] = useState([]);
  console.log("still working");
  // characters = []; ***empty page if uncomment. then delete again and it correctly loads data. otherwise it wont load data  ask saturday!!!!!
  useEffect(() => {
    console.log("use effect ran");
    let userid = "6129c2b91d62435f3c4a3c07"; //need to dynamically update this based on logged in user ***
    axios.get(`/api/character/user/${userid}`).then((response) => {
      console.log("1", response.data);
      const test = response.data;
      setGetCharacters(test);
      console.log("2", test);
      console.log("22", GetCharacters);
    });
  }, []);
  // characters = JSON.stringify(characters);

  // const characters2 = props.characters;
  // console.log("###", characters2);
  // return (
  //   <div className="test">
  //     <h1>test</h1>
  //     {console.log(`^^^^${GetCharacters}`)}
  //   </div>
  // );
  return GetCharacters.map((character) => (
    <>
      <div
        className="characterCard max-h-screen relative  bg-white shadow-lg w-60 border-2 border-gray-500 flex items-center  flex-col"
        key={character.id}
      >
        {/* <div className="absolute -top-10">
            <img
              className=" h-24 w-24 rounded-full object-cover characterImg"
              src={character.img}
              alt="character pic"
            />
          </div> */}
        <div className="mt-16 flex items-center flex-col justify-center">
          <h1 className="font-bold text-2xl mt-4 characterName ">
            {character.name}
          </h1>
          <p className="font-semibold text-xl text-gray-500 characterHP">
            HP: {character.hitPoints}
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
        <div>
          <button value={character._id} className="resumeGame">
            Resume Game
          </button>
          <button className="deleteGame">Delete Game</button>
        </div>
      </div>
    </>
  ));
};

//on click (resume game), needs to store the character._id so we can access it to send put requests to update score. maybe store in local storage??
//on click (delete game), needs to send axios delete to an API delete route that will delete the character

export default CharacterCards;
