import React from "react";
// import # from "../components/#";
// import { useQuery } from "@apollo/client";
// import { QUERY_PROFILES } from "../utils/queries";
import CharacterCards from "../components/characterCards/CharacterCards";

const Homepage = () => {
  // const { loading, data } = useQuery(QUERY_PROFILES);
  // const profiles = data?.profiles || [];

  return (
    <div className="homePage">
      <CharacterCards />
    </div>
  );
};

export default Homepage;
