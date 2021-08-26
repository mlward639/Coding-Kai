import React from "react";
import { Link } from "react-router-dom";
// import LoginCard from "../components/authentication/loginCard";
// import Signup from "../components/authentication/signup";

const MeetTeamPage = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
      <div className="MeetTeamPageContainer">TEST</div>
      <div>
        <Link to="/">
          <button className="meetReturnBtn">Return to homepage</button>
        </Link>
      </div>
    </>
  );
};

export default MeetTeamPage;
