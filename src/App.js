import React, { useEffect } from "react";
import Interface from "./components/Interface";
import Startup from "./components/Startup";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_SCREEN_MODE } from "./redux/types";
const App = () => {
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const setInterface = () => {
    const payload = user.id ? 2 : 1;
    dispatch({ type: SET_SCREEN_MODE, payload });
    setLoading(false);
  };

  //after two seconds set loading to false
  useEffect(() => {
    setTimeout(() => {
      setInterface();
    }, 1000);
  }, []);

  return (
    <>
      {/*<button onClick={() => localStorage.clear()}>Clear localStorage</button>*/}
      <h1>GCSE Quiz</h1>
      {loading ? <Startup /> : <Interface />}
      {/*<button onClick={setInterface}>Continue</button>*/}
    </>
  );
};

export default App;
