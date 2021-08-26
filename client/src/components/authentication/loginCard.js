import React from "react";
import { Link } from "react-router-dom";
// import Login from "../components/authentication/login";
// import Signup from "../components/authentication/signup";

const LoginCard = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
      <div className="loginContainer">
        <div className="loginCard max-h-screen relative  bg-white shadow-lg w-60 flex items-center  flex-col">
          <div className="flex items-center flex-col justify-center">
            <form action="#" className="w-full md:w-1/2  p-6 loginForm">
              <h2 className="text-2xl pb-3 font-semibold loginTitle">LOGIN</h2>
              <div className="usernameDiv">
                <label className="usernameLoginLabel">
                  Username:
                  <input
                    type="text"
                    className=" usernameLoginInput"
                    placeholder="Sam"
                  />
                </label>
              </div>
              <div className="passwordDiv">
                <label className="passwordLoginLabel">
                  Password:
                  <input
                    type="text"
                    className="passwordLoginInput"
                    placeholder="password"
                  />
                </label>
              </div>
              <div className="w-full pt-3 submitBtnDiv">
                <button
                  type="submit"
                  className="w-full px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:text-white text-xl cursor-pointer submitLoginBtn"
                >
                  Submit
                </button>
              </div>
              <Link to="/signup">
                <div className="signupInstead">Sign up today!</div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginCard;
