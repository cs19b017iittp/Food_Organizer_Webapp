import React from 'react'

export default function Addproduct() {
    return (
        <div>
            <h1>This add product page</h1>
            <div className="mb-3 row">
                <label htmlFor="inputtext" className="col-sm-2 col-form-label">Item Name</label>
                <div className="col-sm-2">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
                </div>
            </div>
            <select >
                <option selected>Open this select menu</option>
                <option value="1">Refrigirator</option>
                <option value="2">Cupboard</option>
                <option value="3">other</option>
            </select>
           <br/>
            <a class="btn btn-success" href="#" role="button">Add Product</a>
        </div>
    )
}
