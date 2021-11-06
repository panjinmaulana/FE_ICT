import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addProductToCarts } from "../store/actions/cartsAction.js";
import { fetchProducts, updateStock } from "../store/actions/productsAction.js";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  function handleOnClick(e, product) {
    e.preventDefault();

    dispatch(updateStock(product.id, product.stock - 1));

    dispatch(
      addProductToCarts({
        id: product.id,
        name: product.name,
        image_url: product.image_url,
        price: +product.price,
        stock: +product.stock,
        quantity: 1,
        total_price: +product.price * 1,
      })
    );
  }

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-sm-3 mt-5">
              <div className="card" style={{ width: "13rem" }}>
                <div className="card-body">
                  <img
                    src={product.image_url}
                    className="card-img-top mx-auto d-block"
                    alt="product.name"
                    style={{ width: "80%" }}
                  />
                  <h5 className="card-title text-center">{product.name}</h5>
                  <p className="ms-2">
                    Price: Rp. {product.price.toLocaleString("in", "ID")} <br />{" "}
                    Stock: {product.stock}
                  </p>

                  {product.stock ? (
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-success float-center"
                        onClick={(e) => handleOnClick(e, product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  ) : (
                    <div className="text-center">
                      <button className="btn btn-danger">Out of Stock</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
