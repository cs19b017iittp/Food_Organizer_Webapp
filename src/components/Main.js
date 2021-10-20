import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Login from './Login';
import LoginSignup from './LoginSignup';
import MainNavbar from './MainNavbar';
import SignUp from './SignUp';


function Main(){
    return (
        <Router>
            <div className="Main">
                <body>
                    <MainNavbar/>
                        <br/>
                        <Route path="/loginsignup" component={LoginSignup}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/signup" component={SignUp}/>
                </body> 
            </div>
        </Router>
    );
}
export default Main;