
import React from 'react'
import Navbar from './components/Navbar'

export default function Calorie() {
  return (
    <>
      <div>
        <h1>this is calorie page</h1>
        <div class="mb-3">

          <label htmlFor="exampleformControlTextarea1" className="form-label">Weight in kgs</label>
          <textarea className="form-control"  id="exampleFormControlTextarea1" rows="1"></textarea>
          <label htmlFor="exampleformControlTextarea2" className="form-label">Height in cm</label>
          <textarea className="form-control" id="exampleFormControlTextarea2" rows="1"></textarea>
          <label htmlFor="exampleformControlTextarea3" className="form-label">Calorie Intake of Today</label>
          <textarea className="form-control" id="exampleFormControlTextarea3" rows="1"></textarea>
          <button  id="bmi_buttton" type="button" className="btn btn-primary">Calculate BmI</button>
        </div>
      </div>
    </>
  )
}
