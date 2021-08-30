// import React from "react";
// import { Link } from "react-router-dom";
// import Login from "../components/authentication/login";
// import Signup from "../components/authentication/signup";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutation';
import Auth from "../../utils/auth";

const SignupCard = () => {
  // // const { loading, data } = useQuery(QUERY_PROFILES);
  // // const profiles = data?.profiles || [];
  // // set initial form state
  // const [userFormData, setUserFormData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  // });
  // // set state for form validation
  // const [validated] = useState(false);
  // // set state for alert
  // const [showAlert, setShowAlert] = useState(false);

  // const [addUser, { error }] = useMutation(ADD_USER);

  // useEffect(() => {
  //   if (error) {
  //     setShowAlert(true);
  //   } else {
  //     setShowAlert(false);
  //   }
  // }, [error]);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUserFormData({ ...userFormData, [name]: value });
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   // check if form has everything (as per react-bootstrap docs)
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }

  //   try {
  //     const { data } = await addUser({
  //       variables: { ...userFormData },
  //     });
  //     console.log(data);
  //     Auth.login(data.addUser.token);
  //   } catch (err) {
  //     console.error(err);
  //   }

  //   setUserFormData({
  //     username: '',
  //     email: '',
  //     password: '',
  //   });
  // };

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
                    type="text"
                    className="passwordSignupInput"
                    placeholder="password"
                  />
                </label>
              </div>
              <div className="confirmDiv">
                <label className="confirmSignupLabel">
                  Confirm:
                  <input
                    type="text"
                    className="confirmSignupInput"
                    placeholder="password"
                  />
                </label>
              </div>
              <div className="w-full pt-3 submitBtnDiv">
                <button
                  type="submit"
                  className="w-full px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:text-white text-xl cursor-pointer submitSignupBtn"
                >
                  Submit
                </button>
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



// ========================================

// return (
//   <>
//     {/* This is needed for the validation functionality above */}
//     <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
//       {/* show alert if server response is bad */}
//       <Alert
//         dismissible
//         onClose={() => setShowAlert(false)}
//         show={showAlert}
//         variant="danger"
//       >
//         Something went wrong with your signup!
//       </Alert>

//       <Form.Group>
//         <Form.Label htmlFor="username">Username</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Your username"
//           name="username"
//           onChange={handleInputChange}
//           value={userFormData.username}
//           required
//         />
//         <Form.Control.Feedback type="invalid">
//           Username is required!
//         </Form.Control.Feedback>
//       </Form.Group>

//       {/* <Form.Group>
//         <Form.Label htmlFor="email">Email</Form.Label>
//         <Form.Control
//           type="email"
//           placeholder="Your email address"
//           name="email"
//           onChange={handleInputChange}
//           value={userFormData.email}
//           required
//         />
//         <Form.Control.Feedback type="invalid">
//           Email is required!
//         </Form.Control.Feedback>
//       </Form.Group> */}

//       <Form.Group>
//         <Form.Label htmlFor="password">Password</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Your password"
//           name="password"
//           onChange={handleInputChange}
//           value={userFormData.password}
//           required
//         />
//         <Form.Control.Feedback type="invalid">
//           Password is required!
//         </Form.Control.Feedback>
//       </Form.Group>
//       <Button
//         disabled={
//           !(
//             userFormData.username &&
//             // userFormData.email &&
//             userFormData.password
//           )
//         }
//         type="submit"
//         variant="success"
//       >
//         Submit
//       </Button>
//     </Form>
//   </>
// );
// };

// export default SignupCard; 

