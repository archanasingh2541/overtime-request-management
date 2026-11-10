import React from 'react';
import { Link } from 'react-router-dom';
// import logowhite from '../assets/img/logo-img.png';
import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const RequestApprove = () => {
  return (
    <>
    <div className='requestapprove-sec'>
            <div className='reqst-appve-head'>
                <div className='reques-inner'>
                {/* <img src={logowhite} /> */}
                <p style={{paddingBottom:'25px'}}>Pre-Authorization Overtime Request</p>
                </div>
            </div> 

            <div className='reqst-appve-body'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='reqst-innerdd'>
                        <div className='reqst-inner'>
                            <div className='rqst-check'>
                                <CheckIcon />
                                </div>
                            </div>
                        </div>
                        <div className='rqst-data-sec'>
                            <h2>You are about to approve this request for form no 05</h2>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-sec legent-margin'>
                                        <Box
                                        component="form"
                                        sx={{ '& > :not(style)': { width: '100%' } }}
                                        noValidate
                                        autoComplete="off"
                                        >
                                        <TextField id="outlined-basic" label="Emp Name" variant="outlined" />
                                        </Box>
                                    </div>
                                </div>

                                <div className='col-md-6'>
                                    <div className='form-sec legent-margin'>
                                        <Box
                                        component="form"
                                        sx={{ '& > :not(style)': { width: '100%' } }}
                                        noValidate
                                        autoComplete="off"
                                        >
                                        <TextField id="outlined-basic" label="Emp Email" variant="outlined" />
                                        </Box>
                                    </div>
                                </div>

                                <div className='col-md-12 margin-action '>
                                    <div className='form-sec approve-comm legent-margin'>
                                        <Box
                                        component="form"
                                        sx={{ '& > :not(style)': {width: '100%' } }}
                                        noValidate
                                        autoComplete="off"
                                        >
                                        <TextField id="outlined-basic" label="Comment" variant="outlined" multiline
                                            rows={4}/>
                                        </Box>
                                    </div>
                        </div>
                        <div className='col-md-12'>
                  <div className='login-btn-sec add-more-sec apprv-sec'>
                            <button className='btn btn-nologin btn-add btn-approve-mail'>Approve </button>
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

export default RequestApprove;

