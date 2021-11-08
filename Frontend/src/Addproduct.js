import axios from 'axios'
import React, { useState } from 'react'
// import { Button } from './components/Button'
// import { BtnWrap } from './components/InfoSection/InfoElements'
// Which adds the house hold products to inventory
export default function Addproduct() {
    const [itemname, setitemname] = useState("")
    const [email, setemail] = useState("")
    const [storage, setstorage] = useState("")
    const additem=()=>{
        var Name = document.getElementById("Textarea1").value;
        var storage = document.getElementById("place").value;
        var x = localStorage.getItem("userName")

        if(Name === "" | storage === "" ){
            alert("Please fill all fields")
            return false;
        }
        else{
           setemail(x)
           setitemname(Name)
           setstorage(storage)
        console.log(x+" "+Name+" "+storage)
          axios.post("http://localhost:3001/item/insert",{ItemName:Name,emailId:email,storageplace:storage})

        }
    }
    return (
        <div>
            <h1>This add product page</h1>
            <div className="mb-3 row">
                <label htmlFor="inputtext" className="col-sm-2 col-form-label">Item Name</label>
                <div className="col-sm-2">
                    <textarea className="form-control" id="Textarea1" rows="1"></textarea>
                </div>
            </div>
            <label htmlFor="inputtext" className="col-sm-2 col-form-label">Select a place to store</label>
            <select id="place" className="item-store" required>
                <option selected value="">select a place</option>
                <option value="Refrigirator">Refrigirator</option>
                <option value="Cupboard">Cupboard</option>
                <option value="other">other</option>
            </select>
            <br/><br/>
                    <a class="btn btn-success" href="/inventory" role="button" onClick={additem}>Add Product</a>
            {/* <button className="btn btn-success"   onClick={additem}>Add product</button><br/> */}
            {/* <p id="result">{item}</p> */}
        </div>
    )
}
