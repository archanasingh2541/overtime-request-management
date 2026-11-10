import React from "react";
// import imglogo from '../assets/img/logo-white.png';
import { Link, useLocation  } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const Header = () => {
    const location = useLocation(); 
    const isActive = (paths) => {
        return paths.some((path) => location.pathname.startsWith(path)); 
      };


  
  return (
    <>
      <div className='header-sec'>
        <div className='container'>
          {/* <div className='row'> */}
          <nav class="navbar navbar-expand-lg navbar-light ">
              <Link class="navbar-brand" to="/">
                {/* <img src={imglogo} alt='logo' /> */}
                <p>version 1.0</p>
              </Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item nav-menu">
                      <NavLink to="/start-overtime-form" className={({ isActive }) => `nav-link-menu ${isActive ? 'active' : ''}`}><DashboardIcon /> Start Overtime Form</NavLink>  
                    </li>
                    <li class="nav-item nav-menu">
                      <NavLink to="/form-status" className={({ isActive }) => `nav-link-menu ${isActive ? 'active' : ''}`}><InsertDriveFileIcon/> Form Status</NavLink>  
                    </li>
                </ul>
                </div>
               
                </nav>

                <div className="projt-name">
                    <h1>Pre-Authorization Overtime Request</h1>
                </div>


          </div>
          </div>
          {/* </div> */}
    </>
  )
}

export default Header;
