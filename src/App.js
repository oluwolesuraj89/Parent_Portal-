import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Dashboard from './Pages/Dashboard.js';
// import PromixLanding from './Pages/promixLanding.js';
// import LandingPage from './Pages/LandingPage.js';
// import GeneralPaymentVoucher from './Pages/PaymentVouchers/GeneralPaymentVoucher/GeneralPaymentVoucher.js';
// import PaymentVoucherForm from './Pages/PaymentVouchers/PaymentVoucherForm/PaymentVoucherForm.js';
// import GeneralLedger from './Pages/General Ledger/GeneralLedger.js';
import SignUp from './Promix/Signup/Signup.js';
// import GeneralLedgerTable from './Pages/General Ledger Table/GeneralLedgerTable.js';
// import CreatePaymentVoucher from './Pages/PaymentVouchers/Create Payment Voucher/CreatePaymentVoucher.js';
// import SalesReceipt from './Pages/Sales Receipt/SalesReceipt.js';

import Login from './Promix/Login/Login.js';
import MainDashboard from './Pages/Main Dashboard/MainDashoard.js';
import Dashboard from './Pages/Dashboard/Dashboard.js';
import Payments from './Pages/Payments/PaymentsHistory.js';
import PaymentsHistory from './Pages/Payments/PaymentsHistory.js';
import MakePayment from './Pages/Payments/MakePayment.js';
import Result from './Pages/Resullt/Result.js';
import ResultSheet from './Pages/Results Sheet/ResultSheet.js';
import Attendance from './Pages/Attendance/Attendance.js';
import Announcements from './Pages/Announcements/Announcements.js';
import Profile from './Pages/Profile/Profile.js';
import Infractions from "./Pages/Infactions/Infractions.js";
import Infractions2 from "./Pages/Infactions2/Infractions2.js";

function App() {
  return (
      <Routes>
        {/* <Route path='/' element={<LandingPage/>} /> */}
        {/* <Route path='/dashboard' element={<Dashboard/>} /> */}
        <Route path='/main_dashboard' element={<MainDashboard />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/payments_hisroy' element={<PaymentsHistory/>}/>
        <Route path='/make_payment' element={<MakePayment/>}/>
        <Route path='/Result_Sheet' element={<ResultSheet/>}/>
        
        <Route path='/infractions' element={<Infractions/>} />
        <Route path='/infractions2' element={<Infractions2/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/results' element={<Result/>} />
        <Route path='/attendance' element={<Attendance/>} />
        <Route path='/annoucements' element={<Announcements/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
  );
}

export default App;
