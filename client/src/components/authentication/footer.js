import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
      <div className="footerContainer">
        <div className="copyright">&copy; Coding Kai 2021</div>
        <div className="meetTeam">
          <Link to="/meet">
            <button className="meetTeamBtn">Meet our team!</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
