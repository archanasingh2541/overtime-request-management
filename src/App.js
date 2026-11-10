import React, { useEffect, useState } from "react";
import {
  BrowserRouter, Routes, Route, Navigate, useParams,
  useNavigate,
} from "react-router-dom";

import './App.css';
import Login from "./components/login";
import Header from "./components/header";
// import Startovertimeform from "./components/start-overtime-form";
// import Formstatus from "./components/form-status";
import Sidebar from "./components/sidebar";
import OvertimeTask from "./components/overtime-task";
import AccomplishedOvertimeTask from "./components/accomplished-overtime-task";
import Report from "./components/report";
import Headerapprover from "./components/header-approver";
import Formdetails from "./components/form-details";
import RequestApprove from "./components/request-approve";
import RequestDecline from "./components/request-decline";
import SidebarAdmin from "./components/sidebar-admin";
import AdminReport from "./components/adminreport";
import AdminFormstatus from "./components/adminformstatus";
import UserManagement from "./components/usermanagement";
import Routemanagement from "./components/routemanagement";
// import DynamicTable from "./components/dynamic-table";


function App() {
  var baseName = "/";
  return (
 <>
     <div className="App">
     <BrowserRouter basename={baseName}>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/header" element={<Header />} />
        {/* <Route path="/start-overtime-form" element={<Startovertimeform />} /> */}
        {/* <Route path="/form-status" element={<Formstatus />} /> */}
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/overtime-task" element={<OvertimeTask />} />
        <Route path="/accomplished-overtime-task" element={<AccomplishedOvertimeTask />} />
        <Route path="/report" element={<Report />} />
        <Route path="/header-approver" element={<Headerapprover />} />
        <Route path="/form-details" element={<Formdetails />} />
        <Route path="/request-approve" element={<RequestApprove />} />
        <Route path="/request-decline" element={<RequestDecline />} />
        <Route path="/sidebar-admin" element={<SidebarAdmin />} />
        <Route path="/adminreport" element={<AdminReport />} />
        <Route path="/adminformstatus" element={<AdminFormstatus />} />
        <Route path="/usermanagement" element={<UserManagement />} />
        <Route path="/routemanagement" element={<Routemanagement />} />
        {/* <Route path="/dynamic-table" element={<DynamicTable />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
 </>
  );
}

export default App;
