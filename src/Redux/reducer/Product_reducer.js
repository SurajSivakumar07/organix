//intial state and action

import { ActionType } from "../constant/Action-type";

const initialState = { product: [] };

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      return { ...state, product: [...state.product, payload] };
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
