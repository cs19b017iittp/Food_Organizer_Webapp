import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
// import Lo from './LoginSignup';
import MainNavbar from './MainNavbar';
import Navbar from '../components/Navbar';
import SignUp from './SignUp';
import HomePage from '../Pages';

class HomeMain extends Component {
    render() { 
        return (
            <>
            <HomePage/>
        {/* <Router>
            <div className="Main">
                
                <body>
                <MainNavbar/>
                        <br/>
                        <Route path="/home" component={LoginSignup}/>
                        <Route path="/signup" component={SignUp}/>
                </body>  
            </div> 
         </Router> */}
        
        
        </>
        );
    }
}
export default HomeMain;

// import React,{useState} from 'react';
// import Navbar from '../components/Navbar/Navbar';
// import Footer from './Footer';
// import InfoSection from './InfoSection';
// import { homeObjOne, homeObjThree, homeObjTwo } from './InfoSection/Data';
// import Info from './MainSection';
// import Sidebar from './Sidebar';



// const HomeMain = () =>{
//     const [isOpen,setIsOpen] = useState(false)

//     const toggle = () => {
//         setIsOpen(!isOpen)
//     }

//     return(
//         <>
//             <Sidebar isOpen={isOpen} toggle={toggle}/>
//             <Navbar toggle={toggle}/>
//             <Info/>
//             <InfoSection {...homeObjOne}/>
//             <InfoSection {...homeObjTwo}/>
//             <InfoSection {...homeObjThree}/>
//             <Footer/>
//         </>
//     );
// } 
// export default HomeMain