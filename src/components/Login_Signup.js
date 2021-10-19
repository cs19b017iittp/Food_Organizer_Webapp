import React from "react";

export default function Login_Signup() {
  return (
    <>
      <div className="row">
        <div className="col-lg-5 col-md-11">
          <h1>Login</h1>
          <form action="">
              
          </form>
        </div>
        <div className="col-lg-7 col-md-11">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
