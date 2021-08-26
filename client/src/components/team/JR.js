import React from "react";
import JRImg from "../../images/JR.jpg";

const JR = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
      <div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300 JR">
        <img
          src={JRImg}
          alt="JR profile pic"
          className="rounded-t-lg w-full profilePic"
        />
        <div className="p-6">
          <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">
            Jonathon Renaud
          </h1>
          <p className="teamSubtitle">Full Stack Web Developer</p>
          <p className="text-gray-700 my-2 hover-text-900 aboutMe">
            Background in restaurant management and real estate . Recognized as
            proactive, resourceful, and a persistent problem-solver. Excellent
            communicator with effective client relationship-building skills.
            Bachelor's degree in Economics from University of Florida. One of my
            strongest beliefs is to have a diverse amount of knowledge which
            helps understand the needs of other industries and people.
          </p>
          <div className="col-10 col linkContainer">
            <ul className="contact-links-ul">
              <li className="contact-item active">
                <a
                  className="repo"
                  href="https://github.com/roomsiejones"
                  target="_blank"
                >
                  <i className="fab fa-github-square"></i>
                </a>
              </li>
              <li className="contact-item active">
                <a
                  className="nav-link link-color-issue"
                  href="https://www.linkedin.com/in/jonathon-renaud-410910aa/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default JR;
