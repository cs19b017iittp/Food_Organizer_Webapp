
import React, { Component, useState, useEffect } from 'react'
import Navbar from './Navbar';
import food from '../images/food.jpg'
import Axios from 'axios'
import "./Inventory.css"
import { Button } from 'react-scroll';
var x;
var y;
export default function Inventory() {
    const [foodlist, setfoodlist] = useState([])
    const [fruits,setFruits] = useState([])
    const [vegetables,setVegetables] = useState([])
    const [mps,setMps] = useState([])
    const [spices,setSpices] = useState([])
    const [grains,setGrains] = useState([])
    const [leafyvegs,setLeafyvegs] = useState([])
    const [flours,setFlours] = useState([])
    const [dryfruits,setDryfruits] = useState([])
    useEffect(() => {
        x = localStorage.getItem("userName");
        y=localStorage.getItem("Head");
        console.log(x)
        Axios.get("http://localhost:3001/item/read").then((response) => {

            // setfoodlist(response);
            console.log(response);
            setfoodlist(response.data);
            
        })
    }, [])
    
const DeleteItem=(id)=>{
    Axios.delete(`http://localhost:3001/item/delete/${id}`);
    window.location.reload ()
}
    return (
        <div>
            <>
                <Navbar />
                <div>
                    <p id="para">{x}</p>
                    {/* <img src={food} alt="Items" /> */}
                    <h1>list of items</h1>


                    {foodlist.map((val, key) => {

                        return (
                            
                            <div  key={key}>
                                {val.emailId === x && y===1?
                                    <diV className="inventorybox">
                                          <label className="Name" htmlFor="name">Name</label>
                                         <input id="name" type="text" className="itemname-input" name="Name" value={val.Itemname} />
                                        {/* <h1> {val.Itemname}</h1> */}
                                        {/* <h1> {val.emailId}</h1> */}
                                        <label  className="place" htmlFor="place">Place</label>
                                         <input id="place" type="text" className="place-input" name="Place" value={val.storageplace} />
                                         {/* <i className="fa fa-trash" onClick={DeleteItem(val._id)}></i> */}
                                         <label  className="place" htmlFor="place">Qty</label>
                                         <input id="place" type="number" className="place-input" name="Place" value={val.quantity} />
                                         <label  className="place" htmlFor="place">x</label>
                                         <input id="place" type="number" className="place-input" name="Place" value={key} />
                                         <button id="update_inventory" type="button" onClick={()=>DeleteItem(val._id)} className="btn btn-primary" >delete</button>
                                        {/* <h1> {val.storageplace}</h1> */}
                                    </diV>
                                    : <></>}
                                     
                            </div>)

                    })}
                </div>
            </>
        </div>
    )
}
