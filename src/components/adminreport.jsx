import React from "react";
import Sidebar from "./sidebar";
import Headerapprover from "./header-approver";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DownloadIcon from '@mui/icons-material/Download';
import SidebarAdmin from "./sidebar-admin";


const Adminreport = () => {
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

   const [location, setLocation] = React.useState('');
  
    const handleChangeLocation = (event) => {
      setLocation(event.target.value);
    };


  return (
   <>
     <SidebarAdmin />
     <Headerapprover />
      <div className="content-main">
    <div className="main-sec-approves form-status-sec">
            
          <div className=' overtak-filt'>
            <div className='main-heading-sec main-heading-approve'>
              <div className='col-md-12'>
                <div className='head-inner'>
                  <h2>Report</h2>
                
                </div>
              </div>
           
          </div>

        </div>
        <div className="over-table-sec">
          <div className="report-sec">
            <div className="row">
              <div className="col-md-3">
                <div className="form-sec selct-simple">
                <FormControl sx={{  minWidth: '100%' }}>
                  <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={status}
                    label="Status"
                    onChange={handleChange}
                  >
                   
                    <MenuItem value={10}>Approved</MenuItem>
                    <MenuItem value={20}>Pending</MenuItem>
                    <MenuItem value={30}>Rejected</MenuItem>
                  </Select>
                </FormControl>
                </div>

              </div>
              <div className="col-md-3">

              <div className='form-sec form-selectss'>
                  <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Home Location</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={location}
                          label="Home Location"
                          onChange={handleChangeLocation}
                        >
                          <MenuItem value={10}>PS #4</MenuItem>
                          <MenuItem value={20}>CD</MenuItem>
                          <MenuItem value={30}>PS #24</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                
              </div>
              <div className="col-md-3">
                  <div className='start-date-cale'>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={[
                              
                                  'MobileDatePicker',
                                
                                ]}
                              >
                                <DemoItem >
                                  <MobileDatePicker   label="Start Date"/>
                                </DemoItem>
                              
                            </DemoContainer>
                            <span className='calen-icon report-date'>
                              <CalendarMonthIcon />
                          </span>
                          </LocalizationProvider>
                    </div>
              </div>
              <div className="col-md-3">
                  <div className='start-date-cale'>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={[
                              
                                  'MobileDatePicker',
                                
                                ]}
                              >
                                <DemoItem >
                                  <MobileDatePicker   label="End Date"/>
                                </DemoItem>
                              
                            </DemoContainer>
                            <span className='calen-icon report-date'>
                              <CalendarMonthIcon />
                          </span>
                          </LocalizationProvider>
                    </div>
              </div>
            </div>
            
            <div className='row '>
                  <div className='col-md-12'>
                  <div className='login-btn-sec add-more-sec downl-sec'>
                            <button className='btn btn-nologin btn-add btn-report'>Download <span><i class="fa-solid fa-download"></i></span></button>
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

export default Adminreport;

