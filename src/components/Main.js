import React from 'react';
import Home from '../Home';
import Navbar from './Navbar';


function Main(){
    
    return (
        <>
        {/* <Router> */}
            <Home/>
            {/* <Switch>
            <Route path="/home" component={Home} exact/>
            <Route path="/profile" component={Profile} exact/>
            <Route path="/calorie" component={Calorie} exact/>
            </Switch> */}
        {/* </Router> */}
        </>
    );
}
export default Main;