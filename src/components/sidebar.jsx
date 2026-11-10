import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link, useLocation  } from "react-router-dom";
// import logo from '../assets/img/logo-white.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DescriptionIcon from '@mui/icons-material/Description';
import Downloadimg from '../assets/img/download.png';
import LogoutIcon from '@mui/icons-material/Logout';


const Sidebar = () => {

  const location = useLocation(); 
  const isActiveMenu = (paths) => {
    return paths.some((path) => location.pathname.startsWith(path));
  };
  return (
    <>
      <aside className="aside aside-fixed admin-fixed">
      <div className="aside-header">
    
    
        <NavLink to="#" className="aside-logo" style={{width:'200px'}}>
      
        <img  style={{height: '64px', margin: '0 auto', display: 'block'}}/>
        </NavLink>

        
    
      </div>
      <div className='user-details'>

          <AccountCircleIcon />
          <p>Kiel Dobson</p>
          <p>25638</p>
        </div>

      <div className="aside-body scrolling">
       
        <ul className="nav nav-aside"  style={{display:'block'}}>
          <li>
            <NavLink to="/overtime-task"  className={({ isActive }) => `nav-link-menu ${isActive || isActiveMenu(['/form-details']) ? 'activeapprove' : ''} `} ><DashboardIcon /><span>Overtime task</span></NavLink>
           
            </li>
          <li><NavLink to="/accomplished-overtime-task" className={({ isActive }) => `nav-link-menu ${isActive ? 'activeapprove' : ''}`}><DescriptionIcon /><span>Accomplished  Overtime Task</span></NavLink></li>
          <li><NavLink to="/report" className={({ isActive }) => `nav-link-menu ${isActive ? 'activeapprove' : ''}`}><img src={Downloadimg} /><span>Report</span></NavLink></li>
          <li><NavLink to="/" className={({ isActive }) => `nav-link-menu ${isActive ? 'activeapprove' : ''}`}><LogoutIcon /><span>Logout</span></NavLink></li>
        </ul>
      </div>
    </aside>
    </>
  )
}

export default Sidebar

