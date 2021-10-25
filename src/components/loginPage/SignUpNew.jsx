import React from "react";
import loginimg from "../../images/loginimg.jpg";
import "./style.scss";

export class SignUpPage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return <div className="base-Container">
            <div className="header">SignUp</div>
            <div className="content">
                <div className="image">
                    <img src={loginimg} alt="image" />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="Username">Username</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input type="text" name="Email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">PhoneNumber</label>
                        <input type="text" name="phoneNumber" placeholder="phoneNumber" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input type="text" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">SignUp</button>

            </div>
        </div>
    }
}