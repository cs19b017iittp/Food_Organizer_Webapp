import axios from 'axios'
import React, { useState, useEffect } from 'react'
import "./Boxes.css";
//import DatePicker from 'react-date-picker';
// import { MdHeight } from 'react-icons/md';
//import Datepick from './Datepick';
// import { utils } from 'react-modern-calendar-datepicker';
// import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import DatePicker from 'react-modern-calendar-datepicker';
// import { Button } from './components/Button'
// import { BtnWrap } from './components/InfoSection/InfoElements'
// Which adds the house hold products to inventory
export default function Addproduct() {
    const [storage, setstorage] = useState("")
    const additem = () => {
        var itemname = localStorage.getItem("Name");
        var storage = document.getElementById("place").value;

        var x = localStorage.getItem("userName")
        console.log(x + " " + itemname + " " + storage)


        if (storage === "") {
            alert("Please fill the storage fields")
            return false;
        }
        else {
            setstorage(storage)
            //  axios.post("http://localhost:3001/item/insert",{ItemName:itemname,emailId:email,storageplace:storage,quantity:qty})

            console.log(x + " " + itemname + " " + storage)
            axios.post("http://localhost:3001/item/insert", { Itemname: itemname, emailId: x, storageplace: storage })

        }

    }
        return (
            <div>
                <h1>This add product page</h1>
                <div className="mb-3 row">
                    <label htmlFor="inputtext" className="col-sm-2 col-form-label" >Item Name</label>
                    <div className="col-sm-2">
                        <textarea className="form-control" id="Textarea1" rows="1" value={localStorage.getItem("Name")}></textarea>
                    </div>

                </div>
                <div className="container boxes4">
                    <img src={localStorage.getItem("Image")} />
                </div>
                <label htmlFor="inputtext" className="col-sm-2 col-form-label">Select a place to store</label>
                <select id="place" className="item-store" required>
                    <option selected value="">select a place</option>
                    <option value="Refrigirator">Refrigirator</option>
                    <option value="Cupboard">Cupboard</option>
                    <option value="other">other</option>
                </select>
                {/* <div className="mb-3"> */}
                {/* <textarea className="form-control" id="Textarea1" rows="1" value={placetostore}></textarea> */}
                {/* if(head==="1"){
                    <h6>Recommended Storage : Refrigirator</h6>
                } */}

                {/* </div> */}
                {/* <div className="mb-3 row">
                <label htmlFor="inputtext" className="col-sm-2 col-form-label" >Quantity</label>
                <div className="col-sm-1">
                <input className="input_num" type="number" id="Numberarea" name="qty" placeholder="0" />
                    <textarea className="form-control" id="Textarea1" rows="1" value={localStorage.getItem("Name")}></textarea>
                </div>
               
            </div> */}
                {/* <div className="mb-3 row">

            <div className="col-lg-2">
                <h6>Date of Purchase</h6>
                </div>

                <div className="col-lg-1">
                <DatePicker
                id="dateofpurchase"
      value={selectedDay}
      onChange={setSelectedDay}
      inputPlaceholder="Select a day"
      shouldHighlightWeekends
    />
                </div>
            
            </div> */}

                <br /><br />
                <a class="btn btn-success" href="/inventory" role="button" onClick={additem}>Add Product</a>
                {/* <button className="btn btn-success"   onClick={additem}>Add product</button><br/> */}
                {/* <p id="result">{item}</p> */}

            </div>
        )
    
}