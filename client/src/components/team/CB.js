import React from "react";
import CBImg from "../../images/CB.jpg";

const CB = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <>
      <div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300 CB">
        <img
          src={CBImg}
          alt="CB profile pic"
          className="rounded-t-lg w-full profilePic"
        />
        <div className="p-6">
          <h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">
            Clarisse Bonang
          </h1>
          <p className="teamSubtitle">Full Stack Web Developer</p>
          <p className="text-gray-700 my-2 hover-text-900 aboutMe">
            Hello, my name is Clarisse Bonang. I am an aspiring software
            engineer working on my bachelor's degree in computer science at
            Chapman University. I recently completed a certificate in full-stack
            development from the Georgia Institute of Technology. Also, I
            completed my associate's degree in mathematics at Santiago Canyon
            College.
          </p>
          <div className="col-10 col linkContainer">
            <ul className="contact-links-ul">
              <li className="contact-item active">
                <a
                  className="repo"
                  href="https://github.com/csbonang"
                  target="_blank"
                >
                  <i className="fab fa-github-square"></i>
                </a>
              </li>
              <li className="contact-item active">
                <a
                  className="nav-link link-color-issue"
                  href="https://www.linkedin.com/in/clarisse-bonang/"
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

export default CB;
