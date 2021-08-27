import React, { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

// import Login from "../components/authentication/login";
// import Signup from "../components/authentication/signup";

const login = (user) => {
  //fetch...
  return fetch("/userLogin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
};

const LoginCard = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];
  const [formState, setFormState] = useState({ username: "", password: "" });
  //const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const res = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      username: "",
      password: "",
    });
  };
  return (
    <>
      <div className="loginContainer">
        <div className="loginCard max-h-screen relative  bg-white shadow-lg w-60 flex items-center  flex-col">
          <div className="flex items-center flex-col justify-center">
            <form
              onSubmit={handleFormSubmit}
              action="#"
              className="w-full md:w-1/2  p-6 loginForm"
            >
              <h2 className="text-2xl pb-3 font-semibold loginTitle">LOGIN</h2>
              <div className="usernameDiv">
                <label className="usernameLoginLabel">
                  Username:
                  <input
                    name="username"
                    type="text"
                    className=" usernameLoginInput"
                    placeholder="Sam"
                    // value={formState.username}
                    // onChange={handleChange}
                  />
                </label>
              </div>
              <div className="passwordDiv">
                <label className="passwordLoginLabel">
                  Password:
                  <input
                    name="password"
                    type="password"
                    className="passwordLoginInput"
                    placeholder="********"
                    // value={formState.password}
                    // onChange={handleChange}
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

//add error message
