import React, { useState, useEffect } from 'react';
import classes from '../../Pages/Main Dashboard/MinDashboard.module.css';
// import RegLogo from '../../Images/RegistrationLogo.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Tab, Tabs, Form, Spinner } from 'react-bootstrap';
import dashIcon from '../../assets/promix/dash-icon1.svg'
import dIcon2 from '../../assets/promix/dIcon2.svg'
import dIcon3 from '../../assets/promix/dIcon3.svg'
import dIcon4 from '../../assets/promix/dIcon4.svg'
import dIcon5 from '../../assets/promix/dIcon5.svg'
import dIcon6 from '../../assets/promix/dIcon6.svg'
import Arrow from '../../assets/promix/dArrow-down.svg'
import Out from '../../assets/promix/dLoginIcon.svg'
import Logo from '../../assets/promix/dLogoWhite.svg'

import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';


import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button } from 'bootstrap';

// import Folder from '../../Images/folder-2.svg';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import SuccessImg from '../../Images/completed.svg';
// import messageIcon from '../../Images/Dashbord-menu-icons/message-text.svg';
// import Invoice from '../../Images/Dashbord-menu-icons/invoice.svg';
// import LogOutIcon from '../../Images/Dashbord-menu-icons/logout.svg';
// import DashImg from '../../Images/DI-mobile1.svg';
// import Msg1 from '../../Images/DI-mobile2.svg';
// import Inv from '../../Images/DI-mobile3.svg';
// import LgOut from '../../Images/DI-mobile4.svg';
// import DashboardLogo from '../../Images/dashboardLogo.svg';
// import UserLogo from '../../Images/user-edit.svg';
// import Swal from 'sweetalert2';
// import { useRegistration } from '../RegistrationContext';


