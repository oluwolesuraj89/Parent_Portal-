

import React, { useState, useEffect } from 'react';
import classes from '../Main Dashboard/MinDashboard.module.css';

import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Tab, Tabs, Form, Spinner, Button } from 'react-bootstrap';

import axios from 'axios';

import dashIcon from '../../assets/promix/Dash_icon.svg';
import dashIcon1 from '../../assets/promix/PDicon1.svg';
import dashIcon2 from '../../assets/promix/PDicon2.svg';
import dashIcon3 from '../../assets/promix/PDicon3.svg';
import dashIcon4 from '../../assets/promix/PDicon4.svg';
import userI from '../../assets/promix/PDicon-user.svg';
// import Arrow from '../../assets/promix/dArrow-down.svg'
// import Logo from '../../assets/promix/dLogoWhite.svg'
import Out from '../../assets/promix/loginss.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';


const MainDashboard = () => {
// export default function MainDashoard() {
    const location = useLocation();
    const navigate = useNavigate();
    const [bearer, setBearer] = useState('');
    const [user, setUser] = useState('');
    const [activeLink, setActiveLink] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [parentName, setParentName] = useState('');
    // const { isReg, retrieveRegStatus } = useRegistration();

    const readData = async () => {
        try {
          const details = await AsyncStorage.getItem('userToken');
          const parent = await AsyncStorage.getItem('userName')
                 
          if (details !== null) {
            setBearer(details);
          }
          if(parent !==null){
            setParentName(parent)
          }
        } catch (e) {
          alert('Failed to fetch the input from storage');
        }
      };
    
      useEffect(() => {
        readData();
      }, []);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
    };

    const closeMenu = () => {
        setIsMenuOpen(false); // Close the menu
    };
    // const [isReg, setIsReg] = useState(false);


    useEffect(() => {
        const pathname = location.pathname;
        if (pathname.includes('dashboard')) {
            setActiveLink('Dashboard');
        } else if (pathname.includes('payments_invoice')) {
            setActiveLink('Invoice');
        } else if (pathname.includes('payments')) {
            setActiveLink('Payment');
        } else if (pathname.includes('results')) {
            setActiveLink('Results');
        } else if (pathname.includes('attendance')) {
            setActiveLink('Attendance');
        } else if (pathname.includes('infractions')) {
            setActiveLink('Infractions');
        } else if (pathname.includes('annoucements')) {
            setActiveLink('Annoucements');
        } else if (pathname === 'profile') {
            setActiveLink('Profile');
        } else {
            setActiveLink(null);
        }
    }, [location]);

    

    const handleLogout = async () => {
        setLoading(true);
        try {
            const response = await axios.post(
                'https://api-smesupport.ogunstate.gov.ng/api/logout',
                {},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${bearer}`
                    }
                }
            );
            navigate('/sign_in');


        } catch (error) {
            let errorMessage = 'An error occurred. Please try again.';
            if (error.response && error.response.data && error.response.data.message) {
                if (typeof error.response.data.message === 'string') {
                    errorMessage = error.response.data.message;
                } else if (Array.isArray(error.response.data.message)) {
                    errorMessage = error.response.data.message.join('; ');
                } else if (typeof error.response.data.message === 'object') {
                    errorMessage = JSON.stringify(error.response.data.message);
                }
                if (errorMessage.toLowerCase().includes('unauthenticated') || errorMessage.toLowerCase().includes('unauthorized')) {
                    navigate('/sign_in');
                    return;
                }
            }
            setErrorMessage(errorMessage);
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className={classes.sideNavBody}>
            <div className={classes.logoCont}>
                <span>{parentName.charAt(0)}</span>
                <p style={{color:'black'}}>{parentName}</p>
            </div>
            <div className={classes.sideNav}>
                {/* {`${classes.mainMenu} ${isMenuOpen ? classes.menuOpen : ''}`} */}

                <div className={`${classes.regMenu} ${isMenuOpen ? '' : classes.menuOpen}`}>
               
                    <Link
                        to={'/dashboard'}
                        className={activeLink === 'Dashboard' ? classes.active : ''}
                    >
                        <p>
                            <img src={dashIcon} alt='icon' className={classes.webshow} />
                            <img src={dashIcon1} alt='icon' className={classes.mobileshow} />
                            Dashboard</p>
                    </Link>
                    <Link
                        to={'/payments_invoice'}
                        className={activeLink === 'Invoice' ? classes.active : ''}
                    >
                        <p> <img src={dashIcon2} alt='icon' /> Invoice</p>
                    </Link>
                    <Link
                        to={'/payments'}
                        className={activeLink === 'Payment' ? classes.active : ''}
                    >
                        <p> <img src={dashIcon2} alt='icon' /> Payment</p>
                    </Link>

                    <Link
                        to={'/results'}
                        className={activeLink === 'Results' ? classes.active : ''}
                    >
                        <p><img src={dashIcon3} alt='icon' /> Results</p>
                    </Link>
                    <Link
                        to={'/attendance'}
                        className={activeLink === 'Attendance' ? classes.active : ''}
                    >   
                        <p> <img src={dashIcon4} alt='icon' /> Attendance</p>
                    </Link>
                    <Link
                        to={'/infractions'}
                        className={activeLink === 'Infractions' ? classes.active : ''}
                    >
                        <p> <img src={dashIcon3} alt='icon' /> Infractions</p>
                    </Link>
                    <Link
                        to={'/annoucements'}
                        className={activeLink === 'Annoucements' ? classes.active : ''}
                    >
                        <p> <img src={dashIcon4} alt='icon' /> Announcements</p>
                    </Link>
                    <Link
                        to={'/profile'}
                        className={activeLink === 'Profile' ? classes.active : ''}
                    >
                        <p> <img src={userI} alt='icon' /> Profile</p>
                    </Link>


                    {/* <Link
                        onClick={handleLogout}
                        
                        className={activeLink === 'Logout' ? classes.active : ''}
                    >
                        <p>
                            <img src={dIcon6} alt='icon' />{' '}
                            {loading ? (
                                <>
                                    <Spinner size='sm' style={{ marginRight: 5 }} /> Signing out...
                                </>
                            ) : (
                                'Log out'
                            )}
                        </p>
                    </Link> */}
                </div>
                <div className={classes.harmborgers} onClick={toggleMenu}>
                {isMenuOpen ? (
                  <span className={classes.closs}>
                    <i className='bx bx-x'></i>
                  </span>
                ) : (
                  <span className={classes.open}>
                    <i className='bx bx-menu'></i>
                  </span>
                )}
              </div>

              <div className={classes.dFooter}>
                    {/* <div className={classes.logoPic}>
                        <img src={Logo} alt='Logo' className={classes.imgs}/>
                    </div> */}
                    <Link>
                        <Button variant='light' className={classes.logout}>
                            <img src={Out} alt='Logo' style={{width:'20px', height:'20px'}}/>
                            Logout
                        </Button>
                    </Link>
                </div>
            </div>

            {/* <div className={classes.formSection}>
                <div className={classes.formSectionHeader}>
                    <h1>Welcome {user}</h1>
                    <p>Apply for grants or loans from the Ogun State Government</p>
                </div>
            </div> */}
        </div>
        // </div>
    )
}
export default MainDashboard;
// expot default MainDashboard;