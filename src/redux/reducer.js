import { initialState } from "./initialState";
import { storeItem, getItem } from "../localStorage";
import { generateRandomId } from "../utils";
import {
  SET_SCREEN_MODE,
  UPDATE_USER,
  DELETE_USER,
  SET_LOADING,
  ADD_USER,
  SEND_RESULTS,
  SET_TOPIC,
  SET_API_DATA,
} from "./types";
import axios from "axios";

const datafromDisk = getItem("store");

let initialStateToUse = initialState;

if (datafromDisk) {
  initialStateToUse = datafromDisk;
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SCREEN_MODE: {
      const newState = { ...state, screenMode: action.payload, loading: false };
      storeItem("store", newState);
      return newState;
    }

    case SET_LOADING: {
      const newState = { ...state, loading: action.payload };
      return newState;
    }
    case ADD_USER:
      if (!action.payload) {
        return state;
      }
      console.log(action.payload.userName);
      //const url = `https://api.zuberdasu.co.uk/login/`;
      const url = `http://localhost:6001/login`;

      const params = { email: "dzd@zd.com", password: "password" };

      // try {
      //   const result = axios.post(url, params);
      //   console.log("19", result);
      //   // dispatch({ type: SET_API_DATA, payload: result.data.result });
      //   //
      // } catch (error) {
      //   console.log("Error from API", error);
      // }

      const user = {
        //id: generateRandomId(20),
        userName: action.payload,
      };
      const newState = { ...state, user, screenMode: 2 };
      storeItem("store", newState);
      return newState;
    case UPDATE_USER: {
      const user = { ...state.user };
      user.userName = action.payload.userName;

      const newState = { ...state, user };
      storeItem("store", newState);
      return newState;
    }

    case DELETE_USER: {
      const newState = { ...state, user: {} };
      storeItem("store", newState);
      return newState;
    }

    case SEND_RESULTS: {
      const newState = { ...state, results: action.payload, screenMode: 4 };
      return newState;
    }

    case SET_TOPIC: {
      const newState = {
        ...state,
        selectedTopic: action.payload,
        screenMode: 3,
      };
      return newState;
    }
    case SET_API_DATA:
      return { ...state, topics: action.payload };

    default:
      return state;
      break;
  }
}
