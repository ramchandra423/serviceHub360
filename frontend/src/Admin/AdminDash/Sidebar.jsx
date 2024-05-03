import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill,BsHouseGearFill,BsPower}
 from 'react-icons/bs'
 import { Link } from 'react-router-dom';
 import { useNavigate } from "react-router-dom";

 import { SlUser } from "react-icons/sl";

function Sidebar({openSidebarToggle, OpenSidebar}) {
    const navigate= useNavigate()
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
            {/* <div className='sidebar-brand'>
                <BsHouseGearFill  className='icon_header'/> 
            </div> */}
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to=''>
                    <BsGrid1X2Fill className='icon'/> Dashboard
                    </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='user'>
                    <BsPeopleFill className='icon'/> User
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to='employee'>
                <SlUser className='icon'/> Employees
                    
                </Link>
            </li>
            <li className='sidebar-list-item'>
            <Link to='service'>
                <BsFillGrid3X3GapFill className='icon'/> Services
                </Link>
            </li>

            {/* <li className='sidebar-list-item'>
                <Link>
                    <BsFillGearFill className='icon'/> Setting
                </Link>
            </li> */}
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