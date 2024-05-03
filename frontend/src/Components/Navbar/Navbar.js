import React, { useEffect, useState } from 'react'
import './navbar.css'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'
import Logo from '../images/logo/logo-servicehub.png'
// import logo2 from "../images"
import AuthContext from '../../store/AuthContext'
import { jwtDecode } from 'jwt-decode'
export const Navbar = () => {
    const token = localStorage?.getItem('token') ?? "";
    let decoded;
    if (token) {
        decoded = jwtDecode(token);
    }
    // const id = decoded.userId;
    // const email = decoded.email;
    const role = decoded?.role ?? "";
    console.log(role)
    const AuthCtx = React.useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogout = () => {
        // Clear the token from localStorage
        localStorage.removeItem("token");
        AuthCtx.setIsLoggedIn(false)
        localStorage.removeItem("userType");
        // Redirect the user to the login page
        navigate("/login");
    };
    return (
        <div className='nav'>
            {!AuthCtx.isLoggedIn && !sessionStorage.getItem("token") ? (

                <div className='nav-details1'>
                    <div className='nav-logo1'>
                        <Link to='/'>
                            <img className='logo-icon' src={Logo} />
                        </Link>
                    </div>
                    <div className='nav-details2'>

                        <div className='nav-tt1'>
                            <Link to=''>Home</Link>

                        </div>

                        <div className='nav-tt1'>
                            <Link to='/login'>Login</Link>

                        </div>

                        <div className='nav-tt1'>
                            <Link to='/AboutUs'>About Us</Link>
                        </div>
                        <div className='nav-t1t'><Link to='/ContactUs'>Contact Us</Link>
                        </div>
                    </div>
                </div>) : (

                <div className='nav-details'>
                    <div className='nav-logo1'>
                        {role === 'admin' ? <><Link to='/admin'>
                            <img className='logo-icon' src={Logo} />
                        </Link></> : role === 'employee' ? <><Link to='/employee'>
                            <img className='logo-icon' src={Logo} />
                        </Link></> : <><Link to='/'>
                            <img className='logo-icon' src={Logo} />
                        </Link></>}

                    </div>
                    {/* <div className='tt'> <span>Welcome to Employee Pannel</span></div> */}
                    {role === 'user' ? <>
                    <div className='nav-details3'>
                    <div className='nav-tt1'>
                            <Link to=''>Home</Link>
                        </div>
                        <div className='nav-tt1'>
                            <Link to='/mybookings'>My Bookings</Link>
                        </div>
                        {/* <div className='nav-tt1'>
                            <Link to='/AboutUs'>About Us</Link>
                        </div> */}
                        <div className='nav-t1t'><Link to='/ContactUs'>Contact Us</Link>
                        </div>
                        </div>
                    </> : <></>}

                    {role === 'admin' ? <> <div className='nav-tt1'>
                        Welcome to Admin Pannel

                    </div></> : <></>}
                    {role === 'employee' ? <> <div className='nav-tt1'>
                        Welcome to Employee Pannel

                    </div></> : <></>}
                    <div className='nav-logout' onClick={handleLogout}><span></span>Logout</div>

                </div>
            )}
        </div>
    )
}
