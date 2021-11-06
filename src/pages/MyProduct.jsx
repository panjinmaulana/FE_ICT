import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  fetchProducts,
  deleteProduct,
} from "../store/actions/productsAction.js";

export default function MyProduct() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector((state) => state.productsReducer.products);

  function handleOnClick(e, id) {
    e.preventDefault();

    dispatch(deleteProduct(id));
  }

  return (
    <div className="container">
      <div class="row mt-5">
        {products.map((product) => {
          return (
            <div key={product.id} class="col-sm-3">
              <div class="card" style={{ width: "13rem" }}>
                <div class="card-body">
                  <img
                    src={product.image_url}
                    class="card-img-top mx-auto d-block"
                    alt="product.name"
                    style={{ width: "80%" }}
                  />
                  <h5 class="card-title text-center">{product.name}</h5>
                  <p>
                    Price: {product.price} <br /> Stock: {product.stock}
                  </p>
                  <Link
                    to={`/edit-product/${product.id}`}
                    type="button"
                    className="btn btn-success"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={(e) => handleOnClick(e, product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
