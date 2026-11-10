
import React, {useState} from "react";
import SidebarAdmin from "./sidebar-admin";
import Headerapprover from "./header-approver";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import filticon from '../assets/img//filter-icon.png';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import downloadicon from '../assets/img/downlod-icon.png';
import BackupIcon from '@mui/icons-material/Backup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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


const Usermanagement = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const homeloc = [
    { label: 'CD' },
    { label: 'PS#24' },
    { label: 'PS#25' },
  ]; 

   const [userType, setUserType] = React.useState('');
  
    const handleChangeUser = (event) => {
      setUserType(event.target.value);
    };

    const[userclearshow, setUserclearshow] = useState(false);

    const handleuser = () => {
      setUserclearshow(true);
    }
    const handleuseradd = () => {
      setUserclearshow(false);
    }

    const [userbulk, setUserbulk] = useState(false);
   

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
                  <h2>User Management</h2>
                  <div className='head-right' style={{display: userclearshow ? 'flex' : 'none'}}>
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
              <Tab className="add-tab"  label="Add User" {...a11yProps(0)} onClick={handleuseradd}/>
              <Tab className="manage-tab" label="Manage User" {...a11yProps(1)} onClick={handleuser}/>
              
            </Tabs>
          </Box>
          <div className="btn-upload-sec" style={{display: userclearshow ? 'none' : 'flex'}}>
          <div class="file btn btn-lg btn-primary btn-uplod">
						<BackupIcon />	Bulk Upload
							<input type="file" name="file" className="bulk-sec-user"/>
             
						</div>
            <div className="upload-arrow btn-uplods"  onClick={() => setUserbulk(!userbulk)}>
              <ArrowDropDownIcon />
            </div>
            <div >
            <div className="down-sampl" style={{display: userbulk ? 'flex' : 'none'}}>
                <a>Download CSV Template</a>
            </div>
            </div>
           

          </div>

          <div className="manage-all-sec">
          <CustomTabPanel value={value} index={0} className="add-user-tab">
             <div className="tab-sec-inner">
              <div className="row">
                <div className="col-md-3">
                <div className='form-sec user-form'>
                    <Box
                    component="form"
                    sx={{ '& > :not(style)': { width: '100%' } }}
                    noValidate
                    autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Emp Id" variant="outlined" />
                    </Box>
                  </div>

                </div>
                <div className="col-md-3">

                <div className='form-sec user-form'>
                    <Box
                    component="form"
                    sx={{ '& > :not(style)': { width: '100%' } }}
                    noValidate
                    autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="First Name" variant="outlined" />
                    </Box>
                  </div>

                </div>
                <div className="col-md-3">

                <div className='form-sec user-form'>
                    <Box
                    component="form"
                    sx={{ '& > :not(style)': { width: '100%' } }}
                    noValidate
                    autoComplete="off"
                    >
                      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                    </Box>
                  </div>

                </div>
                <div className="col-md-3">
                <div className='form-sec user-form'>
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
                
              </div>
              <div className="row margin-userss">
                <div className="col-md-3 appr-name-sec loc-user">
                  <div className='user-form form-sec'>
                    <Autocomplete
                      disablePortal
                      options={homeloc}
                      sx={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} label="Choose Home Location" />}
                    />
                    </div>
                </div>
                <div className="col-md-3 margin-usertop-sec">
                <div className="form-sec selct-simple">
                <FormControl sx={{  minWidth: '100%' }}>
                  <InputLabel id="demo-simple-select-helper-label">User Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={userType}
                    label="User Type"
                    onChange={handleChangeUser}
                  >
                   
                    <MenuItem value={10}>Admin</MenuItem>
                    <MenuItem value={20}>Initiator</MenuItem>
                    <MenuItem value={30}>Approver</MenuItem>
                  </Select>
                </FormControl>
                </div>
                </div>

              </div>
              <div className='submit'>
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
                <p>Total User <span className="value-tot">2</span></p>
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
                             
                              <th className='form-width filter-cursr'>Emp Id <span className='filt-icon'><img src={filticon} /></span></th>
                              <th className='form-width filter-cursr'>Name <span className='filt-icon'><img src={filticon} /></span></th>
                              <th className='form-width filter-cursr'>Emp Email <span className='filt-icon'><img src={filticon} /></span></th>
                              <th className='sub-date-width filter-cursr'>Home Location <span className='filt-icon'><img src={filticon} /></span></th>
                              <th className='final-date-width filter-cursr'>User Type <span className='filt-icon'><img src={filticon} /></span></th>
                              <th className='final-date-width filter-cursr'>Route Name <span className='filt-icon'><img src={filticon} /></span></th>
                              <th className='form-staus filter-cursr'>Status <span className='filt-icon'><img src={filticon} /></span></th>
                              <th className='form-staus filter-cursr'>Action </th>
                            </tr>
                        </thead>
                        <tbody class="tbody-light">
                            <tr>
                                <td class="value-table">
                                  <p>14612</p>
                                </td>
                                <td class="value-table">
                                  <p>James Rosa</p>
                                </td>
                                <td class="value-table">
                                  <p>james41@test.org</p>
                                </td>
                                <td class="value-table">
                                  <p>ps#40</p>
                                </td>
                                <td class="value-table">
                                 <p>Initiator</p>
                                </td>
                                <td class="value-table">
                                 <p>Test Route</p>
                                </td>
                                <td>
                                <section id="model-20"> 

    <div class="toggle">
      <input type="checkbox" id="check-20" />
      <label for="check-20"></label>
    </div>
  
</section>
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
    </>
  )
}

export default Usermanagement;
