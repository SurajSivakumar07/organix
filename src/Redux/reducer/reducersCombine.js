import { combineReducers } from "redux";
import { isLoggedIn, productReducer } from "./Product_reducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  isLoggedIn: isLoggedIn,
});
