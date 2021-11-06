import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Bar } from "react-chartjs-2";

import {
  fetchProducts,
  deleteProduct,
} from "../store/actions/productsAction.js";
import { fetchCarts } from "../store/actions/cartsAction.js";
import cartsReducer from "../store/reducers/cartsReducer.js";

export default function MyProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);
  const carts = useSelector((state) => state.cartsReducer.carts);

  const cartsName = carts.map((cart) => cart.name);
  const productSold = carts.map((cart) => cart.quantity);

  console.log(productSold);

  const [state, setState] = useState({
    labels: cartsName,
    datasets: [
      {
        label: "Product Sold",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: productSold,
      },
    ],
  });

  useEffect(() => {
    dispatch(fetchCarts());
    dispatch(fetchProducts());
  }, []);

  function handleOnClick(e, id) {
    e.preventDefault();

    dispatch(deleteProduct(id));
  }

  return (
    <div className="container">
      <Link to="/add-product" className="btn btn-success my-5">
        Add Product
      </Link>
      <div class="row">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Product ID</th>
              <th scope="col">Name</th>
              <th scope="col">Image URL</th>
              <th scope="col">Price</th>
              <th scope="col">Product Sold</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart) => {
              return (
                <tr key={cart.id}>
                  <th scope="row">{cart.id}</th>
                  <td>{cart.name}</td>
                  <td>
                    <img
                      src={cart.image_url}
                      alt={cart.name}
                      style={{ width: "15%" }}
                    />
                  </td>
                  <td>Rp. {cart.price.toLocaleString("in", "ID")}</td>
                  <td>{cart.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <Bar
          data={state}
          width={100}
          height={20}
          options={{
            title: {
              display: true,
              text: "Average Rainfall per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />

        {products.map((product) => {
          return (
            <div key={product.id} class="col-sm-3 mt-5">
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
                    Price: Rp. {product.price.toLocaleString("in", "ID")} <br />{" "}
                    Stock: {product.stock}
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
