import React from "react";
import ZKImg from "../../images/ZK.jpg";

const ZK = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
      <div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300 ZK">
        <img
          src={ZKImg}
          alt="ZK profile pic"
          className="rounded-t-lg w-full profilePic"
        />
        <div className="p-6">
          <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">
            Zachary Khan
          </h1>
          <p className="teamSubtitle">Full Stack Web Developer</p>
          <p className="text-gray-700 my-2 hover-text-900 aboutMe">
            I'm an undergraduate in Aerospace Engineering at Georgia Tech.
            Aviation has been my lifelong passion, and I have pursued it through
            my efforts in designing and building remote-controlled planes,and in
            obtaining my private pilots' license and instrument rating.
          </p>
          <div className="col-10 col linkContainer">
            <ul className="contact-links-ul">
              <li className="contact-item active">
                <a
                  className="repo"
                  href="https://github.com/zack-khan"
                  target="_blank"
                >
                  <i className="fab fa-github-square"></i>
                </a>
              </li>
              <li className="contact-item active">
                <a
                  className="nav-link link-color-issue"
                  href="https://www.linkedin.com/in/zack-khan-31941b135/"
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

export default ZK;
