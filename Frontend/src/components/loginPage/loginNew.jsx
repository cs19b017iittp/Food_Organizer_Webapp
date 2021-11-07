import React from "react";
import { Link } from "react-router-dom";
import loginimg from "../../images/loginimg.jpg"
import "./style.css";

var x="";
// login page contains inputs of email and password
export class LoginPage extends React.Component{

    constructor(props){
        super(props);
    }
    sendData = () => {
        x = document.getElementById("uname").value
        console.log(x)
        localStorage.setItem("userName",x);
    }
    

    render(){
        return <div className="base-Container">
            <div className="h"><h2>LOGIN</h2></div>
            <div className="content">
                <div className="image">
                    <img src={loginimg} alt="image" />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="Username">Username</label>
                        <input id="uname" type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                {/* <button type="button" className="btn">Login</button> */}
                <Link to="/main" onClick={this.sendData} className="btn btn-primary" >LOGIN</Link>
            </div>
        </div>
    }





}