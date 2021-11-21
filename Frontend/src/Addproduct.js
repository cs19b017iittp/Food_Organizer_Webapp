import axios from 'axios';
import React, { useState } from 'react';
import ReactNotification from 'react-notifications-component';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import "./Boxes.css";

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
        store.addNotification({
            title: 'Successful',
            message:'hii',
            type: 'success',                         // 'default', 'success', 'info', 'warning'
            container: 'top-right',                // where to position the notifications
            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"], 
            dismiss: {
                duration: 2000,
                showIcon:true
              },
              width: 600
          })
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
                <a class="btn btn-success" role="button" onClick={additem}>Add Product</a>
                {/* <button className="btn btn-success"   onClick={additem}>Add product</button><br/> */}
                {/* <p id="result">{item}</p> */}

            </div>
        )
    
        }