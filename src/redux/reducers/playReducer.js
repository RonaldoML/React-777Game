import { types } from "../types/types";
import { saveBalance } from "../../utils/util";

const initialState = {
  balance: 99.99,
  counter: 0,
  records: [],
};

export const playReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addBalance:
      const newBalanceAdded = state.balance + action.payload;
      saveBalance(newBalanceAdded);
      return {
        ...state,
        balance: newBalanceAdded,
      };
    case types.subtractBalance:
      const newBalance = state.balance - action.payload;
      saveBalance(newBalance);
      return {
        ...state,
        balance: newBalance,
      };
    case types.setBalance:
      saveBalance(action.payload);
      return {
        ...state,
        balance: action.payload,
      };
    case types.addRecord:
      return {
        ...state,
        records: [...state.records, { id: state.counter, ...action.payload }],
      };
    case types.addCounter:
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};
