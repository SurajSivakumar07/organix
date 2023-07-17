//intial state and action

import { ActionType } from "../constant/Action-type";

const initialState = {
  product: [],
  localStorage: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      const val = { ...state, product: [...state.product, payload] };
      localStorage.setItem("items", JSON.stringify(val.product));
      state.localStorage = JSON.parse(localStorage.getItem("items"));
      return val;
    default:
      return state;
  }
};

const initial = {
  isLoggedIn: false,
};
export const isLoggedIn = (state = initial, { type, payload }) => {
  switch (type) {
    case ActionType.CHECK_LOGIN:
      return { isLoggedIn: payload };
    default:
      return state;
  }
};
