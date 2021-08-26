import React from "react";
import { Link } from "react-router-dom";
import CB from "../components/team/CB";
import ZK from "../components/team/ZK";
import JR from "../components/team/JR";
import MW from "../components/team/MW";

const MeetTeamPage = () => {
  return (
    <>
      <div class="bg-gray-100 min-h-screen px-10 MeetTeamPageContainer">
        <h1 className="meetTeamTitle">Meet our team...</h1>
        <svg
          width="350"
          height="71"
          viewBox="0 0 350 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg%22%3E"
        >
          <path
            d="M1 68.5203C115.833 28.5203 346 -35.1797 348 30.0203"
            stroke="#0EB4E8"
            stroke-width="4"
          />
        </svg>
        <p>
          We hope you enjoyed our game. We created this game as our final
          project for the Georgia Tech Coding Boot Camp for which we all
          received our Full Stack Developer Certificate from Georgia Tech.
          Curriculum included HTML5, CSS3, JavaScript, jQuery, Progressive Web
          Apps, Agile Methodology, Bootstrap, React.js, Express.js,
          Node.js,MongoDB, MySQL, Command Line, and Git.
        </p>
        <p>
          We enjoyed the challenge of creating this game and utilizing multiple
          different technologies to showcase some of our newly acquired skills.
          We hope you enjoy playing it as much as we enjoyed making it.{" "}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 ">
          <CB />
          <ZK />
          <JR />
          <MW />
        </div>
      </div>
      <div className="meetReturn">
        <button className="meetReturnBtn">Return to homepage</button>
      </div>
    </>
  );
};

export default MeetTeamPage;
