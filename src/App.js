import React, { useEffect } from "react";
import Interface from "./components/Interface";
import Startup from "./components/Startup";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_SCREEN_MODE, SET_API_DATA } from "./redux/types";
import axios from "axios";

const App = () => {
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  //const url = `http://localhost:6001/read`;
  const url = `https://api.zuberdasu.co.uk/read/`;

  const getApiData = async () => {
    try {
      const result = await axios.get(url);
      console.log("19", result.data.result);
      dispatch({ type: SET_API_DATA, payload: result.data.result });
      //
    } catch (error) {
      console.log("Error from API", error);
    }
  };

  const setInterface = () => {
    const payload = user.id ? 2 : 1;
    dispatch({ type: SET_SCREEN_MODE, payload });
    setLoading(false);
  };

  //after two seconds set loading to false
  useEffect(() => {
    getApiData();
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
