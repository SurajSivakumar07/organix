import axios from "axios";

export const addTocart = (ProdId, price) => {
  axios.post("http://localhost:8080/cart", {
    userId: localStorage.getItem("userId"),
    productId: ProdId,
    quantity: 1,
    price: price,
  });
};
