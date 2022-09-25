import { initialState } from "./initialState";
import { storeItem, getItem } from "../localStorage";
import { generateRandomId } from "../utils";
import {
  SET_SCREEN_MODE,
  UPDATE_USER,
  DELETE_USER,
  SET_LOADING,
  ADD_USER,
} from "./types";

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

      const user = {
        id: generateRandomId(20),
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

    default:
      return state;
      break;
  }
}
