import React, { useContext } from "react";
import AuthContext from "../../store/AuthContext";
import { Outlet } from "react-router-dom";
import SignInForm from "./SignIn";
import MainSignup from "../MainSignup";
// import Login  from "./Login";
export const ProtectRoute = () => {
  const AuthCtx = useContext(AuthContext);
  // console.log(localStorage.getItem("token"))
  return AuthCtx.isLoggedIn || localStorage.getItem("token") ? (<Outlet />) : (<MainSignup/>);
};



// import React, { useContext } from 'react'
// import AuthContext from '../../store/AuthContext'
// import { Outlet } from 'react-router-dom'
// import Login from './Login';
// export const ProtectRoute = () => {
//     const AuthCtx = useContext(AuthContext);
//   return (
//     AuthCtx.isLoggedIn ? <Outlet/> : <Login/>
//   )
// }
