import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Promix/Signup/Signup.js';
import Login from './Promix/Login/Login.js';
import Dashboard from './Pages/Dashboard/Dashboard.js';
import PaymentsHistory from './Pages/Payments/PaymentsHistory.js';
import MakePayment from './Pages/Payments/MakePayment.js';
import Result from './Pages/Resullt/Result.js';
import ResultSheet from './Pages/Results Sheet/ResultSheet.js';
import Attendance from './Pages/Attendance/Attendance.js';
import Announcements from './Pages/Announcements/Announcements.js';
import Profile from './Pages/Profile/Profile.js';
// import Infractions from "./Pages/Infactions/Infractions.js";
// import Infractions2 from "./Pages/Infactions2/Infractions2.js";

function App() {
  return (
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/payments_hisroy' element={<PaymentsHistory/>}/>
        <Route path='/make_payment' element={<MakePayment/>}/>
        <Route path='/results' element={<Result/>} />
        <Route path='/attendance' element={<Attendance/>} />
        <Route path='/annoucements' element={<Announcements/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
  );
}

export default App;
