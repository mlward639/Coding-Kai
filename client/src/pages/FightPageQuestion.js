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

// const questionLoadHandler = async (event) => {
//   const response = await fetch("/api/question/", {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   });
//   if (response.ok) {
//     let question = response.json();
//     console.log("!!!!", question);
//   }
//   // else {
//   //   console.log(error);
//   // }
// };

const FightPage = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
      <div className="fightPageContainer">
        {/* <button className="test" onClick={questionLoadHandler}>
          test
        </button> */}
        <h1>FIGHT</h1>
        <div className="fightDiv2">
          <CharacterFight className="characterFightQuestionPage" />
          <QuestionFight />
          <EnemyFight className="enemyFightQuestionPage" />
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
