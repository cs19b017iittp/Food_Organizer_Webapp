import axios from 'axios';
import React, { useState } from 'react';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import "./Boxes.css";
import ReactNotification from 'react-notifications-component'
import Navbar from './components/Navbar';
import DatePicker from 'react-date-picker';


export default function Addproduct() {
    const [storage, setstorage] = useState("")
    const [quantity,setQuantity] = useState(0);
    const [date, setDate] = useState(new Date());
    // const [imglink, setimglink] = useState("");
    
    const onDateChange = (newDate) => {
        setDate(newDate);
        console.log(newDate);
    }

    const additem = () => {
        var itemname = localStorage.getItem("Name");
        var itemtype = localStorage.getItem("Head");
        var storage = document.getElementById("place").value;
        var qty = document.getElementById("Numberarea").value;
      //  var date = document.getElementById("dateinput");
        var purdate = date.toString();
        var x = localStorage.getItem("userName")
        console.log(x + " " + itemname + " " + storage)
        console.log(purdate)

        if (storage === "") {
            alert("Please fill the storage fields")
            return false;
        }
        else {
            setstorage(storage)
            setQuantity(qty)
            // setimglink(localStorage.getItem("Image"))
            console.log(x + " " + itemname + " " + storage)
            axios.post("http://localhost:3001/item/insert", { Itemname: itemname, emailId: x, storageplace: storage ,quantity:qty,date:purdate,Itemtype:itemtype,Img_link: localStorage.getItem("Image") })

        }
        store.addNotification({
            title: 'Successful',
            message:qty+' '+localStorage.getItem("Name")+'s added to your inventory',
            type: 'success',                         // 'default', 'success', 'info', 'warning'
            container: 'top-right',                // where to position the notifications
            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"], 
            dismiss: {
                duration: 2000,
                showIcon:true
              },
              width: 600
          });
    }
        return (
            <>
            <Navbar/>
            <div className="container">
            <h1>Add Product</h1>
            </div>
            
            <div className="addproductcss">
                <br/>
                <div className="mb-3 row">
                    {/* <label htmlFor="inputtext" className="col-sm-4 col-form-label" >Item Name</label> */}
                    {/* <div className="col-sm-3">
                        <textarea className="form-control" id="Textarea1" rows="1" value={localStorage.getItem("Name")}></textarea>
                    </div> */}
                    <div className="container2">
                    <h4>{localStorage.getItem("Name")}</h4>
                    </div>

                </div>
                <div className="container boxes5">
                    <img className="img_addp" src={localStorage.getItem("Image")}/>
                </div>
                <label htmlFor="inputtext" className="col-sm-4 col-form-label">Select a place to store</label>
                <select id="place" className="item-store" required>
                    <option selected value="">select a place</option>
                    <option value="Refrigirator">Refrigirator</option>
                    <option value="Cupboard">Cupboard</option>
                    <option value="other">other</option>
                </select>

                <div className="mb-3 row">
                <label htmlFor="inputtext" className="col-sm-4 col-form-label" >Quantity</label>
                <div className="col-sm-1">
                <input  type="number" id="Numberarea" name="qty" placeholder="0" />
                </div>
               </div>
               <div className="mb-3 row">
               <label htmlFor="inputtext" className="col-sm-4 col-form-label" >Expiry Date</label>
               <div className="col-sm-3">
               <DatePicker
                    value={date}
                    onChange={onDateChange}
                    id="dateinput"
                //={date}
                // selectsStart
                />
                </div>
                </div>
        
                <br/>
                <a class="btn btn-success" role="button" href="/Inventory" onClick={additem}>Add Product</a>
               

            </div>
            </>
        )
    
        }