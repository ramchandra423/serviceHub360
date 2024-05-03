import React from 'react'
import 
{BsGrid1X2Fill,BsPower,BsPersonFillGear,BsBookmarkFill}
 from 'react-icons/bs'

 import { SlUser } from "react-icons/sl";
 import { MdFeedback } from "react-icons/md";
 import { Link, useNavigate } from 'react-router-dom';

function Sidebar({openSidebarToggle, OpenSidebar}) {
    const navigate = useNavigate()
    const handleLogout = () => {
        // Clear the token from localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("userType");
        // Redirect the user to the login page
        navigate("/login");
      };
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPersonFillGear className='icon'/> MY SERVICES
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsBookmarkFill className='icon'/> BOOKINGS
                </a>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/employee/profile">
                    <SlUser className='icon'/> PROFILE
                    </Link>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <MdFeedback className='icon'/> FEEDBACKS
                </a>
            </li>
            <li className='sidebar-list-item'>
                <div className='lt' onClick={handleLogout}>
                    <BsPower className='icon' /> Logout
                </div>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar