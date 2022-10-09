import React from "react";
import Products from "./Products";
import Chatbot from "./Chatbot";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0 ">
        <img
          src="/images/shop1.jpg"
          className="card-img"
          alt="Background"
          height="550px"
        />

        <div className="card-img-overlay ">
          <div className="container">
            <h5 className="card-title display-4 fw-bolder mb-0">
              FESTIVE ARRIVALS
            </h5>

            <p className="card-text1"> check out all the trends </p>
          </div>
        </div>
      </div>
      <Products />
      <Chatbot />
    </div>
  );
};
export default Home;
