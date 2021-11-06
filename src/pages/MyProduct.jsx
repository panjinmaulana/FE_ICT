import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Bar } from "react-chartjs-2";

import {
  fetchProducts,
  deleteProduct,
} from "../store/actions/productsAction.js";
import { fetchCarts } from "../store/actions/cartsAction.js";

export default function MyProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.products);
  const carts = useSelector((state) => state.cartsReducer.carts);

  const cartsName = carts.map((cart) => cart.name);
  const productSold = carts.map((cart) => cart.quantity);

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
      <div className="text-end">
        <Link
          to="/add-product"
          className="btn btn-success my-5"
          data-testid="add-product"
        >
          Add Product
        </Link>
      </div>
      <div className="row">
        <table className="table table-bordered">
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
                  <div className="text-center">
                    <Link
                      to={`/edit-product/${product.id}`}
                      type="button"
                      className="btn btn-success me-2"
                      data-testid="button-edit"
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={(e) => handleOnClick(e, product.id)}
                      data-testid="button-delete"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
