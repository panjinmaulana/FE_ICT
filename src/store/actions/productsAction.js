import axios from "axios";

// Thunk function
export function fetchProducts() {
  return (dispatch) => {
    axios
      .get(`http://localhost:3000/products`)
      .then(({ data }) => {
        dispatch({ type: "FETCH_PRODUCTS", payload: data });
      })
      .catch((err) => console.log(err));
  };
}

export function addProduct(product, history) {
  return (dispatch) => {
    axios
      .post(`http://localhost:3000/products`, { ...product })
      .then((_) => {
        dispatch(fetchProducts());
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
}

export function fetchProductById(id) {
  return (_) => {
    return axios.get(`http://localhost:3000/products/${id}`);
  };
}

export function updateProduct(id, product, history) {
  return (dispatch) => {
    axios
      .put(`http://localhost:3000/products/${id}`, { ...product })
      .then((_) => {
        dispatch(fetchProducts());
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
}

export function deleteProduct(id) {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then((_) => {
        dispatch(fetchProducts());
      })
      .catch((err) => console.log(err));
  };
}

export function updateStock(id, stock) {
  return (dispatch) => {
    axios
      .patch(`http://localhost:3000/products/${id}`, { stock })
      .then(({ data }) => {
        dispatch(fetchProducts());
      })
      .catch((err) => console.log(err));
  };
}
