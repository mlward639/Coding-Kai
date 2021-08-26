import React from "react";

const QuestionFight = () => {
  return (
    <>
      <form action="#" className="w-full md:w-1/2 border p-6 questionForm">
        <h2 className="text-2xl pb-3 font-semibold">
          Attack your enemy by answering correctly
        </h2>
        <p className="question">API question here</p>
        <div>
          <div className="flex flex-col mb-3 answerChoices">
            <div className="answerDiv">
              <label className="checkboxLabel">
                Pull in Answer A from API
                <input
                  type="checkbox"
                  className=" checkbox answerA"
                  value="A"
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="answerDiv">
              <label className="checkboxLabel">
                Pull in Answer B from API
                <input type="checkbox" className="checkbox answerB" value="B" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="answerDiv">
              <label className="checkboxLabel">
                Pull in Answer C from API
                <input type="checkbox" className="checkbox answerC" value="C" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="answerDiv">
              <label className="checkboxLabel">
                Pull in Answer D from API
                <input type="checkbox" className="checkbox answerD" value="D" />
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
