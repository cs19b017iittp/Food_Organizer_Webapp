
import React from 'react'
import Navbar from './components/Navbar'


export default function Profile() {

    return (
        <>
        <Navbar />
            <div>
                <h1> this is profile page</h1>
                <div class="mb-3">

                    <label htmlFor="exampleformControlTextarea1" className="form-label">Name</label>
                    <textarea className="form-control"  id="exampleFormControlTextarea1" rows="1"></textarea>
                    <label htmlFor="exampleformControlTextarea2" className="form-label">Email address</label>
                    <textarea className="form-control"  id="exampleFormControlTextarea2" rows="1"></textarea>
                    <label htmlFor="exampleformControlTextarea3" className="form-label">Number</label>
                    <textarea className="form-control"  id="exampleFormControlTextarea3" rows="1"></textarea>
                    <label htmlFor="exampleformControlTextarea4" className="form-label"> address</label>
                    <textarea className="form-control"  id="exampleFormControlTextarea4" rows="1"></textarea>
                    <button  id="update_buttton" type="button" className="btn btn-primary">Update profile</button>
                </div>
            </div>
        </>
    )
}
