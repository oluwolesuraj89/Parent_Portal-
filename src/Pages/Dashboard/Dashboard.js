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
import Form from 'react-bootstrap/Form';

const Dashboard = () => {
    
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
                        <h3 style={{color:'black'}}>Dashboard</h3>
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
                    <div className={classes.group1}>
                        <div className={classes.flex1}>
                            <div className={classes.stID}>
                                <h3>Mosunmola Lawanson</h3>
                                <p>Class: Primary 2A</p>
                            </div>   
                            <div className={classes.details}>
                                <div className={classes.detailsCard}>
                                    <img src={Payment} alt='payment' className={classes.icon}/>
                                    <div style={{marginTop:'55px'}}>
                                        <p>N0.00</p>
                                        <h6 style={{fontSize:'15px'}}>Outstanding Payment</h6>
                                    </div>
                                </div>    
                                <div className={classes.detailsCard}>
                                    <img src={Payment2} alt='payment' className={classes.icon}/><br/>
                                    <div>
                                        <div className={classes.curveCont} style={{marginTop:'20px'}}>
                                            <p>89%</p>
                                            <img src={Curve} alt='img' className={classes.Curve}/>
                                        </div>
                                        <h6>Attendance rate</h6>
                                    </div>
                                </div>    
                                <div className={classes.detailsCard}>
                                    <img src={Payment2} alt='payment' className={classes.icon}/>
                                    {/* <img></img> */}
                                    <div style={{marginTop:'55px'}}>
                                        <p>Title</p>
                                        <h6>Class Prefect</h6>
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className={classes.sideImg}>
                            <img src={Boy} alt='img' className={classes.imgs}/>
                        </div>
                        <div className={classes.flex2}></div>
                    </div>
                    <div className={classes.group1}>
                        <div className={classes.flex1}>
                            <h5 className={classes.Bio}>Bio</h5>
                            <div className={classes.stuDeta}>
                                <div className={classes.stuDatCard}>
                                    <div>
                                        <small>Name</small>
                                        <h6>Mosumola Lawanson</h6>
                                    </div>
                                    <div>
                                        <small>Class</small>
                                        <h6>Primary 2A</h6>
                                    </div>
                                    <div>
                                        <small>Home address</small>
                                        <h6>No 15, Chief close, Liberty estate, Lekki phase 1, Lagos</h6>
                                    </div>
                                    <div>
                                        <small>Age</small>
                                        <h6>7years old</h6>
                                    </div>
                                    <div>
                                        <small>Height</small>
                                        <h6>100cm</h6>
                                    </div>
                                    <div>
                                        <small>House color</small>
                                        <h6>Yellow</h6>
                                    </div>
                                </div>    
                                <div className={classes.stuDatCard}>
                                    <div>
                                        <small>Genotype</small>
                                        <h6>AA</h6>
                                    </div>
                                    <div>
                                        <small>Blood Group</small>
                                        <h6>0+</h6>
                                    </div>
                                    <div>
                                        <small>Class Teacher</small>
                                        <h6>Mrs. Adigun</h6>
                                    </div>
                                    <div>
                                        <small>Team</small>
                                        <h6>Second Term</h6>
                                    </div>
                                    <div>
                                        <small>Start of Term</small>
                                        <h6>10th January 2024</h6>
                                    </div>
                                    <div>
                                        <small>End of Term</small>
                                        <h6>11th April 2024</h6>
                                    </div>
                                </div>    
                                <div className={classes.stuDatCard}>
                                    <div>
                                        <small>Subjects enrolled</small>
                                        <h6>Mathematics</h6>
                                        <h6>English Language</h6>
                                        <h6>Computer</h6>
                                        <h6>Social Studies</h6>
                                        <h6>Yoruba</h6>
                                        <h6>Music</h6>
                                        <h6>Fine Art</h6>
                                        <h6>Integrated science</h6>
                                        <h6>Christian Religious Studies</h6>
                                    </div>
                                </div>    
                                
                            </div>
                        </div>
                        <div className={classes.upCommingEvent}>
                            <h5><span>Upcoming Even</span>ts</h5>
                            <div className={classes.events}>
                                <div className={classes.event}>
                                    <span className={classes.tittle}>M</span>
                                    <div>
                                        <h6>Mid Term break</h6>
                                        <small>Mid Term break</small>
                                    </div>
                                </div>
                                <div className={classes.event}>
                                    <span className={classes.tittle}>I</span>
                                    <div>
                                        <h6>Inter House sport</h6>
                                        <small>16th March 2024</small>
                                    </div>
                                </div>
                                <div className={classes.event}>
                                    <span className={classes.tittle}>P</span>
                                    <div>
                                        <h6>PTA Meeting</h6>
                                        <small>25th of March 2024</small>
                                    </div>
                                </div>
                                <div className={classes.event}>
                                    <span className={classes.tittle}>H</span>
                                    <div>
                                        <h6>Holiday Trip</h6>
                                        <small>12th of April 2024</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>

        </div>

    );
}

export default Dashboard;