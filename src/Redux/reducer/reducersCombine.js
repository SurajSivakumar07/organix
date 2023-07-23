import { combineReducers } from "redux";
import {
  displayFruits,
  displayVeggies,
  isLoggedIn,
  productReducer,
} from "./Product_reducer";

export const reducers = combineReducers({
  allProducts: productReducer,
  isLoggedIn: isLoggedIn,
  displayFruits: displayFruits,
  displayVeggies: displayVeggies,
});
