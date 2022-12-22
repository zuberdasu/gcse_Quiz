import React from "react";
import Topics from "./Topics";
import Questions from "./Questions";
import Results from "./Results";

import Onboarding from "./Onboarding";

import { useSelector } from "react-redux";
import Registration from "./Registration";
import Logo from "./Logo";

const Interface = () => {
  const screenMode = useSelector((state) => state.screenMode);
  return (
    <>
      <Logo></Logo>
      {screenMode === 1 && <Onboarding />}
      {screenMode === 2 && <Topics />}
      {screenMode === 3 && <Questions />}
      {screenMode === 4 && <Results />}
      {screenMode === 5 && <Registration />}
    </>
  );
};

export default Interface;
