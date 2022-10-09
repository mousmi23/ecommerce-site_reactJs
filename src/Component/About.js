import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="container py-5 my*5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-dark fw-bold mb-4">About us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              corporis quasi maxime, quis beatae voluptates voluptatem saepe
              delectus temporibus ratione esse veritatis eos nam harum
              voluptatibus provident asperiores. Dolores totam eveniet eos qui,
              perspiciatis assumenda voluptatibus consequatur sed, ducimus
              laborum minima veniam ad. Velit itaque quo modi voluptates qui
              assumenda laboriosam, cumque rem quas iure illo a officia
              distinctio similique laudantium dolore! Reprehenderit voluptates
              quae incidunt odit, neque, provident amet facere suscipit illo
              rerum tempora aut ad ea aspernatur, distinctio ex animi. Tempore
              aspernatur ad placeat facilis nobis. Reiciendis ipsa vel
              laudantium delectus nam repudiandae consectetur, corporis placeat
              autem voluptatum?
            </p>
            <Link to="/contact" className="btn btn-outline-dark px-3">
              Contact us
            </Link>
          </div>
          <div className="col-md-6 d-flext justify-content-center">
            <img
              src="/images/about.jpg"
              alt="About us"
              height="400px"
              width="600px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
