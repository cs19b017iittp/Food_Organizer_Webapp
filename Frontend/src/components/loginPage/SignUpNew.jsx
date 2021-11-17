// import React from "react";
// import loginimg from "../../images/loginimg.jpg";
// import "./style.css";

// export class SignUpPage extends React.Component{

//     constructor(props){
//         super(props);
//     }

//     render(){
//         return <div className="base-Container">
//             <div className="header">SignUp</div>
//             <div className="content">
//                 <div className="image">
//                     <img src={loginimg} alt="image" />
//                 </div>
//                 <div className="form">
//                     <div className="form-group">
//                         <label htmlFor="Username">Username</label>
//                         <input type="text" name="username" placeholder="username" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="Email">Email</label>
//                         <input type="text" name="Email" placeholder="Email" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="phoneNumber">PhoneNumber</label>
//                         <input type="text" name="phoneNumber" placeholder="phoneNumber" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="password">password</label>
//                         <input type="text" name="password" placeholder="password" />
//                     </div>
//                 </div>
//             </div>
//             <div className="footer">
//                 <button type="button" className="btn">SignUp</button>

//             </div>
//         </div>
//     }
// }

import React, { useState } from 'react'
import SignUp from '../SignUp'
import Main from '../Main'
import './Signup.css'

export const SignUpNew = () => {
    
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    function submitForm(){
        setIsSubmitted(true);
    }
    return (
        <>
        <div className="form-container">
            <span className='close-btn'>×</span>
            <div className='form-content-left'>
            <img className='form-img' src='../../images/svg-1.svg' alt='spaceship' />
            </div>
            {!isSubmitted ? <SignUp submitForm={submitForm} /> : <Main/>}
        </div>
        </>
    )
}
