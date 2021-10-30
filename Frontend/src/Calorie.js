import React ,{useState} from 'react'
import Navbar from './components/Navbar'
import './components/Calorie/Calorie.css'

//calorie page
export default function Calorie() {

  // var result = "";
  
  const [val, setVal] = useState(0.0);
  const handleclick=()=>{
    var w = document.getElementById("exampleFormControlTextarea1").value
    var h = document.getElementById("exampleFormControlTextarea2").value
    if(isNaN(w) || isNaN(h) || w === "" || h === ""){
      window.alert("Enter the values");
      setVal(0)
    }
    else
      setVal(w/(h*h*0.0001));
  }
  // 25.0 or more overweight, 18.5 to 24.9 - healthy, underweight
  // if(value > 18.5 && value < 24.9){
  //   result = "You are healthy"
  // }   
  // else if(value > 25.0){
  //   result = "You are overweight"
  // }   
  // else{
  //   result = "You are underweight"
  // }   

  return (
    <>

    <Navbar />
    <body>
      <div className="contain">
        <h1>this is calorie page</h1>
        <div className="block center">
          {/* <div class="form-floating">
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
            <label for="floatingTextarea">Comments</label>
          </div> */}
          <label id="label1" htmlFor="exampleformControlTextarea1" className="form-label" >Weight in kgs</label>
          <textarea className="form-control"  id="exampleFormControlTextarea1" rows="1"></textarea>
          <label id="label2" htmlFor="exampleformControlTextarea2" className="form-label">Height in cm</label>
          <textarea className="form-control" id="exampleFormControlTextarea2" rows="1"></textarea>
          <label id="label3" htmlFor="exampleformControlTextarea3" className="form-label">Calorie Intake of Today</label>
          <textarea className="form-control" value={val} id="exampleFormControlTextarea3" rows="1"></textarea>
          <label id="label4" htmlFor="exampleformControlTextarea4" className="form-label">Activity : </label>
          <select class="form-select form-select-sm" aria-label=".form-select-sm example">
            <option selected>Open this select menu</option>
            <option value="1">Sedentary: Little or no exercise</option>
            <option value="2">Moderate: exercise 4-5 times per week</option>
            <option value="3">Active: daily exercise or intense exercise 3-4 times per week</option>
            <option value="4">Very Active: Intense exercise 6-7 times per week</option>
          </select><br/>
          <button  id="bmi_buttton" type="button" onClick={handleclick} className="btn btn-primary">Calculate BmI</button><br/><br/>
        </div>
      </div>
      </body>
    </>
  )
}
