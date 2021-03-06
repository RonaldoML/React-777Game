import { getSesion, removeSesion, setSesion } from "../../utils/util";
import { types } from "../types/types";

export const loginAuth = (username) => {
  return (dispatch) => {
    setSesion(username);
    dispatch(login(username));
  };
};

export const logoutAuth = () => {
  return (dispatch) => {
    removeSesion();
    dispatch(logout());
  };
};

const login = (username) => ({
  type: types.login,
  payload: username,
});
const logout = () => ({
  type: types.logout,
  payload: false,
});
