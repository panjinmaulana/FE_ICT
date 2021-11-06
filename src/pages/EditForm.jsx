import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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

    dispatch(
      updateProduct(
        product.id,
        {
          id: product.id,
          name: product.name,
          image_url: product.image_url,
          price: +product.price || 100000,
          stock: +product.stock || 1,
        },
        history
      )
    );
  }

  return (
    <div className="container">
      <h3 className="text-center mt-5" data-testid="edit-product">
        Edit Form Product
      </h3>
      <div style={{ width: "50%", margin: "0 auto" }}>
        <form>
          <div className="mb-3">
            <label
              for="name"
              className="form-label"
              data-testid="name-edit-form"
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              value={product.name}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className="mb-3">
            <label
              for="name"
              className="form-label"
              data-testid="image-url-edit-form"
            >
              Image URL
            </label>
            <input
              name="image_url"
              type="text"
              className="form-control"
              value={product.image_url}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className="mb-3">
            <label for="name" className="form-label">
              Price
            </label>
            <input
              name="price"
              type="number"
              className="form-control"
              value={product.price}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className="mb-3">
            <label for="name" className="form-label">
              Stock
            </label>
            <input
              name="stock"
              type="number"
              className="form-control"
              value={product.stock}
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => handleOnClick(e)}
            data-testid="button-submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
