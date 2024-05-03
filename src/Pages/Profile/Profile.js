import React from "react";
import classes from './Profile.module.css'
import MainDashboard from '../Main Dashboard/MainDashoard';
import USER from '../../assets/promix/MyUser.svg'
import prfl from '../../assets/profileimg.png'


const Profile = () => {

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
                        <h3 style={{ color: 'black' }}>Profile</h3>
                    </div>
                    <div className={classes.users}>
                        <h6 >Mosumola Lawanson</h6>
                        <img src={USER} alt='User' />
                        <i class='bx bxs-chevron-down'></i>
                    </div>
                </div>

                <div className={classes.chartCont}>
                    <div className={classes.profiledtls}>
                        <div>
                            <div>
                                <p className={classes.nme}>Name</p>
                                <p className={classes.nmedtls}>Ololade Lawanson</p>
                            </div>
                            <div >
                                <p className={classes.eml}>Email address</p>
                                <p className={classes.emldtls}>ololade@gmail.com</p>
                            </div>
                            <div>
                                <p className={classes.adrs}>Home address</p>
                                <p className={classes.adrsdtls}>No 15, Chief close, Liberty estate, Lekki phase 1, Lagos.</p>
                            </div>
                            <div>
                                <p className={classes.fne}>Phone number</p>
                                <p className={classes.fnenumbr}>08012345609</p>
                            </div>
                            <div>
                                <p className={classes.chldrnno}>No of children enrolled</p>
                                <p className={classes.amntchldrn}>3</p>
                            </div>
                        </div>

                        <div >
                        <img src={prfl} alt='profile' className={classes.dimg} /> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Profile;