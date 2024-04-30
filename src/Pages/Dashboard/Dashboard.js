import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import OnbImg from '../../Images/image bg.png';
import classes from './Dashboard.module.css';
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

const Dashboard = () => {
    
    return (
        <div>
            <MainDashboard/>
            
            <div className={classes.formSection}>
                <div className={classes.formSectionHeader}>
                    <div style={{textAlign:'left'}}>
                        <p style={{margin:'0'}}>Welcome</p>
                        <h3>
                            Ololade Lawanson
                        </h3>
                        
                    </div>
                    <div>
                        <h3 style={{color:'black'}}>Dashboard</h3>
                    </div>
                    <div className={classes.users}>
                        <h6 >Mosumola Lawanson</h6>
                        <img src={USER} alt='User'/>
                        <i class='bx bxs-chevron-down'></i>
                    </div>
                </div>
                
                <div className={classes.chartCont}>
                    <div className={classes.group1}>
                        <div className={classes.flex1}>
                            <div className={classes.stID}>
                                <h3>Mosunmola Lawanson</h3>
                                <p>Class: Primary 2A</p>
                            </div>   
                            <div className={classes.details}>
                                <div className={classes.detailsCard}>
                                    <img src={Payment} alt='payment' className={classes.icon}/>
                                    <div>
                                        <p>N0.00</p>
                                        <h5>Outstanding Payment</h5>
                                    </div>
                                </div>    
                                <div className={classes.detailsCard}>
                                    <img src={Payment2} alt='payment' className={classes.icon}/><br/>
                                    <div>
                                        <div className={classes.curveCont}>
                                            <img src={Curve} alt='img' className={classes.Curve}/>
                                            <p>89%</p>
                                        </div>
                                        <h5>Attendance rate</h5>
                                    </div>
                                </div>    
                                <div className={classes.detailsCard}>
                                    <img src={Payment2} alt='payment' className={classes.icon}/>
                                    {/* <img></img> */}
                                    <div>
                                        <p>Title</p>
                                        <h5>Class Prefect</h5>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className={classes.sideImg}>
                            <img src={Boy} alt='img' className={classes.imgs}/>
                        </div>
                        <div className={classes.flex2}></div>
                    </div>
                    
                </div>
            </div>

        </div>

    );
}

export default Dashboard;