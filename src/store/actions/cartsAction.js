import axios from "axios";
import { fetchProductById, updateStock } from "./productsAction";

// Thunk function
export function addProductToCarts(product) {
  return (dispatch) => {
    dispatch(fetchProductById(product.id))
      .then(({ data }) =>
        axios
          .post(`http://localhost:3000/carts`, {
            id: product.id,
            name: product.name,
            image_url: product.image_url,
            price: product.price,
            stock: data.stock,
            quantity: 1,
            total_price: product.price * 1,
          })
          .then(({ data }) => {
            console.log("berhasil");
            // dispatch({ type: "ADD_PRODUCT_TO_CARTS", payload: data });
          })
          .catch((err) => console.log(err))
      )
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
    console.log(id, quantity);
    axios
      .patch(`http://localhost:3000/carts/${id}`, { quantity })
      .then(({ data }) => {
        dispatch(updateStock(data.id, data.stock - data.quantity));
        dispatch(fetchCarts());
        console.log(data);
        // dispatch(updateStock())
      });
    //   .catch((err) => console.log(err));
  };
}
