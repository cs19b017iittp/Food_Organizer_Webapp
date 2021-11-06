import axios from 'axios'
import React, { useState } from 'react'
// Which adds the house hold products to inventory
export default function Addproduct() {

    const [item, setitem] = useState({ItemName:"",storage:""})
    const additem=()=>{
        var name=document.getElementById("Textarea1").value
        // var storage=document.getElementById("Textarea1").value
        setitem({ItemName:name,storage:"almirah"})
        console.log(item)
    axios.post("http://localhost:3001/update",item)
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
            <select >
                <option selected>Open this select menu</option>
                <option value="1">Refrigirator</option>
                <option value="2">Cupboard</option>
                <option value="3">other</option>
            </select>
           <br/>
            <a class="btn btn-success" href="/inventory" role="button" onClick={additem}>Add Product</a>
        </div>
    )
}
