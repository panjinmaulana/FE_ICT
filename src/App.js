import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import AddForm from "./pages/AddForm";
import EditForm from "./pages/EditForm";
import MyProduct from "./pages/MyProduct";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              Storepedia
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
                <Link
                  to="/my-cart"
                  className="nav-link active"
                  aria-current="page"
                >
                  My Cart
                </Link>
                <Link
                  to="/my-product"
                  className="nav-link active"
                  aria-current="page"
                >
                  My Product
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/my-cart">
            <Cart />
          </Route>
          <Route path="/my-product">
            <MyProduct />
          </Route>
          <Route path="/add-product">
            <AddForm />
          </Route>
          <Route path="/edit-product/:id">
            <EditForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
