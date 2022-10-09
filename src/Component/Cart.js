import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addCart } from "../redux/action/index";
import { delCart } from "../redux/action/index";

function Cart() {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleButton1 = (item) => {
    dispatch(addCart(item));
  };

  const handleButton2 = (item) => {
    dispatch(delCart(item));
  };

  const cartItems = (product) => {
    return (
      <>
        <div className="container my-4">
          <div className="row">
            <div className="col-md-4">
              <img
                src={product.image}
                alt={product.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{product.title}</h3>
              <p className="lead fw-bold">
                {product.qty} X ₹{product.price}= ₹{product.qty * product.price}
              </p>
              <button
                className="btn btn-outline-dark me-4"
                onClick={() => handleButton2(product, "ADDITEM")}
              >
                <i className="fa fa-minus"></i>
              </button>
              <button
                className="btn btn-outline-dark"
                onClick={() => handleButton1(product, "DELITEM")}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3">
        <div className="container py-4">
          <div className="row">
            <h3>Your cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
    </>
  );
}

export default Cart;
