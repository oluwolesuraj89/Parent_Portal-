import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import OnbImg from '../../Images/image bg.png';
import classes from './MakePayment.module.css'
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

const MakePayment = () => {
    
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
                    <div className={classes.tHead}>
                        <Button variant='light'><i class='bx bx-chevron-left'></i>Make a new payment</Button>
                    </div>    
                    <div className={classes.formHead}>
                        <h6>Pay for your Child’s school fees here</h6>
                        <div className={classes.container}>
                            <Form >
                                <Form.Group className="mb-3">
                                    <Form.Label>Select class</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Primary 2</option>
                                        <option value="1">Primary 1</option>
                                        <option value="2">Primary 3</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Select class</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Third</option>
                                        <option value="1">First</option>
                                        <option value="2">Second</option>
                                    </Form.Select>
                                </Form.Group>
                                
                                <Form.Group className="mb-3">
                                    <Form.Label>Enter amount to pay</Form.Label>
                                    <Form.Control type="number" placeholder="100,000" />
                                </Form.Group>
                                <p>*Third term fees is N300,000, you can make payment instalmentally</p>
                                <Button variant="dark" type="submit">Make Payment</Button>
                            </Form>
                        </div>
                    </div> 
                </div>
            </div>

        </div>

    );
}

export default MakePayment;