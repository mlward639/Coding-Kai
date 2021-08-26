import React from "react";
// import # from "../components/#";
// import { useQuery } from "@apollo/client";
// import { QUERY_PROFILES } from "../utils/queries";
// import CharacterCards from "../components/characterCards/CharacterCards";
import CharacterFight from "../components/fight/character";
import EnemyFight from "../components/fight/enemy";
import QuestionFight from "../components/fight/question";
import QuestionModalCorrect from "../components/fight/modalCorrect";
import QuestionModalIncorrect from "../components/fight/modalWrong";

const FightPage = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
      <div className="fightPageContainer">
        <h1>FIGHT</h1>
        <div className="fightDiv2">
          <CharacterFight />
          <QuestionFight />
          <EnemyFight />
        </div>
        <div className="questionModalDiv">
          {/* <QuestionModalCorrect /> */}
          {/* <QuestionModalIncorrect /> */}
        </div>
      </div>
    </>
  );
};

//Set question modal to come up on clicking submit on questionFight component

export default FightPage;
