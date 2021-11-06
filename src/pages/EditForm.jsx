import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import {
  fetchProductById,
  updateProduct,
} from "../store/actions/productsAction";

export default function EditForm() {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  const [product, setProduct] = useState({});

  useEffect(() => {
    dispatch(fetchProductById(params.id))
      .then(({ data }) => setProduct(data))
      .catch((err) => console.log(err));
  }, []);

  function handleOnChange(e) {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }

  function handleOnClick(e) {
    e.preventDefault(e);

    dispatch(updateProduct(product.id, product, history));
  }

  return (
    <div>
      <h3 className="text-center mt-5">Edit Form Product</h3>
      <div style={{ width: "50%", margin: "0 auto" }}>
        <form>
          <div class="mb-3">
            <label for="name" class="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              class="form-control"
              value={product.name}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">
              Image URL
            </label>
            <input
              name="image_url"
              type="text"
              class="form-control"
              value={product.image_url}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">
              Price
            </label>
            <input
              name="price"
              type="number"
              class="form-control"
              value={product.price}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">
              Stock
            </label>
            <input
              name="stock"
              type="number"
              class="form-control"
              value={product.stock}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <button
            type="button"
            class="btn btn-primary"
            onClick={(e) => handleOnClick(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
