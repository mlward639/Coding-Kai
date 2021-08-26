import React from "react";
import MWImg from "../../images/MW.jpg";

const MW = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
      <div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300 MW">
        <img
          src={MWImg}
          alt="MW profile pic"
          className="rounded-t-lg w-full profilePic"
        />
        <div className="p-6">
          <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">
            Maggie Ward
          </h1>
          <p className="teamSubtitle">Full Stack Web Developer</p>
          <p className="text-gray-700 my-2 hover-text-900 aboutMe">
            Dedicated and hard-working professional making the move to web
            development from the medical field. Strong academic foundation with
            a Master of Medical Science and B.S. Health Sciences. Goal-oriented
            and self-motivated. Proven skills in leadership, critical thinking,
            and working with a multidisciplinary team towards a common goal.
          </p>
          <div className="col-10 col linkContainer">
            <ul className="contact-links-ul">
              <li className="contact-item active">
                <a
                  className="repo"
                  href="https://github.com/mlward639"
                  target="_blank"
                >
                  <i className="fab fa-github-square"></i>
                </a>
              </li>
              <li className="contact-item active">
                <a
                  className="nav-link link-color-issue"
                  href="https://linkedin.com/in/maggie-ward9"
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

export default MW;
