import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutation';
import Auth from "../../utils/auth";

// import Login from "../components/authentication/login";
// import Signup from "../components/authentication/signup";

// const login = (user) => {
//   //fetch...
//   return fetch("/userLogin", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(user),
//   });
// };

const LoginCard = () => {
  // uncommented 
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];
  const [formState, setFormState] = useState({ username: "", password: "" });
  // uncommented 
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   // UPDATE: 
  //   fetch("/userLogin", {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" }
  //     // body: JSON.stringify(user),
  //   });
  //   console.log(formState);
  //   try {
  //     const res = await login({
  //       variables: { ...formState },
  //     });

  //     Auth.login(data.login.token);
  //   } catch (e) {
  //     console.error(e);
  //   }

  //   // clear form values
  //   setFormState({
  //     username: "",
  //     password: "",
  //   });
  // };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const user = 
      {
        username: this.formState.username, 
        password: this.formState.password
      }
      fetch("/userLogin", {
            method: "PUT",
            headers: { "Content-Type": "application/graphql" },
            body: JSON.stringify(user),
          }).then( (response) => 
          {
            console.log(response); 

          })

    //   const { data } = await login({
    //     variables: { ...formState },
    //   });
    // console.log('DATA',data); 
      // Auth.login(data.login.token);
    } catch (e) {
      console.log('ERROR IN CATCH'); 
      console.error(e);
    }

    // clear form values
    setFormState({
      username: '',
      password: '',
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
                    value={formState.username}
                    onChange={handleChange}
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
                    value={formState.password}
                   onChange={handleChange}
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

// //add error message


//============================================================================
// see SignupForm.js for comments
// import React, { useState, useEffect} from "react";
// import { Form, Button, Alert } from 'react-bootstrap';
// import { Link } from "react-router-dom";
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../../utils/mutation';
// import Auth from "../../utils/auth";

// const LoginCard = () => {
//   const [userFormData, setUserFormData] = useState({ email: '', password: '' });
//   const [validated] = useState(false);
//   const [showAlert, setShowAlert] = useState(false);

//   const [login, { error }] = useMutation(LOGIN_USER);

//   useEffect(() => {
//     if (error) {
//       setShowAlert(true);
//     } else {
//       setShowAlert(false);
//     }
//   }, [error]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserFormData({ ...userFormData, [name]: value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     try {
//       const { data } = await login({
//         variables: { ...userFormData },
//       });

//       console.log(data);
//       Auth.login(data.login.token);
//     } catch (e) {
//       console.error(e);
//     }

//     // clear form values
//     setUserFormData({
//       email: '',
//       password: '',
//     });
//   };

//   return (
//     <>
//       <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
//         <Alert
//           dismissible
//           onClose={() => setShowAlert(false)}
//           show={showAlert}
//           variant="danger"
//         >
//           Something went wrong with your login credentials!
//         </Alert>
//         <Form.Group>
//           <Form.Label htmlFor="email">Email</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Your email"
//             name="email"
//             onChange={handleInputChange}
//             value={userFormData.email}
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             Email is required!
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label htmlFor="password">Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Your password"
//             name="password"
//             onChange={handleInputChange}
//             value={userFormData.password}
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             Password is required!
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Button
//           disabled={!(userFormData.email && userFormData.password)}
//           type="submit"
//           variant="success"
//         >
//           Submit
//         </Button>
//       </Form>
//     </>
//   );
// };

// export default LoginCard;
