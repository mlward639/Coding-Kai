import React, { useEffect, useState } from "react";
import axios from "axios";
// import QuestionModalCorrect from "./modalCorrect";
import { Redirect, useHistory } from "react-router-dom";

// let questionData;
//TEMPORARY QUESTION TO ALLOW CREATING THE CORRECT OR WRONG FUNCTION

const optA = document.querySelector(".radioLabelA");
const optB = document.querySelector(".answerB");
const optC = document.querySelector(".answerC");
const optD = document.querySelector(".answerD");
const optE = document.querySelector(".answerE");
const optF = document.querySelector(".answerF");
let answerChosen = "";

const radios = document.getElementsByName("radioBtn");

const fakeQuestion = {
  id: 1,
  question: "There are ____ different heading tags in HTML",
  description: null,
  answers: {
    answer_a: "4",
    answer_b: "7",
    answer_c: "6",
    answer_d: "5",
    answer_e: null,
    answer_f: null,
  },
  multiple_correct_answers: "false",
  correct_answers: {
    answer_a_correct: "false",
    answer_b_correct: "false",
    answer_c_correct: "true",
    answer_d_correct: "false",
    answer_e_correct: "false",
    answer_f_correct: "false",
  },
  correct_answer: "answer_a",
  explanation: null,
  tip: null,
  tags: [{ name: "HTML" }],
  category: "Code",
  difficulty: "Easy",
};

