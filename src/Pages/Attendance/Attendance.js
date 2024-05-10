import React, {useState, useEffect, Children} from 'react';
import classes from './Attendance.module.css';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainDashboard from '../Main Dashboard/MainDashoard';
import USER from '../../assets/promix/MyUser.svg';
import SelectInput from './SelectInput';
import graph from '../../assets/graph.png';
import calndr from '../../assets/calendar.png';
import attendancerate from '../../assets/attndcerdate.png';
import FemaleIcon from '../../assets/promix/MyUser.svg'
import MaleIcon from '../../assets/promix/MaleIcon.svg'
import { BASE_URL } from '../../Promix/api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from 'react-bootstrap/Form';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Attendance = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [parentName, setParentName] = useState('');
    const [bearer, setBearer] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadings, setLoadings] = useState(false);
    const [isloading, setIsLoading] = useState(false);
    const [children, setChildren] = useState([]);
    const [selectedChild, setSelectedChild] = useState('');
    const [childrenAttendance, setChildrenAttendance] = useState([]);
    const [childrenDetails, setChildrenDetails] = useState([]);
    // const [selectedChild, setSelectedChild] = useState('');
    const [calendarEvents, setCalendarEvents] = useState([]);


    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleChildrenChange=(event)=>{
        setSelectedChild(event.target.value)
    }

    const options = [
        { value: 'option1', label: 'Second Term' },
        { value: 'option2', label: 'First term' },
        { value: 'option3', label: 'Third term' },
        { value: 'option4', label: 'Mid term' },
    ];

    const readData = async () => {
        try {
          const details = await AsyncStorage.getItem('userToken');
          const parent = await AsyncStorage.getItem('userName')
                 
          if (details !== null) {
            setBearer(details);
          }
          if(parent !==null){
            setParentName(parent);
          }
        } catch (e) {
          alert('Failed to fetch the input from storage');
        }
      };
    
      useEffect(() => {
        readData();
      }, []);

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearer}`
      };
    
      const fetchAllChildren = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/get-all-children`, {headers});
            const result = response.data?.data;
            setChildren(result);
            setSelectedChild(result[0]?.id);
        } catch (error) {
            let errorMessage = error.response?.data?.message || 'An error occurred';
            if (error.message === 'Network Error') {
                errorMessage = 'Connection error. Please check your internet connection.';
            }
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    const fetchChildrenDetail = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/get-student-by-id?student_id=${selectedChild}`,
            {headers});
            const details = response.data?.data;
            setChildrenDetails(details);
            console.log(details, 'details here ')
        } catch (error) {
            let errorMessage = error.response?.data?.message || 'An error occurred';
            if (error.message === 'Network Error') {
                errorMessage = 'Connection error. Please check your internet connection.';
            }
            toast.error(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }
    
    
    useEffect(()=>{
        if(bearer){
            fetchAllChildren();
        }
    }, [bearer]);

    useEffect(() => {
        if (bearer) {
            fetchChildrenDetail(selectedChild);
        }
      }, [selectedChild, bearer]);

      console.log(selectedChild, "selected student");

        
        const fetchedAttendanceData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${BASE_URL}/attendance?student_id=${selectedChild}`,
                {headers});
                const data = response.data?.data;
                console.log(data, "Date details here");
                if (data && data.length > 0) {
                    const events = data.map(item => new Date(item.date)); // Assuming API returns date in a standard format
                    setCalendarEvents(events);
                } else {
                    setCalendarEvents([]);
                }
                // setChildrenDetails(output);
                // console.log(output, "Attendance Here");
                // setChildrenSubjects(details?.classes?.assigned);
                // console.log(details?.classes?.assigned, "hereee");
            } catch (error) {
                let errorMessage = error.response?.data?.message || 'An error occurred';
                if (error.message === 'Network Error') {
                    errorMessage = 'Connection error. Please check your internet connection.';
                }
                toast.error(errorMessage);
            } finally {
                setIsLoading(false);
            }
        }

        useEffect(() => {
            if (bearer) {
                fetchedAttendanceData(selectedChild);
            }
          }, [selectedChild, bearer]);

    

    return (

        <div>
            < MainDashboard schoolName={childrenDetails?.school?.name}/>
            <div className={classes.formSection}>
                <div className={classes.formSectionHeaderContainer}>
                    <div className={classes.formSectionHeader}>
                        <div style={{ textAlign: 'left' }}>
                            <p style={{ margin: '0' }}>Welcome</p>
                            <h3>
                                {parentName}
                            </h3>

                        </div>
                        <div>
                            <h3 style={{ color: 'black' }}>Attendance</h3>
                        </div>
                        <div className={classes.users}>
                            <Form.Select aria-label="Default select example" 
                                value={selectedChild} 
                                onChange={handleChildrenChange}
                            >
                            {/* <option>Mosumola Lawanson</option> */}
                            {children.map((item) =>(
                                <option key={item.id} value={item.id}>
                                    {item.first_name} {item.last_name}
                                    {item.gender === 'male' ? (
                                        <img src={MaleIcon} alt='Male'/> 
                                    ) : (
                                        <img src={FemaleIcon} alt='Female'/>
                                    )}
                                </option>
                            ))}
                            </Form.Select>
                            {/* <h6 >Mosumola Lawanson</h6>
                            <img src={USER} alt='User'/>
                            <i class='bx bxs-chevron-down'></i> */}
                        </div>
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
                                    placeHolder="View attendance"
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
                            <Calendar value={new Date()} tileClassName={({ date, view }) => {
                                // Customize CSS class based on the presence of events (attendance)
                                if (calendarEvents.find(event => event.getDate() === date.getDate())) {
                                    return 'present'; // CSS class for days with attendance
                                } else {
                                    return 'absent'; // CSS class for days without attendance
                                }
                            }} />
                            </div>
                        </div>
                        <div className={classes.atndncedtls}>
                            <div className={classes.dlspflxalt}>
                                <div className={classes.shapeash}></div>
                                <p className={classes.avrgattdncetxtclndr}>Absent from school</p>
                            </div>

                            <div className={classes.dlspflxalt}>
                                <div className={classes.shapeblkclndr}></div>
                                <p className={classes.avrgattdncetxtclndr}>Present in school</p>
                            </div>
                            {/* <div className={classes.dlspflxalt}>
                                <div className={classes.shapeashclndr}></div>
                                <p className={classes.avrgattdncetxtclndr}>Public holiday </p>
                            </div> */}
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