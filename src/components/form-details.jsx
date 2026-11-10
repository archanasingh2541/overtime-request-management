import React from 'react';
import Sidebar from './sidebar';
import Headerapprover from './header-approver';
import downloadicon from '../assets/img/downlod-icon.png';
import pdficon from '../assets/img/pdf-icon.png';
import { Link } from 'react-router-dom';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));


const FormDetails = () => {
      const [openstatus, setOpenStatus] = React.useState(false);
    
      const handleClickOpenStatus = () => {
        setOpenStatus(true);
      };
      const handleClosestatus = () => {
        setOpenStatus(false);
      };

      

      const [openrejectstatus, setOpenRejectStatus] = React.useState(false);
    
      const handleClickOpenRejectStatus = () => {
        setOpenRejectStatus(true);
      };
      const handleCloseRejectstatus = () => {
        setOpenRejectStatus(false);
      };
    
  return (
    <>
      <Sidebar />
      <Headerapprover />
      <div className="content-main">
        <div className="main-sec-approves form-status-sec form-details">
            
          <div className=' overtak-filt'>
            <div className='main-heading-sec main-heading-approve'>
              <div className='col-md-12'>
                <div className='head-inner'>
                  <h2>Overtime Task Details</h2>
                  <div className='head-right etails-head'>
                      
                      <img src={downloadicon} alt='downloadicon' />
                      <img src={pdficon} alt='pdficon' />
                  </div>
                </div>
              </div>
           
          </div>

        </div>

            <div className='back-sec'>
                <Link to="/overtime-task"> <KeyboardDoubleArrowLeftIcon /><span>Back</span> </Link>
            </div>

            <div className="form-detail-sec">
                <h2>Form Data</h2>
                <div className='form-detail-inner'>
                    <div className='row'>
                        <div className=' form-detail-left'>
                            <div className='row'>
                                <div className='form-detail-left-inner'>
                                    <div className='form-details-label'>
                                        <h3>Form No</h3>
                                        <p className='semicolon'>:</p>
                                    </div>

                                </div>
                                <div className='form-detail-right-inner'>
                                    <div className='form-details-value'>
                                        <p>05</p>
                                    </div>
                                    
                                    </div>
                            </div>

                            <div className='row'>
                                <div className='form-detail-left-inner'>
                                    <div className='form-details-label'>
                                        <h3>Emp Name</h3>
                                        <p className='semicolon'>:</p>
                                    </div>

                                </div>
                                <div className='form-detail-right-inner'>
                                    <div className='form-details-value'>
                                        <p>Jose Lee</p>
                                    </div>
                                    
                                    </div>
                            </div>
                            <div className='row'>
                                <div className='form-detail-left-inner'>
                                    <div className='form-details-label'>
                                        <h3>Home Location
                                        </h3>
                                        <p className='semicolon'>:</p>
                                    </div>

                                </div>
                                <div className='form-detail-right-inner'>
                                    <div className='form-details-value'>
                                        <p>PS#24</p>
                                    </div>
                                    
                                    </div>
                            </div>

                        </div>
                        <div className='form-detail-midle'>
                          <div className='border-after'></div>
                        </div>
                        <div className=' form-detail-right'>
                         
                        <div className='row'>
                                <div className='form-detail-left-innerss'>
                                    <div className='form-details-label'>
                                        <h3>Emp Id</h3>
                                        <p className='semicolon'>:</p>
                                    </div>

                                </div>
                                <div className='form-detail-right-innerss'>
                                    <div className='form-details-value'>
                                        <p>15263</p>
                                    </div>
                                    
                                    </div>
                            </div>

                            <div className='row'>
                                <div className='form-detail-left-innerss'>
                                    <div className='form-details-label'>
                                        <h3>Email Id</h3>
                                        <p className='semicolon'>:</p>
                                    </div>

                                </div>
                                <div className='form-detail-right-innerss'>
                                    <div className='form-details-value'>
                                        <p>jose12@test.org</p>
                                    </div>
                                    
                                    </div>
                            </div>
                            <div className='row'>
                                <div className='form-detail-left-innerss'>
                                    <div className='form-details-label'>
                                        <h3>initiate by

                                        </h3>
                                        <p className='semicolon'>:</p>
                                    </div>

                                </div>
                                <div className='form-detail-right-innerss'>
                                    <div className='form-details-value'>
                                        <p>Jose Lee</p>
                                    </div>
                                    
                                    </div>
                            </div>


                        </div>


                    </div>

                     <div className='row'>
                      

                        <div className=' form-detail-left '>
                            <div className='row'>
                                <div className='form-detail-left-inner-date'>
                                    <div className='form-details-label'>
                                        <h3>Submission Date & Time</h3>
                                        <p className='semicolon'>:</p>
                                    </div>

                                </div>
                                <div className='form-detail-right-inner-date'>
                                    <div className='form-details-value'>
                                        <p>02/12/2025  10:00 am</p>
                                    </div>
                                    
                                    </div>
                            </div>
                            </div>


                        </div>

                </div>
            </div>

            <div className='details-over'>
            
                <h2>Overtime Details</h2>

                 <div class="table-main table-form-scroll table-mgr table-section-route table-contracts table-size-sc detail-table">
                    <table class="table table-bordered">
                        <thead class="thead-light thead-travel thead-grant">
                            <tr>
                              <th className='slno-width'>Sl No</th>
                              <th className='work-loc-width'>Work Location</th>
                              <th className='date-width'>Date</th>
                              <th className='date-width'>Time</th>
                              <th className='reson-width'>Reason</th>
                              <th className='work-ord-width'>Work Order#</th>
                              <th className='work-type-width'>Work Type</th>
                            </tr>
                        </thead>
                        <tbody class="tbody-light">
                            <tr>
                                <td class="table-inputs pursh-input">
                                  01 
                                </td>
                                <td class="table-inputs pursh-input">
                                Ms#7
                                </td>
                                <td class="table-inputs pursh-input">
                                02/10/2025 
                                </td>
                                <td class="table-inputs pursh-input">
                                12am - 8am
                                </td>
                                <td class="table-inputs pursh-input">
                                Install drop ceiling
                                </td>
                                <td class="table-inputs pursh-input">
                                202563
                                </td>
                                <td class="table-inputs pursh-input">
                                Vacation 
                                </td>

                            
                                </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>

            <div className='actin-btn'>
            <div className='row'>
                  <div className='col-md-12'>
                    <div className='submit-secs'>
                        <button className='btn btn-submit btn-approve' onClick={handleClickOpenStatus}>Approve</button>
                        <button className='btn btn-reset btn-reject' onClick={handleClickOpenRejectStatus}>Reject</button>
                    </div>
                  </div>
                  </div>
                  </div>


        </div>
    </div>

    {/* modal section start */}
       {/* modal code for status start */}
       <BootstrapDialog
        onClose={handleClosestatus}
        aria-labelledby="customized-dialog-title"
        open={openstatus} className='formdetails-sec form-status approve-modal approve-modalss'
      >
    
        <IconButton
          aria-label="close"
          onClick={handleClosestatus}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
           <div className='form-details-inner '>
        
          
               <div className="over-details">
               <div className="row">
                <div className='col-md-12'>
                  <div className='over-details-inner status-sec-head app-head'>
                    <h2>Final Approval</h2>

                 <div className='appro-field'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='form-sec'>
                                <Box
                                component="form"
                                sx={{ '& > :not(style)': { width: '100%' } }}
                                noValidate
                                autoComplete="off"
                                >
                                <TextField id="outlined-basic" label="Business Administrator" variant="outlined" />
                                </Box>
                            </div>
                        </div>
                        <div className='col-md-12 margin-action'>
                            <div className='form-sec'>
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
                    </div>
                 
                    <div className='submit submit-action'>
                        <div className='row'>
                        <div className='col-md-12'>
                            <div className='submit-secs'>
                                <button className='btn btn-submit'>Submit</button>
                            </div>
                        </div>
                        </div>
                
                    </div>
                 </div>

                    
                  </div>
                </div>
                </div>
               </div>
            </div>
          </Typography>
        
        </DialogContent>
      
      </BootstrapDialog>
      {/* modal code for status end */}


        {/* reject modal code for status start */}
        <BootstrapDialog
        onClose={handleCloseRejectstatus}
        aria-labelledby="customized-dialog-title"
        open={openrejectstatus} className='formdetails-sec form-status approve-modal'
      >
    
        <IconButton
          aria-label="close"
          onClick={handleCloseRejectstatus}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
           <div className='form-details-inner '>
        
          
               <div className="over-details">
               <div className="row">
                <div className='col-md-12'>
                  <div className='over-details-inner status-sec-head app-head'>
                    <h2>Reason For Rejection</h2>

                 <div className='appro-field'>
                    <div className='row'>
                        <div className='col-md-12 margin-action-rejt'>
                            <div className='form-sec'>
                                <Box
                                component="form"
                                sx={{ '& > :not(style)': {width: '100%' } }}
                                noValidate
                                autoComplete="off"
                                >
                                <TextField id="outlined-basic" label="Reason" variant="outlined" multiline
                                    rows={4}/>
                                </Box>
                            </div>
                        </div>
                    </div>
                 
                    <div className='submit submit-action'>
                        <div className='row'>
                        <div className='col-md-12'>
                            <div className='submit-secs'>
                                <button className='btn btn-submit'>Submit</button>
                            </div>
                        </div>
                        </div>
                
                    </div>
                 </div>

                    
                  </div>
                </div>
                </div>
               </div>
            </div>
          </Typography>
        
        </DialogContent>
      
      </BootstrapDialog>
      {/* reject modal code for status end */}
    {/* modal section end */}
    </>
  )
}

export default FormDetails;
