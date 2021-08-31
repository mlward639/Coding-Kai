import React from "react";
import { Link } from "react-router-dom";
// import Login from "../components/authentication/login";
// import Signup from "../components/authentication/signup";

const SignupCard = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
      <div className="signupContainer">
        <div className="signupCard max-h-screen relative  bg-white shadow-lg w-60 border-2 border-gray-500 flex items-center  flex-col">
          <div className="flex items-center flex-col justify-center">
            <form action="#" className="w-full md:w-1/2  p-6 signupForm">
              <h2 className="text-2xl pb-3 font-semibold signupTitle">
                SIGNUP
              </h2>
              <div className="usernameDiv">
                <label className="usernameSignupLabel">
                  Username:
                  <input
                    type="text"
                    className=" usernameSignupInput"
                    placeholder="Sam"
                  />
                </label>
              </div>
              <div className="emailDiv">
                <label className="emailSignupLabel">
                  Email:
                  <input
                    type="text"
                    className="emailSignupInput"
                    placeholder="sam-the-coder@gmail.com"
                  />
                </label>
              </div>
              <div className="passwordDiv">
                <label className="passwordSignupLabel">
                  Password:
                  <input
                    type="password"
                    className="passwordSignupInput"
                    placeholder="password"
                  />
                </label>
              </div>
              <div className="confirmDiv">
                <label className="confirmSignupLabel">
                  Confirm:
                  <input
                    type="password"
                    className="confirmSignupInput"
                    placeholder="password"
                  />
                </label>
              </div>
              <div className="w-full pt-3 submitBtnDiv">
                <Link to="/">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:text-white text-xl cursor-pointer submitSignupBtn"
                  >
                    Submit
                  </button>
                </Link>
              </div>
              <Link to="/login">
                <div className="loginInstead">
                  Already have an account? Login here...
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupCard;
