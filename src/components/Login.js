import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div>
        <h1>This is Login</h1>
        <Link to="/main" className="btn btn-primary">Go to</Link>
        </div>  
    );
}

export default Login
