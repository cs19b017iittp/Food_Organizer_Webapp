import React ,{useState}from "react";
import { Link } from "react-router-dom";
import loginimg from "../../images/loginimg.jpg"
import "./style.css";
import { Button } from "../Button";
import Inventory from "../Inventory";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
// import {LoginPage,a} from './components/loginPage/loginNew';
// login page contains inputs of email and password
var b=""
  export default function LoginPage() {
        const [logid,setlogid]=useState("")

        const assignid=()=>{
           b=document.getElementById("loginid").value
           localStorage.setItem("id",b)
          setlogid(b)
            console.log(b)
            console.log(logid)
        }
     return (
       <>
        <div className="base-Container">
            <div className="h"><h2>LOGIN</h2></div>
            <div className="content">
                <div className="image">
                    <img src={loginimg} alt="image" />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="Username">Username</label>
                        <input id="loginid" onChange={(e)=>{setlogid(e.target.value) 
                        b=logid}} type="text" value={logid} name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                {/* <button type="button" className="btn">Login</button> */}
                {/* <Link to="/main"   className="btn btn-primary">LOGIN</Link> */}
                {/* <Button to="/main"  onClick={assignid} primary='true'
                    dark='true'
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                    Login
                </Button> */}
                 <Button to={{pathname:"/inventory" ,state:logid}} onClick={assignid} primary='true'
                    dark='true'
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                    Login
                </Button>
             {/* <Router>
                <Route path="/inventory"><Inventory id1={logid} ></Inventory></Route>
                </Router> */}
            </div>
        </div>
       </>
     )
        
 }

 