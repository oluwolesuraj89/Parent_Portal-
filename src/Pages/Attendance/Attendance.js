import React, { useState } from 'react';
import classes from './Attendance.module.css'
import MainDashboard from '../Main Dashboard/MainDashoard';
import USER from '../../assets/promix/MyUser.svg'
import SelectInput from './SelectInput';
import graph from '../../assets/graph.png'
import calndr from '../../assets/calendar.png'
import attendancerate from '../../assets/attndcerdate.png'

const Attendance = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const options = [
        { value: 'option1', label: 'View attendance: Second Term' },
        { value: 'option2', label: 'First term' },
        { value: 'option3', label: 'Third term' },
        { value: 'option4', label: 'Mid term' },
    ];

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
                    <div className={classes.chartContsub}>

                        <div className={classes.slct}>
                            <p className={classes.chldavrgtxt}>Your child's average attendance</p>
                            <div className={classes.dslct}>
                                <SelectInput
                                    options={options}
                                    value={selectedOption}
                                    onChange={handleSelectChange}
                                />
                            </div>

                        </div>

                        <div className={classes.shptxt}>

                            <div className={classes.dlspflx}>
                                <div className={classes.shapeash}></div>
                                <p className={classes.avrgtxt}>All student's Average attendance</p>
                            </div>

                            <div className={classes.dlspflx}>
                                <div className={classes.shapeblk}></div>
                                <p className={classes.avrgattdncetxt}>your child's Average attendance</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <img src={graph} alt='User' className={classes.grph} />
                    </div>
                </div>

                <div className={classes.dtlsclass}>
                    <div className={classes.chartContclndr}>
                        <div>
                            <p className={classes.chldavrgtxtclndr}>Calendar view of your child's attendance</p>
                            <div className={classes.calendar}>
                                <img src={calndr} alt='cldr' className={classes.clndr} />
                            </div>

                        </div>
                        <div className={classes.atndncedtls}>
                            <div className={classes.dlspflxalt}>
                                <div className={classes.shapeash}></div>
                                <p className={classes.avrgtxtclndr}>Absent from school</p>
                            </div>

                            <div className={classes.dlspflxalt}>
                                <div className={classes.shapeblkclndr}></div>
                                <p className={classes.avrgattdncetxtclndr}>Present in school</p>
                            </div>
                            <div className={classes.dlspflxalt}>
                                <div className={classes.shapeashclndr}></div>
                                <p className={classes.avrgattdncetxtclndr}>Public holiday </p>
                            </div>
                        </div>
                    </div>

                    <div className={classes.attndncerte}>
                        <p className={classes.attndncrtetxt}>Attendance rate</p>
                        <div className={classes.imgtxtattndcerte}>
                            <img src={attendancerate} alt='cldr' className={classes.attndncerate} />
                            <p className={classes.attndncrte}>Attendance: 89.9%</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
};

export default Attendance;