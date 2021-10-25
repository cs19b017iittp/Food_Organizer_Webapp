import React from 'react';
import { Link } from 'react-router-dom';
import Main from './Main';
// import Navbar from '../components/Navbar';

const Login = () => {
    return(
        <div>
            {/* <Main/> */}
        <h1>This is Login</h1>
        <Link to="/main" className="btn btn-primary">Go to</Link>
        </div>  
    );
}

export default Login