export default function MainDashboard() {
    const location = useLocation();
    const navigate = useNavigate();
    const [bearer, setBearer] = useState('');
    const [user, setUser] = useState('');
    const [activeLink, setActiveLink] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuOpen1, setIsMenuOpen1] = useState(false);
    const [isMenuOpen2, setIsMenuOpen2] = useState(false);
    const [isMenuOpen3, setIsMenuOpen3] = useState(false);
    const [isMenuOpen4, setIsMenuOpen4] = useState(false);
    const [isMenuOpen5, setIsMenuOpen5] = useState(false);
    // const { isReg, retrieveRegStatus } = useRegistration();
    const PINK = 'rgba(255, 192, 203, 0.6)';
    const BLUE = 'rgba(0, 0, 255, 0.6)';
    const DEEPGREEN = '#164B2E';
    const LIGHTGREE = '#2D995F';

    function ContextAwareToggle({ children, eventKey, callback }) {
        const { activeEventKey } = useContext(AccordionContext);
      
        const decoratedOnClick = useAccordionButton(
          eventKey,
          () => callback && callback(eventKey),
        );
      
        const isCurrentEventKey = activeEventKey === eventKey;
      
        return (
          <button
            type="button"
            // style={{ backgroundColor: isCurrentEventKey ? LIGHTGREE : DEEPGREEN }}
            onClick={decoratedOnClick}
          >
            {children}
          </button>
        );
      }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
    };
    const toggleMenu1 = () => {
        setIsMenuOpen1(!isMenuOpen1); // Toggle the menu open/close state
    };
    const toggleMenu2 = () => {
        setIsMenuOpen2(!isMenuOpen2); // Toggle the menu open/close state
    };
    const toggleMenu3 = () => {
        setIsMenuOpen3(!isMenuOpen3); // Toggle the menu open/close state
    };
    const toggleMenu4 = () => {
        setIsMenuOpen4(!isMenuOpen4); // Toggle the menu open/close state
    };
    const toggleMenu5 = () => {
        setIsMenuOpen5(!isMenuOpen5); // Toggle the menu open/close state
    };
    

    const closeMenu = () => {
        setIsMenuOpen(false); // Close the menu
    };



    return (
        <div className={classes.sideNavBody}>
            <div className={`${classes.sideNavContainer} ${classes.overflow}`}>
                <div className={classes.logoCont}>
                    <span>A</span>
                    <p style={{color:'white', fontSize:'14px'}}>Ajanla Farms and Pastry</p>
                </div>
                <div className={`${classes.sideNav}`}>
                    {/* {`${classes.mainMenu} ${isMenuOpen ? classes.menuOpen : ''}`} */}

                    <div className={`${classes.regMenu} ${isMenuOpen ? '' : classes.menuOpen}`}>
                        <Link
                            to={'/dashboard'}
                            className={activeLink === 'Dashboard' ? classes.active : ''}
                        >
                            <p>
                                <span><img src={dashIcon} alt='icon' className={classes.webshow} />
                                <img src={dashIcon} alt='icon' className={classes.mobileshow} />
                                Dashboard </span>
                            </p>
                        </Link>
                        <Accordion defaultActiveKey="0">
                            <Card className={classes.accordionCard}>
                                <Card.Header className={classes.cardHeader} onClick={toggleMenu}>
                                    <ContextAwareToggle eventKey="0">
                                        <p> 
                                            <span>
                                            <img src={dIcon2} alt='icon'/> Receivables
                                            </span>
                                            {isMenuOpen ? (<i class='bx bx-chevron-down'></i>) : (<i class='bx bx-chevron-up'></i>)} 
                                        </p>
                                    </ContextAwareToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0" style={{backgroundColor:'#164B2E'}}>
                                    <Card.Body className={classes.cardBody}>
                                        <Link to={'#'}>Customer/Employee/Member</Link><br/>
                                        <Link to={'#'}>Sales Invoices</Link><br/>
                                        <Link to={'#'}>Advance Bookin</Link><br/>
                                        <Link to={'#'}>Advance Booking Payments</Link><br/>
                                        <Link to={'#'}>Sales Invoice Payments</Link><br/>
                                        <Link to={'#'}>Loan & Advances</Link>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className={classes.accordionCard}>
                                <Card.Header className={classes.cardHeader} onClick={toggleMenu1}>
                                    <ContextAwareToggle eventKey="1">
                                        <p>
                                            <span><img src={dIcon3} alt='icon' /> Payables</span>
                                            {isMenuOpen1 ? (<i class='bx bx-chevron-down'></i>) : (<i class='bx bx-chevron-up'></i>)} 
                                        </p>
                                    </ContextAwareToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1" style={{backgroundColor:'#164B2E'}}>
                                    <Card.Body className={classes.cardBody}>
                                        <Link to={'/general_payment_voucher'}>Suppliers/Beneficiaries</Link><br/>
                                        <Link to={'#'}>General Payment Voucher</Link><br/>
                                        <Link to={'#'}>Pending Payment Voucher</Link><br/>
                                        <Link to={'#'}>Completed Payment Voucher</Link><br/>
                                        <Link to={'#'}>Bulk Payment Excel</Link><br/>
                                        <Link to={'#'}>Bulk Payment</Link><br/>
                                        <Link to={'#'}>Schedule of Payables</Link><br/>
                                        <Link to={'#'}>Savings</Link>
                                    </Card.Body>
                                    
                                </Accordion.Collapse>
                            </Card>
                            <Card className={classes.accordionCard}>
                                <Card.Header className={classes.cardHeader} onClick={toggleMenu2}>
                                    <ContextAwareToggle eventKey="2">
                                        <p> 
                                            <span><img src={dIcon4} alt='icon' /> Inventory</span>
                                            {isMenuOpen2 ? (<i class='bx bx-chevron-down'></i>) : (<i class='bx bx-chevron-up'></i>)} 
                                        </p>
                                    </ContextAwareToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2" style={{backgroundColor:'#164B2E'}}>
                                    <Card.Body className={classes.cardBody}>
                                        <Link to={'#'}>Manage Department</Link><br/>
                                        <Link to={'#'}>Manage Unit</Link><br/>
                                        <Link to={'#'}>Manage Items</Link><br/>
                                        <Link to={'#'}>Manage Order</Link><br/>
                                        <Link to={'#'}>Manage Requisition</Link><br/>
                                        <Link to={'#'}>Manage Purchase Delivery</Link><br/>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className={classes.accordionCard}>
                                <Card.Header className={classes.cardHeader} onClick={toggleMenu3}>
                                    <ContextAwareToggle eventKey="3">
                                        <p> 
                                            <span><img src={dIcon5} alt='icon' /> Transactions</span>
                                            {isMenuOpen3 ? (<i class='bx bx-chevron-down'></i>) : (<i class='bx bx-chevron-up'></i>)} 
                                        </p>
                                    </ContextAwareToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3" style={{backgroundColor:'#164B2E'}}>
                                    <Card.Body className={classes.cardBody}>
                                        <Link to={'#'}>Sales</Link><br/>
                                        <Link to={'#'}>Receipt</Link><br/>
                                        <Link to={'#'}>Expenses</Link><br/>
                                        <Link to={'#'}>Journal Entries</Link><br/>
                                        <Link to={'#'}>Deposit/Lodgement</Link><br/>
                                        <Link to={'#'}>Loan Repayment</Link><br/>
                                        <Link to={'#'}>Loan Repayment Excel</Link><br/>
                                        <Link to={'#'}>Savings Withdrawal</Link>
                                        <Link to={'#'}>Income Excel Upload</Link>
                                        <Link to={'#'}>Payment Excel Upload</Link>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className={classes.accordionCard}>
                                <Card.Header className={classes.cardHeader} onClick={toggleMenu4}>
                                    <ContextAwareToggle eventKey="4">
                                        <p> 
                                            <span><img src={dIcon4} alt='icon' /> Report</span>
                                            {isMenuOpen4 ? (<i class='bx bx-chevron-down'></i>) : (<i class='bx bx-chevron-up'></i>)} 
                                        </p>
                                    </ContextAwareToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4" style={{backgroundColor:'#164B2E'}}>
                                    <Card.Body className={classes.cardBody}>
                                        <Link to={'/general_ledger'}>Generate Ledger</Link><br/>
                                        <Link to={'#'}>Cashbook</Link><br/>
                                        <Link to={'#'}>Trial Balance</Link><br/>
                                        <Link to={'#'}>Income & Expenditure</Link><br/>
                                        <Link to={'#'}>Monthly Income</Link><br/>
                                        <Link to={'#'}>Balance Sheet</Link><br/>
                                        <Link to={'#'}>Inflow</Link>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className={classes.accordionCard}>
                                <Card.Header className={classes.cardHeader} onClick={toggleMenu5}>
                                    <ContextAwareToggle eventKey="5">
                                        <p> 
                                            <span><img src={dIcon6} alt='icon' /> Profile</span>
                                            {isMenuOpen5? (<i class='bx bx-chevron-down'></i>) : (<i class='bx bx-chevron-up'></i>)} 
                                        </p>
                                    </ContextAwareToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5" style={{backgroundColor:'#164B2E'}}>
                                    <Card.Body className={classes.cardBody}>
                                    <Link to={'#'}>My Profile</Link><br/>
                                    <Link to={'#'}>Edit Profile</Link><br/>
                                    <Link to={'#'}>Manage User</Link><br/>
                                    <Link to={'#'}>Change Password</Link><br/>
                                    <Link to={'#'}>Sign Out</Link>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            
                        </Accordion>
                    </div>

                </div>
                <div className={classes.dFooter}>
                    <div className={classes.logoPic}>
                        <img src={Logo} alt='Logo' className={classes.imgs}/>
                    </div>
                    <Link>
                        <button className={classes.logout}>
                            <img src={Out} alt='Logo' style={{width:'20px', height:'20px'}}/>
                            Logout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        // </div>
    )
}
