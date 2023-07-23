//intial state and action

import { ActionType } from "../constant/Action-type";

const initialState = {
  product: [],
  localStorage: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.SET_PRODUCTS:
      let val = {
        ...state,
        product: [...state.product, payload],
        localStorage: [
          ...state.localStorage,
          JSON.parse(localStorage.getItem("items")),
        ],
      };
      localStorage.setItem("items", JSON.stringify(val.product));
      state.localStorage = JSON.parse(localStorage.getItem("items"));

      val = {
        ...state,
        product: [...state.product, payload],
        localStorage: [
          ...state.localStorage,
          JSON.parse(localStorage.getItem("items")),
        ],
      };
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

const displayIntital = {
  prod: [],
};

export const displayFruits = (state = displayIntital, { type, payload }) => {
  switch (type) {
    case ActionType.DISPLAY_FRUITS:
      return { ...state, prod: [...state.prod, payload] };
    default:
      return state;
  }
};

const displayIntitalVeggies = {
  veggies: [],
};
export const displayVeggies = (
  state = displayIntitalVeggies,
  { type, payload }
) => {
  switch (type) {
    case ActionType.DISPLAY_VEGGIES:
      return { ...state, veggies: [...state.veggies, payload] };
    default:
      return state;
  }
};
