import React ,{useState} from 'react'
import Navbar from './components/Navbar'
import './Profile.css'

//calorie page
export default function Calorie() {
  const [user, setuser] = useState("initial");
  const handleclick=()=>{
    setuser("pavan");
  }

  return (
    <>

    <Navbar />

      <div>
        <h1>this is calorie page - {user}</h1>
        <div class="mb-3 ">
          
          <label htmlFor="exampleformControlTextarea1" className="form-label">Weight in kgs</label>
          <textarea className="form-control" value={user}  id="exampleFormControlTextarea1" rows="1"></textarea>
          <label htmlFor="exampleformControlTextarea2" className="form-label">Height in cm</label>
          <textarea className="form-control" id="exampleFormControlTextarea2" rows="1"></textarea>
          <label htmlFor="exampleformControlTextarea3" className="form-label">Calorie Intake of Today</label>
          <textarea className="form-control" id="exampleFormControlTextarea3" rows="1"></textarea>
          <button  id="bmi_buttton" type="button" onClick={handleclick} className="btn btn-primary">Calculate BmI</button>
        </div>
      </div>
    </>
  )
}
