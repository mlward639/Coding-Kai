import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faTrophy} />;

const QuestionModalCorrect = () => {
  return (
    <>
      <div
        className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="modal-id"
      >
        <div className="absolute opacity-90 inset-0 z-0 modalBehindBackground"></div>
        <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  modalBackground ">
          <div className="">
            <div className="text-center p-5 flex-auto justify-center">
              <h1 className="icon">{element}</h1>
              <h2 className="text-xl font-bold py-4 modalTitle">
                Congratulations!
              </h2>
              <p className="text-sm px-8 modalP">
                You have won this battle. As a reward, you've earned+ experience
                points!
              </p>
            </div>
            <div className="p-3  mt-2 text-center space-x-4 md:block">
              <Link to="/game">
                <button className="mb-2 md:mb-0 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg congratsReturnBtn">
                  Return to the Game
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionModalCorrect;

//do something with set state. if its a match, set state to true and display correct answer and send a post request to decrease enemy's points??. otherwise, set to !true and display wrong answer and send post request to decrease characters points
