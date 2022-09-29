import React, { Component } from "react";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";

const Results = () => {
  const results = useSelector((state) => state.results);
  console.log(results);
  return (
    <>
      <h1>Yor scored {`${results.score}`}</h1>
      <Navigation></Navigation>
    </>
  );
};

export default Results;
