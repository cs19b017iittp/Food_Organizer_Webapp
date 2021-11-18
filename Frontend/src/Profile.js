import axios from 'axios';
import React, { useState } from 'react';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import "./Boxes.css";
//import DatePicker from 'react-date-picker';
import { MdHeight } from 'react-icons/md';
//import Datepick from './Datepick';
import { utils } from 'react-modern-calendar-datepicker';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//
// import React, { useState } from 'react'
// import Footer from './components/Footer/Footer'
// import Navbar from './components/Navbar'
// import './Profile.css'
// import axios from 'axios';


//Profile page shows user details
export default function Profile() {
   // const [email, setemail] = useState("")

   // var x = localStorage.getItem("userName");
   // setemail(x)
   // console.log(x +"    profile page");
   //users.find( { emailId: localStorage.getItem("userName") } );
    return (
        <>
            <Navbar />
            <div className="profilepage">
                <h1> this is profile page</h1>
                <div className="mb-3 row">
                    <label htmlFor="inputtext" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputemail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <textarea className="form-control" id="fillemail" rows="1" value={localStorage.getItem("userName")}></textarea>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputnumber" className="col-sm-2 col-form-label">Number</label>
                    <div className="col-sm-10">
                    <textarea className="form-control" id="exampleFormControlTextarea3" rows="1"></textarea>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputtext" className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                    <textarea className="form-control" id="exampleFormControlTextarea4" rows="1"></textarea>
                    </div>
                </div>
                <button id="update_buttton" type="button" className="btn btn-primary" >Update profile</button>

            </div>
            <Footer target="Profile"/>
        </>
    )
}
