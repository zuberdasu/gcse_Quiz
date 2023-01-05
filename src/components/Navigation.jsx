import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_SCREEN_MODE } from "../redux/types";
const Navigation = () => {
  const dispatch = useDispatch();
  const screenMode = useSelector((state) => state.screenMode);

  if (screenMode !== 2) {
    return (
      <>
        <nav>
          <button
            onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 2 })}
          >
            Topics
          </button>
          {screenMode === 4 && (
            <button
              onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 3 })}
            >
              Retry
            </button>
          )}
          <button
            onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 1 })}
          >
            Logout
          </button>
        </nav>
      </>
    );
  } else {
    return (
      <button onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 1 })}>
        Logout
      </button>
    );
  }
};
export default Navigation;
