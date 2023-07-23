import { ActionType } from "../constant/Action-type";

export const setProducts = (products) => {
  return {
    type: ActionType.SET_PRODUCTS,
    payload: products,
  };
};

// export const selectedProducts = (products) => {
//   return {
//     type: ActionType.SELECTED_PRODUCTS,
//     payload: products,
//   };
// };

export const checkLogin = (product) => {
  return {
    type: ActionType.CHECK_LOGIN,
    payload: product,
  };
};

export const displayFruitsAction = (product) => {
  return {
    type: ActionType.DISPLAY_FRUITS,
    payload: product,
  };
};

export const displayVeggiesAction = (product) => {
  return {
    type: ActionType.DISPLAY_VEGGIES,
    payload: product,
  };
};
