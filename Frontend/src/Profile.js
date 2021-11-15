
import React from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar'
import './Profile.css'

//Profile page shows user details
export default function Profile() {

    // const setData = ()=>{

    // }
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
                    <textarea className="form-control" id="exampleFormControlTextarea2" rows="1"></textarea>
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
