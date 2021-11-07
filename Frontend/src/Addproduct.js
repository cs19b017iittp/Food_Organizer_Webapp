import React, { useState } from 'react'
// import { Button } from './components/Button'
// import { BtnWrap } from './components/InfoSection/InfoElements'
// Which adds the house hold products to inventory
export default function Addproduct() {
    const [item, setitem] = useState({ItemName:"",storage:"",image:null})
    const additem=()=>{
        var itemName = document.getElementById("Textarea1").value;
        var storage = document.getElementById("place").value;
        var itemImg = document.getElementById("img").value;

        if(itemName === "" | storage === "" | itemImg === null){
            alert("Please fill all fields")
            return false;
        }
        else{
            setitem({itemName,storage,itemImg})
            console.log(itemName+"  "+storage+"  "+itemImg)
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
            <label htmlFor="inputtext" className="col-sm-2 col-form-label">Upload image</label>
            <input id="img" type="file"/> <br/><br/>
            <label htmlFor="inputtext" className="col-sm-2 col-form-label">Select a place to store</label>
            <select id="place" className="item-store" required>
                <option selected value="">select a place</option>
                <option value="1">Refrigirator</option>
                <option value="2">Cupboard</option>
                <option value="3">other</option>
            </select>
            <br/><br/>
                    {/* <a class="btn btn-success" href= role="button" onClick={additem}>Add Product</a> */}
            <button className="btn btn-success" onClick={additem}>Add product</button><br/>
            <p id="result">{item}</p>
        </div>
    )
}
