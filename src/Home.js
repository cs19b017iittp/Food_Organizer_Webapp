import React, { useEffect } from "react";

import { Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import "./Boxes.css";
import Footer from "./components/Footer";
export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 }); // animation with a duration of 2secs
  }, []);
  return (
    <>
      <Navbar />
      {/* <h1>This is home page</h1> */}
      <h1 className="container">
        Add The Products You Buy To The Inventory
      </h1>
      <div id="list-example" className="list-group">
        <div className="row">
          <div className="col-lg-2 col-md-4 items_sides">
            <a
              className="list-group-item list-group-item-action"
              href="#Fruits"
            >
              {/* <div className="myDIV"> */}
              Fruits
              {/* </div> */}
              {/* <div className="hide"> */}
              {/* <h1>fruits section</h1> */}
              {/* </div> */}
            </a>
          </div>

          <div className="col-lg-2 col-md-4 items_sides">
            <a
              className="list-group-item list-group-item-action list-group-item-primary"
              href="#Vegetables"
            >
              Vegetables
            </a>
          </div>
          <div className="col-lg-2 col-md-4 items_sides">
            <a
              className="list-group-item list-group-item-action list-group-item-secondary"
              href="#Milk Products"
            >
              Milk-Products
            </a>
          </div>
          <div className="col-lg-2 col-md-4 items_sides">
            <a
              className="list-group-item list-group-item-action list-group-item-success"
              href="#Spices"
            >
              Spices
            </a>
          </div>
          <div className="col-lg-2 col-md-4 items_sides">
            <a
              className="list-group-item list-group-item-action list-group-item-danger"
              href="#Leafy Vegetables"
            >
              Leafy-Vegetables
            </a>
          </div>
          <div className="col-lg-2 col-md-4 items_sides">
            <a
              className="list-group-item list-group-item-action "
              href="#Flours"
            >
              Flours
            </a>
          </div>
          <div className="col-lg-2 col-md-4 items_sides">
            <a className="list-group-item list-group-item-action list-group-item-warning" href="#Rice">
              Rice
            </a>
          </div>
          <div className="col-lg-2 col-md-4 items_sides">
            <a
              className="list-group-item list-group-item-action list-group-item-info"
              href="#Grains"
            >
              Grains
            </a>
          </div>
        </div>
      </div>
      {/* <button type="button" className="btn btn-dark" >Dark</button> */}
      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-offset={-200}
        class="scrollspy-example"
        tabindex="0"
      >
        <div className="grids">
          <div className="boxes">
            <div className="container">
              <h1 id="Fruits">Fruits</h1>
              {/* <HomePageContainer>
          <ImgWrap>
          <Img src={img} alt={alt}/>
          </ImgWrap>
        </HomePageContainer>  */}
            </div>
            <div className="row ">
              <div className="col-lg-1 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  {/* <h1 className="hide">I am shown when someone hovers over the div above.</h1> */}
                  <br />
                  <button
                    type="button"
                    className="btn btn-success btn_style btn_style"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="col-lg-1 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
              <div class="col-lg-1 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
              <div class="col-lg-1 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
              <div class="col-lg-1 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
              <div class="col-lg-1 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
              <div class="col-lg-1 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
              <div class="col-lg-1 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
              <div class="col-lg-1 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
              <div class="col-lg-1 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
              <div class="col-lg-1 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>

            </div>

            <div className="row ">
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <br /> */}
          {/* <button> */}
          <Link to="/Fruits" className="bth btn-primary btn_more ">More</Link>
          {/* </button> */}
          {/* <br /> */}
          <div data-aos="fade-up" className="boxes">
            <div className="container">
              <h1 id="Vegetables">vegetables</h1>
            </div>
            <div className="row ">
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://images.pexels.com/photos/7129180/pexels-photo-7129180.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Link to="/Vegetables" className="bth btn-primary btn_more ">More</Link>
          <div className="boxes">
            <div data-aos="fade-up" className="container">
              <h1 id="Milk Products">Milk Products</h1>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://images.pexels.com/photos/7129180/pexels-photo-7129180.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <br /> */}
          <Link to="/MilkProducts" className="bth btn-primary btn_more ">More</Link>
          {/* <br /> */}
          <div className="boxes">
            <div data-aos="fade-left" className="container">
              <h1 id="Rice">Rice</h1>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://images.pexels.com/photos/7129180/pexels-photo-7129180.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <div className="boxes">
            <div data-aos="flip-left" className="container">
              <h1 id="Spices">Spices</h1>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://images.pexels.com/photos/7129180/pexels-photo-7129180.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Link to="/Spices" className="bth btn-primary btn_more ">More</Link>
          <div className="boxes">
            <div data-aos="fade-up" className="container">
              <h1 id="Grains">Grains</h1>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://images.pexels.com/photos/7129180/pexels-photo-7129180.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Link to="/Grains" className="bth btn-primary btn_more ">More</Link>

          <div className="boxes">
            <div data-aos="fade-up" className="container">
              <h1 id="Leafy-Vegatables">Leafy Vegetables</h1>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://images.pexels.com/photos/7129180/pexels-photo-7129180.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Link to="/Leafy-Vegetables" className="bth btn-primary btn_more ">More</Link>
          <div className="boxes">
            <div data-aos="fade-up" className="container">
              <h1 id="Flourss">Flours</h1>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <img
                    src="https://images.pexels.com/photos/7129180/pexels-photo-7129180.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <button type="button" className="btn btn-success btn_style">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <Footer/>
    </>
  );
}
