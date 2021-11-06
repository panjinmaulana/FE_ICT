import axios from "axios";
import { fetchProductById, fetchProducts, updateStock } from "./productsAction";

// Thunk function
export function addProductToCarts(product) {
  return (dispatch) => {
    axios
      .post(`http://localhost:3000/carts`, product)
      .then((_) => {
        dispatch(fetchProducts());
      })
      .catch((err) => console.log(err));
  };
}

export function fetchCarts() {
  return (dispatch) => {
    axios
      .get(`http://localhost:3000/carts`)
      .then(({ data }) => {
        dispatch({ type: "FETCH_CARTS", payload: data });
      })
      .catch((err) => console.log(err));
  };
}

export function updateQuantity(id, quantity) {
  return (dispatch) => {
    axios
      .patch(`http://localhost:3000/carts/${id}`, { quantity })
      .then(({ data }) => {
        dispatch(updateStock(data.id, data.stock - data.quantity));
        dispatch(fetchCarts());
      })
      .catch((err) => console.log(err));
  };
}
