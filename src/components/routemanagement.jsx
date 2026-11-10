import React,{useState} from 'react';
import SidebarAdmin from './sidebar-admin';
import Headerapprover from './header-approver';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import downloadicon from '../assets/img/downlod-icon.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import BackupIcon from '@mui/icons-material/Backup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';


import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Fade from '@mui/material/Fade';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import filticon from '../assets/img//filter-icon.png';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const Routemanagement = () => {
    const [value, setValue] = React.useState(0);
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      const[userclearshow, setUserclearshow] = useState(false);
      
          const handleroute = () => {
            setUserclearshow(true);
          }
          const handlerouteadd = () => {
            setUserclearshow(false);
          }

          const homeloc = [
            { label: 'CD' },
            { label: 'PS#24' },
            { label: 'PS#25' },
          ]; 

          const approvname = [
            { label: 'John test' },
            { label: 'John Smith' },
          ];
           const [userbulk, setUserbulk] = useState(false);

           const [moreapprove, setMoreapprove] = useState(false);

           const handlerouteaddrow = () => {
            setMoreapprove(true);
              }

              const [expanded, setExpanded] = React.useState(false);

              const handleExpansion = () => {
                setExpanded((prevExpanded) => !prevExpanded);
              };
                 const [openroute, setOpenRoute] = React.useState(false);
                 
                   const handleClickOpenroute = () => {
                    setOpenRoute(true);
                   };
                   const handleCloseroute = () => {
                    setOpenRoute(false);
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
                  <h2>Route Management</h2>
                  <div className='head-right' style={{display: userclearshow ? 'flex' : 'none'}} >
                      <button className='btn btn-submit btn-clear'>Clear Filter</button>
                      <img src={downloadicon} alt='downloadicon' />
                  </div>
                
                </div>
              </div>
           
          </div>

        </div>

        <div className="tab-sec  overtak-filt">
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab className="add-tab"  label="Add Route" {...a11yProps(0)} onClick={handlerouteadd}/>
              <Tab className="manage-tab" label="Manage Route" {...a11yProps(1)} onClick={handleroute}/>
              
            </Tabs>
          </Box>
     


          <div className="manage-all-sec manage-all-route">
          <CustomTabPanel value={value} index={0} className="add-user-tab">

            <div className='tab-sec-inner'>
                <div className='row'>
                      <div className="col-md-4 appr-name-sec loc-user">
                        <div className='user-form form-sec'>
                        <Autocomplete
                            disablePortal
                            options={homeloc}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Choose Location" />}
                        />
                        </div>
                    </div>
                    <div className='col-md-8'>
                    <div className="btn-upload-sec" style={{display: userclearshow ? 'none' : 'flex'}}>
                        <div class="file btn btn-lg btn-primary btn-uplod  btn-route-uplod">
                                        <BackupIcon />	Bulk Upload
                                            <input type="file" name="file" className="bulk-sec-user"/>
                            
                                        </div>
                            <div className="upload-arrow btn-uplods route-down-sec"  onClick={() => setUserbulk(!userbulk)}>
                            <ArrowDropDownIcon />
                            </div>
                            <div >
                            <div className="down-sampl down-sampl-route " style={{display: userbulk ? 'flex' : 'none'}}>
                                <a>Download CSV Template</a>
                            </div>
                            </div>
                        

                        </div>
                    </div>
                </div>

                <div className='creat-route-sec'>
                    <div className="row">
                       <p className='cret-rout-para'>Create Route</p>
                        <div className='row'>
                        <div className="col-md-4 margin-rote-name">
                        <div className='form-sec user-form rout-name'>
                            <Box
                            component="form"
                            sx={{ '& > :not(style)': { width: '100%' } }}
                            noValidate
                            autoComplete="off"
                            >
                            <TextField id="outlined-basic" label="Route Name" variant="outlined" />
                            </Box>
                        </div>

                            </div>
                        </div>
                    </div>
                   </div>
                   <div className='creat-route-sec-inner'>
                    <div className='row' >
                        
                        <div className='col-md-2'>
                        <div className='form-sec user-form rout-name'>
                            <Box
                            component="form"
                            sx={{ '& > :not(style)': { width: '100%' } }}
                            noValidate
                            autoComplete="off"
                            >
                            <TextField id="outlined-basic" label="Rank" variant="outlined" />
                            </Box>
                        </div>
                        </div>
                        <div className="col-md-4 appr-name-sec loc-user app-rote-name">
                        <div className='user-form form-sec'>
                        <Autocomplete
                            disablePortal
                            options={approvname}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Approver Name" />}
                        />
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='pend-sec add-row-ses'>
                            <div className='edit-inner-sec' onClick={handlerouteaddrow}>
                                <p><AddIcon /></p>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div className='row added-rows' style={{display: moreapprove ? 'flex' : 'none'}}>
                        
                        <div className='col-md-2'>
                        <div className='form-sec user-form rout-name'>
                            <Box
                            component="form"
                            sx={{ '& > :not(style)': { width: '100%' } }}
                            noValidate
                            autoComplete="off"
                            >
                            <TextField id="outlined-basic" label="Rank" variant="outlined" />
                            </Box>
                        </div>
                        </div>
                        <div className="col-md-4 appr-name-sec loc-user app-rote-name">
                        <div className='user-form form-sec'>
                        <Autocomplete
                            disablePortal
                            options={approvname}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Approver Name" />}
                        />
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='pend-sec add-row-ses dele-sec'>
                            <div className='edit-inner-sec' onClick={handlerouteaddrow}>
                                <p><DeleteIcon /></p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='row add-rout-bt'>
                        <div className='col-md-12'>
                            <div className='btn-absol'>
                            <div className='btn-sec'>
                                <button className='btn btn-submit btn-approve'>Add</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className='all-route-show'>
                        <div className='row'>
                            <h3 className='all-name'>All Route</h3>
                            </div>
                        <div className='row'>

                            <div className='col-md-12 accor-sec'>
                            <Accordion
                                expanded={expanded}
                                onChange={handleExpansion}
                                slots={{ transition: Fade }}
                                slotProps={{ transition: { timeout: 400 } }}
                                sx={[
                                expanded
                                    ? {
                                        [`& .${accordionClasses.region}`]: {
                                        height: 'auto',
                                        },
                                        [`& .${accordionDetailsClasses.root}`]: {
                                        display: 'block',
                                        },
                                    }
                                    : {
                                        [`& .${accordionClasses.region}`]: {
                                        height: 0,
                                        },
                                        [`& .${accordionDetailsClasses.root}`]: {
                                        display: 'none',
                                        },
                                    },
                            ]}
                         >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                        <Typography component="span"><span className='rote-name-acc'>Test Route </span>
                            <span className='edit-sec-rout'><EditIcon /><DeleteIcon className='dele-rout-sec'/></span>
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        <div className="over-details">
                            <div className="row">
                                <div className='col-md-12'>
                                <div className='over-details-inner accom-table route-appr-details'>
                                    {/* <h2>Overtime Details</h2> */}

                                    <div class="table-main table-form-scroll table-modal">
                                    <table class="table table-bordered">
                                        <thead class="thead-light thead-travel thead-grant">
                                            <tr>
                                            <th className='modl-slno-width'>Rank</th>
                                            <th className='modl-work-loc-width'>Approver name</th>
                                            </tr>
                                        </thead>
                                        <tbody class="tbody-light">
                                            <tr>
                                                <td class="table-inputs pursh-input">
                                                22 
                                                </td>
                                                <td class="table-inputs pursh-input">
                                                Kie Dobson
                                                </td>
                                            
                                            
                                                </tr>
                                                <tr>
                                                <td class="table-inputs pursh-input">
                                                35 
                                                </td>
                                                <td class="table-inputs pursh-input">
                                                Rashad Tarruella
                                                </td>
                                            
                                            
                                                </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </Typography>
                        </AccordionDetails>
                            </Accordion>
    
                                </div>
                        </div>
                    </div>

                    <div className='submit submit-route'>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='submit-secs submit-adduser'>
                        <button className='btn btn-submit'>Add</button>
                        <button className='btn btn-reset'>Reset</button>
                    </div>
                  </div>
                  </div>
                </div>
            </div>
         
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1} className="manage-user-tab">

          <div className="manage-user-list">
              <div className='form-table-sec table-form-diffss form-table-user'>
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
                <p>Total <span className="value-tot">2</span></p>
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
                    <table class="table table-diff table-bordered">
                        <thead class="thead-before-sec thaed-colaps-sec">
                            <tr>
                             
                              <th className='form-width filter-cursr'>Sl No <span className='filt-icon'><img src={filticon} /></span></th>
                              <th className='form-width filter-cursr'>Location <span className='filt-icon'><img src={filticon} /></span></th>
                              <th className='form-width filter-cursr'>Route <span className='filt-icon'><img src={filticon} /></span></th>
                             <th className='form-staus filter-cursr'>Action </th>
                            </tr>
                        </thead>
                        <tbody class="tbody-light">
                            <tr>
                                <td class="value-table">
                                  <p>1</p>
                                </td>
                                <td class="value-table">
                                  <p>PS#40</p>
                                </td>
                                <td class="pend-sec">
                                 <div className='pending-inner-sec rote-addon'>
                                  <p onClick={handleClickOpenroute}>1 Route <VisibilityIcon /></p>
                                 </div>
                                </td>
                                <td class="pend-sec">
                                 <div className='edit-inner-sec'>
                                  <p> <EditIcon /></p>
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
             
          </CustomTabPanel>
          </div>
      
    </Box>

        </div>

        </div>
        </div>



  {/* modal code for status start */}
  <BootstrapDialog
        onClose={handleCloseroute}
        aria-labelledby="customized-dialog-title"
        open={openroute} className=' route-detail-sec '
      >
    
        <IconButton
          aria-label="close"
          onClick={handleCloseroute}
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
           <div className='form-details-inner route-detal-iner'>
        
          
           <div className='all-route-show'>
                        <div className='row'>
                            <h3 className='all-name '>Route Details</h3>
                            </div>
                        <div className='row'>

                            <div className='col-md-12 accor-sec'>
                            <Accordion
                                expanded={expanded}
                                onChange={handleExpansion}
                                slots={{ transition: Fade }}
                                slotProps={{ transition: { timeout: 400 } }}
                                sx={[
                                expanded
                                    ? {
                                        [`& .${accordionClasses.region}`]: {
                                        height: 'auto',
                                        },
                                        [`& .${accordionDetailsClasses.root}`]: {
                                        display: 'block',
                                        },
                                    }
                                    : {
                                        [`& .${accordionClasses.region}`]: {
                                        height: 0,
                                        },
                                        [`& .${accordionDetailsClasses.root}`]: {
                                        display: 'none',
                                        },
                                    },
                            ]}
                         >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                        <Typography component="span"><span className='rote-name-acc'>Test Route </span>
                           
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                        <div className="over-details">
                            <div className="row">
                                <div className='col-md-12'>
                                <div className='over-details-inner accom-table route-appr-details'>
                                    {/* <h2>Overtime Details</h2> */}

                                    <div class="table-main table-form-scroll table-modal">
                                    <table class="table table-bordered">
                                        <thead class="thead-light thead-travel thead-grant">
                                            <tr>
                                            <th className='modl-slno-width'>Rank</th>
                                            <th className='modl-work-loc-width'>Approver name</th>
                                            </tr>
                                        </thead>
                                        <tbody class="tbody-light">
                                            <tr>
                                                <td class="table-inputs pursh-input">
                                                22 
                                                </td>
                                                <td class="table-inputs pursh-input">
                                                Kie Dobson
                                                </td>
                                            
                                            
                                                </tr>
                                                <tr>
                                                <td class="table-inputs pursh-input">
                                                35 
                                                </td>
                                                <td class="table-inputs pursh-input">
                                                Rashad Tarruella
                                                </td>
                                            
                                            
                                                </tr>
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </Typography>
                        </AccordionDetails>
                            </Accordion>
    
                                </div>
                        </div>
                    </div>
            </div>
          </Typography>
        
        </DialogContent>
      
      </BootstrapDialog>
      {/* modal code for status end */}
    </>
  )
}
export default Routemanagement;

