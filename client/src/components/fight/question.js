import React, { useEffect, useState } from "react";
import axios from "axios";

let questionData;

const QuestionFight = () => {
  const [currentQuestion, setCurrentQuestion] = useState("");
  // console.log("tttt", currentQuestion);
  const randomNumber = Math.floor(Math.random() * 57); //change 57 to seeds array.length
  // console.log(randomNumber);
  // let id = randomNumber;
  // console.log(id);
  useEffect(() => {
    let id = randomNumber;
    console.log("&&&&&&", id);
    axios.get(`/api/question/${id}`).then((response) => {
      console.log("1", response.data);
      setCurrentQuestion(response.data);
      // console.log(questionData.question, "tttt");
      // return questionData;
    });
    // .then(console.log("$$$$$$", setCurrentQuestion));
  }, []);
  console.log("$$$$$$$$", currentQuestion);
  console.log("^^^^", currentQuestion.answers.answer_a);

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
              <label className="checkboxLabel">
                {currentQuestion.answers.answer_a}
                <input
                  type="checkbox"
                  className=" checkbox answerA"
                  value="answer_a"
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="answerDiv">
              <label className="checkboxLabel">
                {currentQuestion.answers.answer_b}
                <input
                  type="checkbox"
                  className="checkbox answerB"
                  value="answer_b"
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="answerDiv">
              <label className="checkboxLabel">
                {currentQuestion.answers.answer_c}
                <input
                  type="checkbox"
                  className="checkbox answerC"
                  value="answer_c"
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="answerDiv">
              <label className="checkboxLabel">
                {currentQuestion.answers.answer_d}
                <input
                  type="checkbox"
                  className="checkbox answerD"
                  value="answer_d"
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="answerDiv">
              <label className="checkboxLabel">
                {currentQuestion.answers.answer_e}
                <input
                  type="checkbox"
                  className="checkbox answere"
                  value="answer_e"
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="answerDiv">
              <label className="checkboxLabel">
                {currentQuestion.answers.answer_f}
                <input
                  type="checkbox"
                  className="checkbox answerf"
                  value="answer_b"
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="w-full pt-3 submitBtnDiv">
            <button
              type="submit"
              className="w-full px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:text-white text-xl cursor-pointer submitBtn"
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

//need to add something to answer choices so if value is null, it does not create a div... could this be a map fxn... idk
