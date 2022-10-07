import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_SCREEN_MODE } from "../redux/types";
const Navigation = () => {
  const dispatch = useDispatch();
  const screenMode = useSelector((state) => state.screenMode);
  console.log(screenMode);
  if (screenMode != 2) {
    return (
      <>
        <nav>
          <button
            onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 2 })}
          >
            Topics
          </button>
        </nav>
      </>
    );
  }
};
export default Navigation;

{
  /*screenMode !== 3 && (
          <button
            onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 3 })}
          >
            Questions
          </button>
        )*/
}
{
  /*screenMode !== 4 && (
          <button
            onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 4 })}
          >
            Results
          </button>
        )*/
}
