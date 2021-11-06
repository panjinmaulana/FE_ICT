import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { addProduct } from "../store/actions/productsAction";

export default function AddForm() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [product, setProduct] = useState({
    id: `product-${getRandomProduct()}`,
    name: "",
    image_url: "",
    price: 0,
    stock: 0,
  });

  function getRandomProduct() {
    return Math.floor(Math.random() * 1000000);
  }

  function handleOnChange(e) {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  }

  function handleOnClick(e) {
    e.preventDefault();

    dispatch(
      addProduct(
        {
          id: product.id,
          name: product.name,
          image_url: product.image_url,
          price: +product.price,
          stock: product.stock,
        },
        history
      )
    );
  }

  return (
    <div>
      <h3 className="text-center mt-5">Add Form Product</h3>

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
