import React from "react";
import { Link } from "react-router-dom";
import LoginCard from "../components/authentication/loginCard";
import Footer from "../components/authentication/footer";
import Header from "../components/authentication/header";

const LoginPage = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
      <div className="loginPageContainer">
        <Header />
        <LoginCard />
        <Footer />
      </div>
    </>
  );
};

export default LoginPage;

//DO WE WANT A SELECT CHARACTER PAGE (so when they click start new game, it takes them to select character page)?? Or just randomly assign them a character??
// I think they should get m2.png a their character. 
