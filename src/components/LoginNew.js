import React from "react";
// import loginimg from "../../images/loginimg.jpg";
import { Link } from "react-router-dom";
// import "./style.css";

export class LoginPage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return <div className="base-Container">
            <div className="header">Login</div>
            <div className="content">
                {/* <div className="image">
                    <img src={loginimg} alt="image" />
                </div> */}
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="Username">Username</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                {/* <button type="button" className="btn">Login</button> */}
                <Link to="/main" className="btn btn-primary">Go to</Link>
            </div>
        </div>
    }





}