import React from "react";
import classes from './Announcements.module.css'
import MainDashboard from '../Main Dashboard/MainDashoard';
import USER from '../../assets/promix/MyUser.svg'


const Announcements = () => {

    return (

        <div>
            <MainDashboard />
            <div className={classes.formSection}>
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


                <div className={classes.chartCont}>
<p>Announcement 1</p>
<p>School Bus will now leave to pick kids by 6am</p>
<p>Starting from the 1st of February 2024, the school bus will now leave the school premises to go and pick kids by 6am and not 6.30am, please ensure to get your kids ready for school on time,
as the bus will not wait for any child that is not ready when the school bus passes our area. Thanks.</p>
                </div>
            </div>
        </div>
    )
};

export default Announcements;
