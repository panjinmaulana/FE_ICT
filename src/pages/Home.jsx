import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCarts } from "../store/actions/cartsAction.js";

import {
  fetchProducts,
  deleteProduct,
  updateStock,
} from "../store/actions/productsAction.js";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  function handleOnClick(e, product) {
    e.preventDefault();

    dispatch(
      addProductToCarts({
        id: product.id,
        name: product.name,
        image_url: product.image_url,
        price: +product.price,
        stock: product.stock,
      })
    );
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

                  <button
                    type="button"
                    className="btn btn-success mt-3"
                    onClick={(e) => handleOnClick(e, product)}
                  >
                    Add to Cart
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
