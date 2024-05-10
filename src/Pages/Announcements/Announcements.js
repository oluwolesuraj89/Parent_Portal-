import React from "react";
import classes from './Announcements.module.css'
import MainDashboard from '../Main Dashboard/MainDashoard';
import USER from '../../assets/promix/MyUser.svg'


const Announcements = () => {

    return (

        <div>
            <MainDashboard />
            <div className={classes.formSection}>
                <div className={classes.formSectionHeaderContainer}>
                    <div className={classes.formSectionHeader}>
                        <div style={{ textAlign: 'left' }}>
                            <p style={{ margin: '0' }}>Welcome</p>
                            <h3>
                                Ololade Lawanson
                            </h3>

                        </div>
                        <div>
                            <h3 style={{ color: 'black' }}>Attendance</h3>
                        </div>
                        <div className={classes.users}>
                            <h6 >Mosumola Lawanson</h6>
                            <img src={USER} alt='User' />
                            <i class='bx bxs-chevron-down'></i>
                        </div>
                    </div>
                </div>


                <div className={classes.chartCont}>
                    <div className={classes.anncemntalldtls}>
                        <p className={classes.anncemnt}>Announcement 1</p>
                        <p className={classes.anncemnttitle}>School Bus will now leave to pick kids by 6am</p>
                        <p className={classes.anncemntdtls}>Starting from the 1st of February 2024, the school bus will now leave the school premises to go and pick kids by 6am and not 6.30am, please ensure to get your kids ready for school on time,
                            as the bus will not wait for any child that is not ready when the school bus passes our area. Thanks.</p>
                        <div className={classes.anncemntdte}><p>25th January, 2024</p></div>
                    </div>
                    <div className={classes.anncemntalldtls2}>
                        <p className={classes.anncemnt}>Announcement 1</p>
                        <p className={classes.anncemnttitle}>School Bus will now leave to pick kids by 6am</p>
                        <p className={classes.anncemntdtls}>Starting from the 1st of February 2024, the school bus will now leave the school premises to go and pick kids by 6am and not 6.30am, please ensure to get your kids ready for school on time,
                            as the bus will not wait for any child that is not ready when the school bus passes our area. Thanks.</p>
                        <div className={classes.anncemntdte}><p>25th January, 2024</p></div>
                    </div>
                    <div className={classes.anncemntalldtls3}>
                        <p className={classes.anncemnt}>Announcement 1</p>
                        <p className={classes.anncemnttitle}>School Bus will now leave to pick kids by 6am</p>
                        <p className={classes.anncemntdtls}>Starting from the 1st of February 2024, the school bus will now leave the school premises to go and pick kids by 6am and not 6.30am, please ensure to get your kids ready for school on time,
                            as the bus will not wait for any child that is not ready when the school bus passes our area. Thanks.</p>
                        <div className={classes.anncemntdte}><p>25th January, 2024</p></div>
                    </div>
                    <div className={classes.anncemntalldtls4}>
                        <p className={classes.anncemnt}>Announcement 1</p>
                        <p className={classes.anncemnttitle}>School Bus will now leave to pick kids by 6am</p>
                        <p className={classes.anncemntdtls}>Starting from the 1st of February 2024, the school bus will now leave the school premises to go and pick kids by 6am and not 6.30am, please ensure to get your kids ready for school on time,
                            as the bus will not wait for any child that is not ready when the school bus passes our area. Thanks.</p>
                        <div className={classes.anncemntdte}><p>25th January, 2024</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Announcements;
