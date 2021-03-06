import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { playReducer } from "./playReducer";

export const rootReducer = combineReducers({
  play: playReducer,
  auth: authReducer,
});
