import React from "react";
import { Link } from "react-router-dom";
import NinjaImg from "../../images/ninja.png";

const Header = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
      <div className="headerContainer">
        <div className="ninjaImgDiv">
          <img className="ninjaImg" src={NinjaImg} alt="ninja pic" />
        </div>
        <div className="headerText">
          <h1 className="headerTitle"> Coding Kai</h1>
          <p className="headerSubtitle">
            Test your coding skills by battling monsters!
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
