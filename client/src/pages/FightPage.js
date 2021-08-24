import React from "react";
// import # from "../components/#";
// import { useQuery } from "@apollo/client";
// import { QUERY_PROFILES } from "../utils/queries";
// import CharacterCards from "../components/characterCards/CharacterCards";
import CharacterFight from "../components/fight/character";
import EnemyFight from "../components/fight/enemy";
import StartFight from "../components/fight/startFight";
import FightImg from "../../src/images/fight-scene.jpg";

const FightPage = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
      <div className="fightPageContainer">
        <h1>FIGHT</h1>
        <div className="fightDiv">
          <CharacterFight />
          <StartFight />
          <EnemyFight />
          <img className="fightBackgroundImg" src={FightImg} />
        </div>
      </div>
    </>
  );
};

export default FightPage;
