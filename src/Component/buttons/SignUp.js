import React from "react";

function SignUp() {
  return (
    <>
      <div className="container mb-5  py-4 my-4 d-flex justify-content-center">
        <div className="col-md-6 ">
          <span className="fa fa-google me-2"></span>
          <button className="btn btn-dark w-100 mb-2">
            <i className="fab fa-google me-2"></i> sign up with google
          </button>
          <form>
            <div className="mb-3">
              <label for="exampleForm" className="form-label">
                Full Name
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleForm"
                placeholder="John smith"
              />
            </div>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>

            <div className="mb-3">
              <label for="exampleForm" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleForm"
                placeholder="Password"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>

            <button type="submit" className="btn btn-outline-dark w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
