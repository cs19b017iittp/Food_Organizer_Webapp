import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import axios from 'axios';
// Signup page


export default function SignUp() {
    const addusertodatabase=()=>{
    axios.post("http://localhost:3001/insert",{username:username,emailId:email,password:password});
    }
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState(0)
    return (
        <>

            <div>
                <label>Email</label>
                <input type="email" onChange={(event) => { setemail(event.target.value) }} required></input>
                <br /><br />
                <label>Username</label>
                <input type="text" onChange={(event) => { setusername(event.target.value) }} required></input>
                <br /><br />
                <label>Phone</label>
                <input type="tel" required></input>
                <br /><br />
                <label>Password</label>
                <input type="password" onChange={(event) => { setpassword(event.target.value) }} required></input>
                <br /><br />
                <label>Confirm Password</label>
                <input type="password" required></input>
                <br />
                <Button to="/main"  onClick={addusertodatabase} primary='true'
                    dark='true'
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                    Enter
                </Button>
                <Link to="/loginpage">Already a user ?</Link>
            </div>
        </>
    )
}




