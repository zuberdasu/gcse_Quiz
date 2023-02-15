import { initialState } from "./initialState";
import { storeItem, getItem } from "../localStorage";
import { generateRandomId } from "../utils";
import {
  SET_SCREEN_MODE,
  UPDATE_USER,
  DELETE_USER,
  SET_LOADING,
  ADD_LOGIN_TOKEN,
  SEND_RESULTS,
  SET_TOPIC,
  SET_API_DATA,
} from "./types";
import axios from "axios";

const datafromDisk = getItem("store");

let initialStateToUse = initialState;

const addScore = async (params) => {
  try {
    const url = `https://api.zuberdasu.co.uk/addScore`;

    const result = await axios.post(url, params);

    return result;
  } catch (error) {
    console.log("Error from API", error);
  }
};

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
    case ADD_LOGIN_TOKEN: {
      const newState = { ...state, screenMode: 2 };
      storeItem("token", { token: action.payload });
      return newState;
    }
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
      const token = getItem("token").token;
      const params = {
        token,
        score: String(action.payload.score),
        topic: state.selectedTopic,
      };
      const result = addScore(params);

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
