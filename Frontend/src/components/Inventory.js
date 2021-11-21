
import React, { Component, useState, useEffect } from 'react'
import Navbar from './Navbar';
import food from '../images/food.jpg'
import Axios from 'axios'
import "./Inventory.css"
var x;
export default function Inventory() {
    const [foodlist, setfoodlist] = useState([])
    useEffect(() => {
        x = localStorage.getItem("userName");
        console.log(x)
        Axios.get("http://localhost:3001/item/read").then((response) => {

            // setfoodlist(response);
            console.log(response);
            setfoodlist(response.data);
        })
    }, [])

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
                                {val.emailId === x ?
                                    <diV className="inventorybox">
                                          <label className="Name" htmlFor="name">Name</label>
                                         <input id="name" type="text" className="itemname-input" name="Name" value={val.Itemname} />
                                        {/* <h1> {val.Itemname}</h1> */}
                                        {/* <h1> {val.emailId}</h1> */}
                                        <label  className="place" htmlFor="place">Place</label>
                                         <input id="place" type="text" className="place-input" name="Place" value={val.storageplace} />
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


/*    const [foodlist,setfoodlist]=useState({Itemname:'',emailId:'',storageplace:''})
    useEffect(()=>{
        axios.get("http://localhost:3001/item/read").then((response)=>{

            // setfoodlist(response);
            console.log(response);
        })
    },[]);*/

/* <Navbar/>
        <div>
            <p id="para">{x}</p>
            <img src={food} alt="Items"/>
        </div>
        </> */