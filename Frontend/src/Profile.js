import axios from "axios";
import React, { useState, useEffect } from "react";
// import ReactNotification from 'react-notifications-component';
// import { store } from 'react-notifications-component';
// import 'react-notifications-component/dist/theme.css';
// import 'animate.css';
import "./Boxes.css";
import "./Profile.css";
//import DatePicker from 'react-date-picker';
import { MdHeight } from "react-icons/md";
//import Datepick from './Datepick';
// import { utils } from 'react-modern-calendar-datepicker';
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker from 'react-modern-calendar-datepicker';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//
// import React, { useState } from 'react'
// import Footer from './components/Footer/Footer'
// import Navbar from './components/Navbar'
// import './Profile.css'
// import axios from 'axios';

//Profile page shows user details
export default function Profile() {
  const [name, setname] = useState("");
  const [number, setnumber] = useState(0);
  const [gender, setgender] = useState("");
  const [address, setaddress] = useState("");
  var id;
  useEffect(() => {
    var x = localStorage.getItem("userName");
    axios.post("/user/getmailid", { emailId: x });
    axios.get("/user/read").then((response) => {
      // console.log(response.data);
      // console.log(response.data)
      id = response.data[0]._id;
      if (response.data[0].emailId === x) {
        setname(response.data[0].username);
        setnumber(response.data[0].phone);
        setgender(response.data[0].gender);
      }
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="profilepage">
        <div className="container">
          <h1> Profile Page</h1>
          <br />
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputtext" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              value={name}
              rows="1"
            ></textarea>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputemail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="fillemail"
              rows="1"
              value={localStorage.getItem("userName")}
            ></textarea>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputnumber" className="col-sm-2 col-form-label">
            Number
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea3"
              value={number}
              rows="1"
            ></textarea>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputtext" className="col-sm-2 col-form-label">
            Gender
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea4"
              rows="1"
              value={gender}
            ></textarea>
          </div>
        </div>
        <div className="container">
          <a
            id="update_buttton"
            type="button"
            href="/updateprofile"
            className="btn btn-primary btn_up"
          >
            Update profile
          </a>
        </div>
      </div>
      <Footer target="Profile" />
    </>
  );
}
