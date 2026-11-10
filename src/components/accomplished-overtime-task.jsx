import React from "react";
import Sidebar from "./sidebar";
import Headerapprover from "./header-approver";
import downloadicon from '../assets/img/downlod-icon.png';
import pdficon from '../assets/img/pdf-icon.png';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import filticon from '../assets/img//filter-icon.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import eyeicon from '../assets/img/eye-icon.png';


import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const AccomplishedOvertimeTask = () => {

  const [open, setOpen] = React.useState(false);
 
   const handleClickOpen = () => {
     setOpen(true);
   };
   const handleClose = () => {
     setOpen(false);
   };

     const [openpendstatus, setOpenPendStatus] = React.useState(false);
   
     const handleClickOpenPendStatus = () => {
      setOpenPendStatus(true);
     };
     const handleClosePendstatus = () => {
      setOpenPendStatus(false);
     };

  return (
   <>
      <Sidebar />
      <Headerapprover />
      <div className="content-main">
    <div className="main-sec-approves form-status-sec">
            
          <div className=' overtak-filt'>
            <div className='main-heading-sec main-heading-approve'>
              <div className='col-md-12'>
                <div className='head-inner'>
                  <h2>Accomplished Task</h2>
                  <div className='head-right'>
                      <button className='btn btn-submit btn-clear'>Clear Filter</button>
                      <img src={downloadicon} alt='downloadicon' />
                      <img src={pdficon} alt='pdficon' />
                  </div>
                </div>
              </div>
           
          </div>

        </div>

             {/* table section start */}
             <div className="over-table-sec">
        <div className='form-table-sec table-form-diffss ovrtme-sec-status over-task-pad'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='entry-sec'>
                <p>Show Entries</p>
                <select>
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='tot-sec'>
                <p>Total Forms <span className="value-tot">3</span></p>
              </div>
              
            </div>
            <div className='col-md-4'>
                

              <div className='search-sec'>
            
              
                <input type='text' placeholder='Search By' className='input-srch'/>
                <span><SearchIcon /></span>
              </div>
              
            </div>

            {/* table section start from here */}
            <div class="table-main-diff table-form-scroll table-mgr table-section-route table-contracts table-size-sc">
                    <table class="table table-diff table-bordered table-over">
                        <thead class="thead-before-sec thaed-colaps-sec">
                            <tr>
                              <th className='check-width'>
                                <FormGroup>
                                  <FormControlLabel  control={<Checkbox />} label="" />
                                </FormGroup>
                              </th>
                              <th className='form-width filter-cursr'>Form No <span className='filt-icon'><img src={filticon} /></span></th>
                              <th className='form-width filter-cursr'>Emp Id <span className='filt-icon'><img src={filticon} /></span></th>
                              <th className='form-width filter-cursr'>Initiator <span className='filt-icon'><img src={filticon} /></span></th>
                              <th className='sub-date-width filter-cursr'>Submission Date & Time <span className='filt-icon'><img src={filticon} /></span></th>
                              <th className='final-date-width filter-cursr'>Finalized Date & Time <span className='filt-icon'><img src={filticon} /></span></th>
                              <th className='final-date-width filter-cursr'>Form Details </th>
                              <th className='form-staus filter-cursr'>Action <span className='filt-icon'><img src={filticon} /></span></th>
                            </tr>
                        </thead>
                        <tbody class="tbody-light">
                            <tr>
                                <td class="check-width">
                                <FormGroup>
                                  <FormControlLabel  control={<Checkbox />} label="" />
                                </FormGroup> 
                                </td>
                                <td class="value-table">
                                  <p>03 </p>
                                </td>
                                <td class="value-table">
                                  <p>14612 </p>
                                </td>
                                <td class="value-table">
                                  <p>James Rosa </p>
                                </td>
                                <td class="table-inputs modl-dat-time">
                                    <p>02/11/2025</p>
                                    <p className='time-sec-mdl'>10:25 am</p>
                                </td>
                                <td class="table-inputs modl-dat-time">
                                </td>
                                <td class="visible-sec">
                                 <img src={eyeicon} alt='eyeicon'    onClick={handleClickOpen} />
                                </td>

                                <td class="pend-sec">
                                 <div className='pending-inner-sec'>
                                  <p onClick={handleClickOpenPendStatus}>Pending <VisibilityIcon /></p>
                                 </div>
                                </td>
                                 
                               
                               
                                </tr>

                                <tr>
                                  <td class="check-width">
                                  <FormGroup>
                                    <FormControlLabel  control={<Checkbox />} label="" />
                                  </FormGroup> 
                                  </td>
                                  <td class="value-table">
                                    <p>02 </p>
                                  </td>
                                  <td class="value-table">
                                    <p>11250 </p>
                                  </td>
                                  <td class="value-table">
                                    <p>James Rosa </p>
                                  </td>
                                  <td class="table-inputs modl-dat-time">
                                      <p>02/10/2025 </p>
                                      <p className='time-sec-mdl'>12:25am</p>
                                  </td>
                                  <td class="table-inputs modl-dat-time">
                                  <p>02/11/2025 </p>
                                  <p className='time-sec-mdl'>10:25am</p>
                                  </td>
                                  <td class="visible-sec">
                                  <img src={eyeicon} alt='eyeicon'   />
                                  </td>

                                  <td class="pend-sec appro-sec">
                                    <div className='pending-inner-sec approve-inner'>
                                        <p>Approved <VisibilityIcon /></p>
                                    </div>
                                    </td>
                                  
                                </tr>

                                <tr>
                                  <td class="check-width">
                                  <FormGroup>
                                    <FormControlLabel  control={<Checkbox />} label="" />
                                  </FormGroup> 
                                  </td>
                                  <td class="value-table">
                                    <p>01 </p>
                                  </td>
                                  <td class="value-table">
                                    <p>11200 </p>
                                  </td>
                                  <td class="value-table">
                                    <p>James Rosa </p>
                                  </td>
                                  <td class="table-inputs modl-dat-time">
                                      <p>02/05/2025</p>
                                      <p className='time-sec-mdl'>12:25am</p>
                                  </td>
                                  <td class="table-inputs modl-dat-time">
                                  </td>
                                  <td class="visible-sec">
                                  <img src={eyeicon} alt='eyeicon'   />
                                  </td>

                                  <td class="pend-sec decln-sec">
                                  <div className='pending-inner-sec decline-inner'>
                                      <p>Decline <VisibilityIcon /></p>
                                  </div>
                                  </td>
                                  
                                </tr>

                           
                              
                        </tbody>
                    </table>
                </div>
            {/* table section end from here */}

            {/* pagination section start here */}
            <div className='pagination-sec'>
              <div className='page-left'>
                <p><span><NavigateBeforeIcon /></span><p><span className='page-name'>Page</span> <input type="text" value="1"/> of 20</p><span><NavigateNextIcon /></span></p>
                </div>
            </div>

            {/* pagination section end here */}

          </div>
        </div>
        </div>
        {/* table section end */}


        </div>
        </div>

        {/* modal start here */}
            {/* modal code start for view section */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open} className='formdetails-sec'
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         Form Details
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
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
           <div className='form-details-inner'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='row'>
                  <div className='col-md-5 padding-rght'>
                   <h3>Emp Name <span>:</span></h3>

                  </div>
                  <div className='col-md-7'>
                    <p className='form-data'>James Rosa</p>
                    
                    </div>
                </div>

              </div>
              <div className='col-md-3'>
              <div className='row'>
                  <div className='col-md-5 padding-rght'>
                   <h3>Emp Id <span>:</span></h3>

                  </div>
                  <div className='col-md-7'>
                    <p className='form-data'>14612</p>
                    
                    </div>
                </div>
                
              </div>
              <div className='col-md-5'>
              <div className='row'>
                  <div className='col-md-5 padding-rght'>
                   <h3 className='home-sec'>Home Location<span>:</span></h3>

                  </div>
                  <div className='col-md-7'>
                    <p className='form-data'>CD</p>
                    
                    </div>
                </div>
                
              </div>
            </div>
              <div className='row modal-top-detail'>
                  <div className='col-md-2 padding-rght'>
                   <h3 className='email-sec'>Email Id <span>:</span></h3>
                  </div>
                  <div className='col-md-7 differ-width'>
                    <p className='form-data'>james41@test.org</p>
                  </div>
               </div>
               <div className="over-details">
               <div className="row">
                <div className='col-md-12'>
                  <div className='over-details-inner accom-table'>
                    {/* <h2>Overtime Details</h2> */}

                    <div class="table-main table-form-scroll table-modal">
                    <table class="table table-bordered">
                        <thead class="thead-light thead-travel thead-grant">
                            <tr>
                              <th className='modl-slno-width'>Sl No</th>
                              <th className='modl-work-loc-width'>Work Location</th>
                              <th className='modl-date-width'>Date</th>
                              <th className='modl-date-width'>Time</th>
                              <th className='modl-reson-width'>Reason</th>
                              <th className='modl-work-ord-width'>Work Order#</th>
                              <th className='modl-work-type-width'>Work Type</th>
                            </tr>
                        </thead>
                        <tbody class="tbody-light">
                            <tr>
                                <td class="table-inputs pursh-input">
                                  01 
                                </td>
                                <td class="table-inputs pursh-input">
                                District 
                                </td>
                                <td class="table-inputs pursh-input">
                                02/10/2025
                                </td>
                                <td class="table-inputs pursh-input">
                                12am - 8am 
                                </td>
                                <td class="table-inputs pursh-input">
                                Snow Removel
                                </td>
                                <td class="table-inputs pursh-input">
                                215963
                                </td>
                                <td class="table-inputs pursh-input">
                                Vacation
                                </td>
                             
                                </tr>
                        </tbody>
                    </table>
                </div>
                  </div>
                </div>
                </div>
               </div>
            </div>
          </Typography>
        
        </DialogContent>
      
      </BootstrapDialog>
      {/* modal code end fore view section */}
        {/* modal end here */}

        {/* modal for pending start */}
         {/* modal code for status start */}
      <BootstrapDialog
        onClose={handleClosePendstatus}
        aria-labelledby="customized-dialog-title"
        open={openpendstatus} className='formdetails-sec form-status form-pennf-accomp'
      >
    
        <IconButton
          aria-label="close"
          onClick={handleClosePendstatus}
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
           <div className='form-details-inner'>
        
          
               <div className="over-details">
               <div className="row">
                <div className='col-md-12'>
                  <div className='over-details-inner status-sec-head pend-accom-head'>
                    <h2>Approved on <span>02/11/2025</span> at <span>11:30 am</span></h2>
                      <div className="row comm-section">
                        <div className="comm-left">
                          <p className="comm-sec">Comment : </p>
                        </div>
                        <div className="comm-right">
                          <p className="comm-sec-data">Test Comment </p>
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
        {/* modal for pending end */}
   </>
  )
}

export default AccomplishedOvertimeTask;
