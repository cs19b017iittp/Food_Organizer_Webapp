import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import "./Boxes.css";
import Footer from "./components/Footer";
// import ScrollToTop from "./components/Sidebar/ScrollToTop";



// shows suggestion to add items to inventory
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
              <div className="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Apple</h7>
                  <img
                    src="https://minnetonkaorchards.com/wp-content/uploads/2021/04/Bright-Red-Apple.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  {/* <h1 className="hide">I am shown when someone hovers over the div above.</h1> */}
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div className="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                <h7 className="container">Banana</h7>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                <h7 className="container">Cherries</h7>
                  <img
                    src="https://images.unsplash.com/photo-1528821128474-27f963b062bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                    className="img-1"
                    alt="cherry image"
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                <h7 className="container">Orange</h7>
                  <img
                    src="https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Strawberry</h7>
                  <img
                    src="https://images.pexels.com/photos/934066/pexels-photo-934066.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Grapes</h7>
                  <img
                    src="https://images.pexels.com/photos/60021/grapes-wine-fruit-vines-60021.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Pomogranate</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2018/05/08/20/19/pomegranate-3383814__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Blueberries</h7>
                  <img
                    src="https://media.istockphoto.com/photos/fresh-ripe-blueberries-isolated-on-white-background-top-view-copy-picture-id1257544611?b=1&k=20&m=1257544611&s=170667a&w=0&h=f1ZnKM9RbPxCSwD6etNoBej1rldokewg_pxTK829ggM="
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 border1">
                {" "}
                <div className="container ">
                  <h7 className="container">Mango</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2012/04/26/19/36/mango-42898__480.png"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Kiwi</h7>
                  <img
                    src="https://media.istockphoto.com/photos/slice-of-kiwi-fruit-isolated-on-white-picture-id827157432?b=1&k=20&m=827157432&s=170667a&w=0&h=OSK8tlBxPZXViNfvT_IbFiFwl5Xj3oc1uRpDKgn7hN0="
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Lemon</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2013/07/12/19/16/lemon-154449__480.png"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Pears</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2010/12/13/10/06/food-2280__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              </div>
            </div>

             {/* <div className="row ">
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Kiwi</h7>
                  <img
                    src="https://media.istockphoto.com/photos/slice-of-kiwi-fruit-isolated-on-white-picture-id827157432?b=1&k=20&m=827157432&s=170667a&w=0&h=OSK8tlBxPZXViNfvT_IbFiFwl5Xj3oc1uRpDKgn7hN0="
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
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
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
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
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
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
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
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
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
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
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
            </div>
          </div>  */}
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
                  <h7 className="container">Broccoli</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2012/04/24/16/15/broccoli-40295__480.png"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Potato</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/08/11/08/49/potatoes-1585075__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Tomato</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/03/05/22/06/tomatoes-1239176__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Capsicum</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2014/10/22/21/54/bell-peppers-499068__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Pumpkins</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2014/09/10/22/35/pumpkins-441203__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Brinjal</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2020/03/28/17/01/eggplant-4977808__480.png"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
            </div>
            <div className="row ">
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">BeetRoot</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/10/09/13/39/red-beets-1725799__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Onions</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2014/10/22/21/53/red-onions-vegetables-499066__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">CauliFlower</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/06/18/21/56/cauliflower-1465732__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Cucumber</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/04/01/10/16/cucumber-1299833__480.png"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">LadiesFinger</h7>
                  <img
                    src="https://media.istockphoto.com/photos/fresh-young-okra-picture-id586044228?b=1&k=20&m=586044228&s=170667a&w=0&h=cTSPjilC2lQEmv1aMmpVCV4k7mB071QGeoPocde8MaQ="
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">IvyGourd</h7>
                  <img
                    src="https://media.istockphoto.com/photos/fresh-scarlet-gourd-and-it-cut-into-pieces-round-and-vertical-shape-picture-id1254382939?b=1&k=20&m=1254382939&s=170667a&w=0&h=Hrp619WqNkFYGqfTQAovRpytELC6nKTh69i1TMOX2Uk="
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
            </div>
          </div>
          <Link to="/Vegetables" className="bth btn-primary btn_more ">More</Link>
          <div className="boxes">
            <div data-aos="fade-up" className="container">
              <h1 id="Milk Products">Milk Products</h1>
              <div className="row ">
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Milk</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/12/06/18/27/milk-1887234__340.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Cheese</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2018/09/03/20/06/cheese-3652274__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Ice-Cream</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2013/07/12/19/04/popsicle-154321__480.png"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Butter</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/06/11/04/09/butter-1449453__340.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Ghee</h7>
                  <img
                    src="https://media.istockphoto.com/photos/ghee-or-clarified-butter-picture-id658829932?b=1&k=20&m=658829932&s=170667a&w=0&h=7wlzsgbzu9IpqfD_taPr5wCy2jH_-BeVKw-EwxVyWhI="
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Yogurt</h7>
                  <img
                    src="https://media.istockphoto.com/photos/sour-cream-or-yogurt-in-wooden-bowl-picture-id1135483716?b=1&k=20&m=1135483716&s=170667a&w=0&h=rA6ZUwTvVCrpVh8-m69US7kNC4PU5I_8p93Owzy4drc="
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
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
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <div className="boxes">
            <div data-aos="flip-left" className="container">
              <h1 id="Spices">Spices</h1>
              <div className="row ">
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Garlic</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/03/05/19/14/garlic-1238337__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">BlackPepper</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2020/08/19/15/32/pepper-5501218__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">CinnamonSticks</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2013/03/11/16/08/cinnamon-92595__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Cloves</h7>
                  <img
                    src="https://media.istockphoto.com/photos/top-view-of-spice-cloves-on-white-background-picture-id1169349191?b=1&k=20&m=1169349191&s=170667a&w=0&h=DwjZ0CpMx11DU4EBSJz3JK7SDgHoWYgymmEdaao9bLk="
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Ginger</h7>
                  <img
                    src="https://media.istockphoto.com/photos/fresh-ginger-root-and-slice-isolated-on-white-background-top-view-picture-id1216231098?b=1&k=20&m=1216231098&s=170667a&w=0&h=lx6bWvmhChqpcgLFW-9w2IOiIo1T2YSo8_JwdEow5yg="
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Anise</h7>
                  <img
                    src="https://media.istockphoto.com/photos/anise-star-on-white-background-aniseed-true-star-anise-close-up-picture-id871582232?b=1&k=20&m=871582232&s=170667a&w=0&h=LaOTRo-Q84nlMCJyWrI6v43XslEpR0qWqZFVppFpciY="
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
            </div>
            </div>
          </div>
          <Link to="/Spices" className="bth btn-primary btn_more ">More</Link>
          <div className="boxes">
            <div data-aos="fade-up" className="container">
              <h1 id="Grains">Grains</h1>
              <div className="row ">
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Corn</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2015/05/26/17/42/pop-corn-785074__340.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Wheat</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2014/07/02/06/47/wheat-381848__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Oats</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2020/05/21/10/43/flakes-5200175__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Flax</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2021/06/21/19/30/flaxseeds-6354432__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Rice</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2014/10/22/18/43/rice-498688__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Yogurt</h7>
                  <img
                    src="https://media.istockphoto.com/photos/sour-cream-or-yogurt-in-wooden-bowl-picture-id1135483716?b=1&k=20&m=1135483716&s=170667a&w=0&h=rA6ZUwTvVCrpVh8-m69US7kNC4PU5I_8p93Owzy4drc="
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
            </div>
            </div>
          </div>
          <Link to="/Grains" className="bth btn-primary btn_more ">More</Link>

          <div className="boxes">
            <div data-aos="fade-up" className="container">
              <h1 id="Leafy-Vegatables">Leafy Vegetables</h1>
              <div className="row ">
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Moringa</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2019/03/03/18/56/moringa-4032597__340.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Cabbage</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/03/31/23/58/napa-cabbage-2192664__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Lettuce</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2021/01/31/12/25/lettuce-5966735__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Spinach</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2020/03/24/06/20/greens-4962947__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Coriander</h7>
                  <img
                  src="https://cdn.pixabay.com/photo/2016/06/01/15/05/cilantro-1429136__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Kale</h7>
                  <img
                    src="https://cdn.pixabay.com/photo/2021/09/25/17/40/kale-6655493__480.jpg"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
            </div>
            </div>
          </div>
          <Link to="/Leafy-Vegetables" className="bth btn-primary btn_more ">More</Link>
          <div className="boxes">
            <div data-aos="fade-up" className="container">
              <h1 id="Flourss">Flours</h1>
              <div className="row ">
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">RiceFlour</h7>
                  <img
                    src="data:image/jpeg;base64,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"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">OatsFlour</h7>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD21KgVE0UiKnm4BVbZuG9urZCC_zj2GKthw&usqp=CAU"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">RagiFlour</h7>
                  <img
                    src="data:image/jpeg;base64,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"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">WheatFlour</h7>
                  <img
                    src="data:image/jpeg;base64,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"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">GramFlour</h7>
                  <img
                    src="data:image/jpeg;base64,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"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
              <div class="col-lg-2 col-md-4">
                {" "}
                <div className="container">
                  <h7 className="container">Maida</h7>
                  <img
                    src="data:image/jpeg;base64,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"
                    className="img-1"
                    alt="..."
                  ></img>
                  <br />
                  <a class="btn btn-success" href="/Addproduct" role="button">+</a>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ScrollToTop/> */}
     <Footer/>
    </>
  );
}