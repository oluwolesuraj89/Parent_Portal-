import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import OnbImg from '../../Images/image bg.png';
import classes from './PaymentsHistory.module.css'
// import loanicon from '../../Images/moneys.png'
// import loaniconblue from '../../Images/moneysblue.png'
// import loanicongreen from '../../Images/receipt-2.png'
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-bootstrap';
// import RegLogo from '../../Images/RegistrationLogo.svg'
import { Link } from 'react-router-dom'
import MainDashboard from '../Main Dashboard/MainDashoard';
import dChart1 from '../../assets/promix/dShart1.svg'
import dChart2 from '../../assets/promix/dShart2.svg'
import dChart3 from '../../assets/promix/dShart3.svg'
import dChart4 from '../../assets/promix/dShart4.svg'
import dChart5 from '../../assets/promix/dShart5.svg'
import dChart6 from '../../assets/promix/dShart6.svg'
import dChart7 from '../../assets/promix/dShart7.svg'
import dChart8 from '../../assets/promix/dShart8.svg'
import Arrow from '../../assets/promix/dArrow-down.svg'
import USER from '../../assets/promix/MyUser.svg'
import Payment from '../../assets/promix/detailsIcon1.svg'
import Payment2 from '../../assets/promix/detailsIcon2.svg'
import Curve from '../../assets/promix/curve1.svg'
import Boy from '../../assets/promix/FineBoy.svg'
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const PaymentsHistory = () => {
    
    return (
        <div style={{backgroundColor:'#E9ECEF'}}>
            <MainDashboard/>
            
            <div className={classes.formSection} >
                <div className={classes.formSectionHeader}>
                    <div style={{textAlign:'left'}}>
                        <p style={{margin:'0'}}>Welcome</p>
                        <h3>
                            Ololade Lawanson
                        </h3>
                        
                    </div>
                    <div>
                        <h3 style={{color:'black'}}>Payment</h3>
                    </div>
                    <div className={classes.users}>
                    <Form.Select aria-label="Default select example">
                        <option>Mosumola Lawanson</option>
                        <option value="1">Michael Lawanson</option>
                        <option value="2">Joshua Lawanson</option>
                        {/* <option value="3">Three</option> */}
                    </Form.Select>
                        {/* <h6 >Mosumola Lawanson</h6>
                        <img src={USER} alt='User'/>
                        <i class='bx bxs-chevron-down'></i> */}
                    </div>
                </div>
                
                <div className={classes.chartCont}>
                    
                    <div className={classes.cardConte}>
                        <div className={classes.detailsCard}>
                            <img src={Payment} alt='payment' className={classes.icon}/>
                            <div style={{marginTop:'55px'}}>
                                <p>N300,000.00</p>
                                <h6 style={{fontSize:'15px'}}>Second term fees</h6>
                            </div>
                        </div>    
                        <div className={classes.detailsCard}>
                            <img src={Payment2} alt='payment' className={classes.icon}/><br/>
                            <div style={{marginTop:'55px'}}>
                                
                                <p>N300,000.00</p>
                                <h6>Amount Paid</h6>
                            </div>
                        </div>    
                        <div className={classes.detailsCard}>
                            <img src={Payment2} alt='payment' className={classes.icon}/>
                            
                            <div style={{marginTop:'55px'}}>
                                <p>N0.00</p>
                                <h6>Outstanding Payment</h6>
                            </div>
                        </div>    
                        <div className={classes.detailsCard}>
                            <img src={Payment2} alt='payment' className={classes.icon}/>
                            
                            <div style={{marginTop:'55px'}}>
                                <p>N950,000.00</p>
                                <h6>Session fees</h6>
                            </div>
                        </div>    
                    </div>
                        
                    <div className={classes.tableSection}>
                        <div className={classes.tHead}>
                            <h5 className={classes.i}>Payment History</h5>
                            <Button variant='dark'>Make a new payment</Button>
                        </div>    
                        <Table striped bordered hover className={classes.table}>
                            <thead>
                                <tr className={classes.tableHead}>
                                    <th>S/N</th>
                                    <th>Transaction ID</th>
                                    <th>Date created</th>
                                    <th>Amount</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>DFGDFEQWIFG944</td>
                                    <td>03/06/2024</td>
                                    <td>50,000</td>
                                    <td>Payment for school fees</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>DFGDFEQWIFG944</td>
                                    <td>03/06/2024</td>
                                    <td>50,000</td>
                                    <td>Payment for school fees</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>DFGDFEQWIFG944</td>
                                    <td>03/06/2024</td>
                                    <td>50,000</td>
                                    <td>Payment for school fees</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>DFGDFEQWIFG944</td>
                                    <td>03/06/2024</td>
                                    <td>50,000</td>
                                    <td>Payment for school fees</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div> 
                </div>
            </div>

        </div>

    );
}

export default PaymentsHistory;