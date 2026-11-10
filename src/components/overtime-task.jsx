import React from "react";
import Sidebar from "./sidebar";
import Headerapprover from "./header-approver";
import downloadicon from '../assets/img/downlod-icon.png';
import pdficon from '../assets/img/pdf-icon.png';
import SearchIcon from '@mui/icons-material/Search';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import VisibilityIcon from '@mui/icons-material/Visibility';
import eyeicon from '../assets/img/eye-icon.png';
import filticon from '../assets/img//filter-icon.png';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import actionimg from '../assets/img/check.png';
import { Link } from 'react-router-dom';

const OvertimeTask = () => {
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
                  <h2>Overtime Task</h2>
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
                <p>Total Forms <span className="value-tot">2</span></p>
              </div>
              
            </div>
            <div className='col-md-4'>
                

              <div className='search-sec'>
              <a className="actn-filet">
              <img src={actionimg} /></a>
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
                              <th className='final-date-width filter-cursr'>Received Date & Time <span className='filt-icon'><img src={filticon} /></span></th>
                        
                              <th className='form-staus filter-cursr'>Action </th>
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
                                  <p>05 </p>
                                </td>
                                <td class="value-table">
                                <p>15263</p>
                                </td>
                                <td class="value-table">
                                 <p>Jose Lee</p>
                                </td>
                                <td class="table-inputs modl-dat-time">
                                    <p>02/12/2025</p>
                                    <p className='time-sec-mdl'>10:00 am</p>
                                </td>
                              
                                <td class="table-inputs modl-dat-time">
                                    <p>02/12/2025</p>
                                    <p className='time-sec-mdl'>10:00 am</p>
                                </td>
                                <td class="stats-img">
                                <Link to="/form-details">
                                 <img src={actionimg} alt='eyeicon'  />
                                 </Link>
                                </td>   
                               
                               
                                </tr>

                                <tr>
                                <td class="check-width">
                                <FormGroup>
                                  <FormControlLabel  control={<Checkbox />} label="" />
                                </FormGroup> 
                                </td>
                                <td class="value-table">
                                  <p>04 </p>
                                </td>
                                <td class="value-table">
                                <p>14250</p>
                                </td>
                                <td class="value-table">
                                 <p>Timothy Davis</p>
                                </td>
                                <td class="table-inputs modl-dat-time">
                                    <p>02/11/2025</p>
                                    <p className='time-sec-mdl'>10:25 am</p>
                                </td>
                              
                                <td class="table-inputs modl-dat-time">
                                    <p>02/11/2025</p>
                                    <p className='time-sec-mdl'>10:25 am</p>
                                </td>
                                <td class="stats-img">
                                <Link to="/form-details">
                                 <img src={actionimg} alt='eyeicon'  />
                                 </Link>
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
    </>
    
  )
}

export default OvertimeTask;
