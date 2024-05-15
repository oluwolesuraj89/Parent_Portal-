import React, {useState, useEffect, Children} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import classes from './Dashboard.module.css';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-bootstrap';
// import RegLogo from '../../Images/RegistrationLogo.svg'
import { Link } from 'react-router-dom'
import MainDashboard from '../Main Dashboard/MainDashoard';
import FemaleIcon from '../../assets/promix/MyUser.svg'
import MaleIcon from '../../assets/promix/MaleIcon.svg'
import Payment from '../../assets/promix/detailsIcon1.svg'
import Payment2 from '../../assets/promix/detailsIcon2.svg'
import Curve from '../../assets/promix/curve1.svg'
import Boy from '../../assets/promix/FineBoy.svg'
import Form from 'react-bootstrap/Form';
import { BASE_URL } from '../../Promix/api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function calculateAge(dateOfBirth) {
    const dob = new Date(dateOfBirth);
    const currentDate = new Date();
    
    let age = currentDate.getFullYear() - dob.getFullYear();
    
    if (currentDate.getMonth() < dob.getMonth() ||
        (currentDate.getMonth() === dob.getMonth() && currentDate.getDate() < dob.getDate())) {
        age--;
    }
    
    return age;
}


const Dashboard = () => {
    const [bearer, setBearer] = useState('');
    const [children, setChildren] = useState([]);
    const [childrenDetails, setChildrenDetails] = useState([]);
    const [childrenSubjects, setChildrenSubjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadings, setIsLoadings] = useState(false);
    const [selectedChild, setSelectedChild] = useState("")
    const [parentName, setParentName] = useState("")


    const renderAge = () => {
        const selectedChildObj = children.find(child => child.id === selectedChild);
        if (selectedChildObj) {
            const age = calculateAge(selectedChildObj.date_of_birth);
            return <span>{age} years old</span>;
        }
        return null;
    }


    const handleChildrenChange = (event) => {
        setSelectedChild(event.target.value)
    }

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
    

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearer}`
      };

    const fetchAllChildren = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/get-all-children`, {headers});
            const result = response.data?.data
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
            const details = response.data?.data
            setChildrenDetails(details);
            console.log(details, "wehereh");
            setChildrenSubjects(details?.classes?.assigned);
            console.log(details?.classes?.assigned, "hereee");
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
            fetchAllChildren();
        }
      }, [bearer]);

    useEffect(() => {
        if (bearer) {
            fetchChildrenDetail(selectedChild);
        }
      }, [selectedChild, bearer]);


    
    return (
        <div >
            < MainDashboard schoolName={childrenDetails?.school?.name}/>
            
            <div className={classes.formSection} >
            <div className={classes.formSectionHeaderContainer}>
                    <div className={classes.formSectionHeader}>
                        <div style={{textAlign:'left'}}>
                            <p style={{margin:'0'}}>Welcome</p>
                            <h3>
                                {parentName}
                            </h3>
                            
                        </div>
                        <div>
                            <h3 style={{color:'black'}}>Dashboard</h3>
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
                    <div className={classes.group1}>
                        <div className={classes.flex1}>
                            {/* {children.map((item)=>{
                            if ((item.id) === selectedChild){
                                return(
                                    <div key={(item.id)}></div>
                                )
                            }
                            })} */}
                            <div className={classes.stID}>
                                <h3>{childrenDetails.first_name} {childrenDetails.last_name}</h3>
                                <p>Class: {childrenDetails.classes?.description}</p>
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
                            
                        {childrenDetails && childrenDetails.image ? (
                            <img src={childrenDetails.image} alt='img' className={classes.imgss}/>
                        ) : (
                            <img src={Boy} alt='img' className={classes.imgss}/>
                        )}
                            {/* <img src={Boy} alt='img' className={classes.imgs}/> */}
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
                                        <h6>{childrenDetails.first_name} {childrenDetails.last_name}</h6>
                                    </div>
                                    <div>
                                        <small>Class</small>
                                        <h6>{childrenDetails.classes?.description}</h6>
                                    </div>
                                    <div>
                                        <small>Home address</small>
                                        <h6>{childrenDetails.address}</h6>
                                    </div>
                                    <div>
                                        <small>Date of birth</small>
                                        <h6>{childrenDetails.date_of_birth}</h6>
                                        {/* <h6>7years old</h6> */}
                                    </div>
                                    <div>
                                        <small>Age</small>
                                        <h6>{selectedChild && renderAge()}</h6>
                                        {/* <h6>7years old</h6> */}
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
                                        <h6>{childrenDetails.blood_group}</h6>
                                    </div>
                                    <div>
                                        <small>Class Teacher</small>
                                        <h6>{childrenDetails?.teacher?.name}</h6>
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
                                        {childrenSubjects.map((item, index) =>(
                                            <div key={index}>
                                                <h6>{item.subject?.name}</h6>
                                            </div> 
                                        ))}
                                       
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