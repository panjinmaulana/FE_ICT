import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCarts, updateQuantity } from "../store/actions/cartsAction";

export default function Cart() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cartsReducer.carts);

  useEffect(() => {
    dispatch(fetchCarts());
  }, []);

  console.log(carts);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {carts.map((cart) => {
            return (
              <div class="card my-5" style={{ maxWidth: "540px" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src={cart.image_url}
                      class="img-fluid rounded-start"
                      alt={cart.name}
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{cart.name}</h5>
                      <p>
                        Price: {cart.price} <br /> Stock:{" "}
                        {cart.stock - cart.quantity}
                      </p>

                      <div className="d-flex justify-content-evenly">
                        <button
                          type="button"
                          name="minus"
                          className="btn btn-danger"
                          onClick={() =>
                            dispatch(
                              updateQuantity(cart.id, Number(cart.quantity) - 1)
                            )
                          }
                        >
                          -
                        </button>
                        <input
                          type="text"
                          id="disabledTextInput"
                          class="form-control text-center"
                          disabled
                          value={cart.quantity}
                          style={{ width: "30%" }}
                        />
                        <button
                          type="button"
                          name="plus"
                          className="btn btn-danger"
                          onClick={() =>
                            dispatch(
                              updateQuantity(cart.id, Number(cart.quantity) + 1)
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
