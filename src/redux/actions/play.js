import { types } from "../types/types";

export const addBalance = (value) => {
  return (dispatch) => {
    dispatch(add(value));
  };
};

export const substractBalance = () => {
  return (dispatch) => {
    dispatch(substract());
  };
};

export const setNewBalance = (balance) => {
  return (dispatch) => {
    dispatch(setBalance(balance));
  };
};

export const addRecord = (record) => {
  return (dispatch) => {
    dispatch(addCounter());
    dispatch(addRow(record));
  };
};

export const addToCounter = () => {
  return (dispatch) => {
    dispatch(addCounter());
  };
};

const add = (value) => ({
  type: types.addBalance,
  payload: value,
});

const substract = () => ({
  type: types.subtractBalance,
  payload: 1,
});

const setBalance = (balance) => ({
  type: types.setBalance,
  payload: balance,
});

const addRow = (record) => ({
  type: types.addRecord,
  payload: record,
});

const addCounter = () => ({
  type: types.addCounter,
  payload: 1,
});
