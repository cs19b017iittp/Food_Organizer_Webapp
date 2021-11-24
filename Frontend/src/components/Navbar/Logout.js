import React from "react";
import { useHistory } from "react-router";
import { NavBtn, NavBtnLink } from "./NavbarItems";

export default function Logout() {
  // var history = useHistory();
  // const logout = () => {
  //     history.push("/")
  // }
  return (
    <>
      {/* <button className="btn btn-primary" onClick={logout}>Logout <i className="fa fa-sign-out"></i></button> */}
      <NavBtn>
        <NavBtnLink to="/">
          Logout <i class="fa fa-sign-out"></i>
        </NavBtnLink>
      </NavBtn>
    </>
  );
}
