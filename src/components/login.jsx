import React, { useState } from 'react';
// import logo from '../assets/img/logo-white.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';



const Login = () => {
  
    const [isVisible, setIsVisible] = useState(true);
  return (
    <>
    <div className="main-sec main-sec-logo">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="login-sec">
                        <div className="login-logo-sec">
                            {/* <img src={logo} alt="logo" /> */}
                            <h1>Pre-Authorization Overtime Request</h1>
                        </div>
                        {/* 
                        <div className='login-btn-sec'>
                            <button className='btn btn-nologin'>Continue Without Login</button>
                        </div> */}

                        <div className='login-details'>
                          <div className="col-md-12">
                            <div className='form-sec form-logn margin-login log-name'>
                                <Box
                                    component="form"
                                    sx={{ '& > :not(style)': { width: '100%' } }}
                                    noValidate
                                    autoComplete="off"
                                    >
                                    <TextField id="outlined-basic" label="Emp First Name" variant="outlined" />
                                    <span className='login-icon'><PersonIcon /></span>
                                </Box>
                            </div>
                            <div className='form-sec form-logn margin-login log-emp'>
                                <Box
                                    component="form"
                                    sx={{ '& > :not(style)': { width: '100%' } }}
                                    noValidate
                                    autoComplete="off"
                                    >
                                    <TextField id="outlined-basic" label="Emp Id" variant="outlined" />
                                    <span className='login-icon'><LockIcon /></span>
                                {/*                                     
                                <div className='visi-sec'>
                                    <span className='login-eye' onClick={() => setPassword(!password)}><VisibilityIcon /></span>
                                    <span className=' login-eye-off' onClick={() => setPassword(!password)}><VisibilityOffIcon /></span>
                                </div> */}

                                <span className='visi-sec' onClick={() => setIsVisible(!isVisible)}>
                                        {isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </span>
                                </Box>
                            </div>
                            <div className='form-sec form-logn margin-login log-email'>
                                <Box
                                    component="form"
                                    sx={{ '& > :not(style)': { width: '100%' } }}
                                    noValidate
                                    autoComplete="off"
                                    >
                                    <TextField id="outlined-basic" label="Emp Email" variant="outlined" />
                                    <span className='login-icon'><EmailIcon /></span>
                                </Box>
                            </div>

                            <div className='login-btn-sec logn-new'>
                           <Link to="/overtime-task"> <button className='btn btn-nologin btn-login'>Login</button></Link>
                        </div> 

                          </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Login;
