import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuList } from "./MenuList";
import "./Navbar.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <div className="logo">
        F<font>O</font>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
    </nav>
  );
};

export default Navbar;

// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import './Navbar.css';
// export default function Navbar() {
//     return (
//         <>
//         {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="./carousel">Navbar</a>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//               <div className="navbar-nav">
//                 <a className="nav-link active" aria-current="page" href="./home">Home</a>
//                 <a className="nav-link" href="./profile">Profile</a>
//                 <a className="nav-link" href="./calorie">Calorie</a>
//                 <a className="nav-link" href="./inventory">Inventory</a>
//                 <a className="nav-link disabled" href="/">Disabled</a>
                
//               </div>
//             </div>
//           </div>
//         </nav> */}
//         <nav className="navbar navbar-expand-lg navbar-mainbg active">
//           <NavLink className="navbar-brand navbar-logo" to="/carousel" exact>
//               FO
//           </NavLink>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation">
//             <i className="fas fa-bars
//             text-white"></i>
//           </button>

//            <div
//            className="collapse
//            navbar-collapse"
//            id="navbarSupportedContent">
//             <ul className="navbar-nav ml-auto">
//               <div className="hori-selector">
//                 <div className="left"></div>
//                 <div className="right"></div>
//               </div>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/home" exact>
                 
//                   Home
//                 </NavLink>
//               </li>

//               {/* <li className="nav-item">
//                 <NavLink className="nav-link" to="/profile" exact>
                 
//                   Profile
//                 </NavLink>
//               </li>

//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/calorie" exact>
                 
//                   Calorie
//                 </NavLink>
//               </li>

//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/inventory" exact>
                 
//                   Inventory
//                 </NavLink>
//               </li> */}
//             </ul>
           
//           </div> 
//         </nav>
//       </>
//     )
// }
