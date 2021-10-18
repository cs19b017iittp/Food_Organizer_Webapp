import React from 'react'
import logo from './logo.svg';
import './Home.css'
export default function Home() {
  return (
    <>
      <h1>This is home page</h1>
      <button type="button" className="btn btn-dark" >Dark</button>

      <div className="container">
        <img src={logo} className="img-1" alt="..."></img>
        <button type="button" className="btn btn-success">Success</button>
      </div>
      <div className="row">

        <div class="col-lg-2 col-md-4">  <div className="container">
          <img src={logo} className="img-1" alt="..."></img>
          <button type="button" className="btn btn-success">Success</button>
        </div></div>
        <div class="col-lg-2 col-md-4">  <div className="container">
          <img src={logo} className="img-1" alt="..."></img>
          <button type="button" className="btn btn-success">Success</button>
        </div></div>
        <div class="col-lg-2 col-md-4">  <div className="container">
          <img src={logo} className="img-1" alt="..."></img>
          <button type="button" className="btn btn-success">Success</button>
        </div></div>
        <div class="col-lg-2 col-md-4">  <div className="container">
          <img src={logo} className="img-1" alt="..."></img>
          <button type="button" className="btn btn-success">Success</button>
        </div></div>
        <div class="col-lg-2 col-md-4">  <div className="container">
          <img src={logo} className="img-1" alt="..."></img>
          <button type="button" className="btn btn-success">Success</button>
        </div></div>
        <div class="col-lg-2 col-md-4">  <div className="container">
          <img src={logo} className="img-1" alt="..."></img>
          <button type="button" className="btn btn-success">Success</button>
        </div></div>

        {/* <img src={logo} className="img-1" alt="..."></img>
        <img src={logo} className="img-1" alt="..."></img>
        <img src={logo} className="img-1" alt="..."></img>
        <img src={logo} className="img-1" alt="..."></img>
        <img src={logo} className="img-1" alt="..."></img> */}


      </div>
      <div>

      </div>
      {/* <div class="row">
       
      </div> */}

    </>
  )
}
