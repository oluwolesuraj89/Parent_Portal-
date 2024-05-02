import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './Promix/Signup/Signup.js';
import Login from './Promix/Login/Login.js';
import Dashboard from './Pages/Dashboard/Dashboard.js';
import PaymentsHistory from './Pages/Payments/PaymentsHistory.js';
import MakePayment from './Pages/Payments/MakePayment.js';
import Result from './Pages/Resullt/Result.js';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/payments_hisroy' element={<PaymentsHistory/>}/>
        <Route path='/make_payment' element={<MakePayment/>}/>
        <Route path='/results' element={<Result/>} />
      </Routes>
  );
}

export default App;