const QuestionFight = () => {
  let history = useHistory();

  const [currentQuestion, setCurrentQuestion] = useState([]); //maybe try setting useState to [] ***********
  const [answers, setAnswers] = useState("");
  // need to set the correct_answer from axios call to correct answer*******************
  const [correctAnswer, setCorrectAnswer] = useState("");

  // console.log("tttt", currentQuestion);
  const randomNumber = Math.floor(Math.random() * 56); //change 57 to seeds array.length
  // console.log(randomNumber);
  // let id = randomNumber;
  // console.log(id);

  useEffect(async () => {
    console.log("Heyyyyy");
    let id = randomNumber;
    // console.log("&&&&&&", id);
    //setCurrentQuestion(""); //WHY DOING THIS HERE??? *******************
    // **** CHANGE SO INDEX CANT BE 0
    const res = await axios.get(`/api/question/${id}`);
    console.log("res1", res.data);
    console.log("res2", res.data.answers);

    console.log("res3", res.data.answers.answer_a);
    setCurrentQuestion(res.data);
    setAnswers(res.data.answers);
    setCorrectAnswer(res.data.correct_answer);
    // .then((response) => {
    //   console.log("1", response.data);
    //   setCurrentQuestion(response.data);
    //   // console.log("tryagain", currentQuestion);
    //   // const tryThis = currentQuestion.answers;
    //   // console.log("%%%", tryThis);
    //   // const tryThat = tryThis.answer_a;
    //   // console.log('"""', tryThat);

    //   // setCorrectAnswer(response.data.correct_answer);
    //   // console.log("correctanswer222", correctAnswer);
    // });
    // console.log("correctanswer", correctAnswer);

    // .then(console.log("$$$$$$", setCurrentQuestion));
  }, []);
  console.log("------", currentQuestion.answer_a);
  console.log("correct answer", correctAnswer);
  // console.log("tryagain", currentQuestion.answer.answer_a);

  // console.log(currentQuestion, "tttt");
  // console.log(currentQuestion.difficulty, "789");
  // console.log("correctanswer", correctAnswer);

  // const currentAnswers = currentQuestion.answers;
  // console.log(currentAnswers.answer_a, "lllll");
  // console.log("$$$$$$$$", currentQuestion);
  // console.log("^^^^", currentQuestion.answers.answer_a);
  // console.log("here", optA.type);
  function getChosenAnswer() {
    console.log("fucker");

    for (let i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        console.log("888888", radios[i].value);
        return (answerChosen = radios[i].value);
      }
    }
  }

  function checkingAnswers() {
    CompareAnswers();
  }

  //trying to conditionally render these components based on state ******
  const GotAnswerRight = async () => {
    // const [rightAnswer, setRightAnswer] = useState(false);
    // setRightAnswer(true); // do i need to set state back to false at the end?? dont think so bc on page load, it should set to false bc of above
    let _id = JSON.parse(localStorage.getItem("character_id"));
    const res = await axios
      .put(`/api/character/${_id}`, {
        changeExperience: 10, //+ VALUE OF ENEMY.ATTACK. NEED FUNCTION ON BACK END ADDING THIS VALUE TO THE CURRENT VALUE
      })
      .then((response) => {
        console.log(response.data);
      });
    // const res2 = await axios
    //   .put("NEED ENEMY PUT ROUTE", {
    //     changeHitPoints: -10, // - character.attack, then needs backend functionality to update
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   });
    console.log("pre link");
    history.push("/correct");
    // return <Redirect to="/correct"></Redirect>;
  };

  const GotAnswerWrong = async () => {
    // const [wrongAnswer, setWrongAnswer] = useState(false);
    // setWrongAnswer(true);
    let _id = JSON.parse(localStorage.getItem("character_id"));

    const res = await axios
      .put(`/api/character/${_id}`, {
        changeHitPoints: -10, //- VALUE OF ENEMY.ATTACK. NEED FUNCTION ON BACK END ADDING THIS VALUE TO THE CURRENT VALUE
      })
      .then((response) => {
        console.log(response.data);
      });
    // const res2 = await axios
    //   .put("NEED ENEMY PUT ROUTE", {
    //     attack: 10, // + character.attack, then needs backend functionality to update
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   });
    console.log("pre link");
    history.push("/wrong");

    // return <Redirect to="/wrong"></Redirect>;
  };

  const CompareAnswers = () => {
    getChosenAnswer();
    if (answerChosen === correctAnswer) {
      console.log("chose right answer");
      GotAnswerRight();
    } else {
      console.log("chose wrong answer");
      GotAnswerWrong();
    }
  };
  return (
    <>
      <form action="#" className="w-full md:w-1/2 border p-6 questionForm">
        <h2 className="text-2xl pb-3 font-semibold">
          Attack your enemy by answering correctly
        </h2>
        <p className="question">{currentQuestion.question}</p>
        <div>
          <div className="flex flex-col mb-3 answerChoices">
            <div className="answerDiv">
              <label className="radioLabel radioLabelA">
                <input
                  type="radio"
                  name="radioBtn"
                  className="radio answerA"
                  value="answer_a"
                />
                {answers.answer_a}
              </label>
            </div>
            <div className="answerDiv">
              <label className="radioLabel">
                <input
                  type="radio"
                  className="radio answerB"
                  value="answer_b"
                  name="radioBtn"
                />
                {answers.answer_b}
              </label>
            </div>
            <div className="answerDiv">
              <label className="radioLabel">
                <input
                  type="radio"
                  className="radio answerC"
                  value="answer_c"
                  name="radioBtn"
                />
                {answers.answer_c}
              </label>
            </div>
            <div className="answerDiv">
              <label className="radioLabel">
                <input
                  type="radio"
                  className="radio answerD"
                  value="answer_d"
                  name="radioBtn"
                />
                {answers.answer_d}
              </label>
            </div>
            {/* <div className="answerDiv">
              <label className="radioLabel">
                {fakeQuestion.answers.answer_e}
                <input
                  type="radio"
                  className="radio answere"
                  value="answer_e"
                />
              </label>
            </div>
            <div className="answerDiv">
              <label className="radioLabel">
                {fakeQuestion.answers.answer_f}
                <input
                  type="radio"
                  className="radio answerf"
                  value="answer_b"
                />
              </label>
            </div> */}
          </div>
          <div className="w-full pt-3 submitBtnDiv">
            <button
              type="submit"
              className="w-full px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:text-white text-xl cursor-pointer submitBtn"
              onClick={checkingAnswers}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default QuestionFight;

//and it looks like its running through twice... getting two console logs for random number and $$$$
// if right, subtract hp from enemy by characters attack... if enemy reaches 0, give experience points to character. orrr just add experience points to the character (maybe based on enemy's attack number).
// if wrong, subtract enemy attack points from character.
