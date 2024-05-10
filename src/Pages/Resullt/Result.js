import React, { useEffect, useState } from 'react';
import SelectInput from './SelectInput';
import SelectClassInput from './SelecctClassInput';
import SelectTermInput from './SelecctTermInput';
import SelectSubjectInput from './SelecctSubjectInput';
import classes from './Result.module.css';
import MainDashboard from '../Main Dashboard/MainDashoard';
import USER from '../../assets/promix/MyUser.svg'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

import Table from 'react-bootstrap/Table';
import { BASE_URL } from '../../Promix/api/api';
// import Form from 'react-bootstrap/Form';
import FemaleIcon from '../../assets/promix/MyUser.svg';
import MaleIcon from '../../assets/promix/MaleIcon.svg';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner,Badge } from 'react-bootstrap';
import Result_Sheet from '../Results Sheet/ResultSheet';




const Result = () => {
    const navigate = useNavigate();
    const [bearer, setBearer] = useState('');
    const [children, setChildren] = useState([]);
    const [childrenDetails, setChildrenDetails] = useState([]);
    const [childrenSubjects, setChildrenSubjects] = useState([]);
    const [childrenScores, setChildrenScores] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadings, setIsLoadings] = useState(false);
    const [onLoadings, setOnLoadings] = useState(false);
    const [inLoadings, setInLoadings] = useState(false);
    const [amLoadings, setAmLoadings] = useState(false);
    const [selectedChild, setSelectedChild] = useState("")
    const [selectedTerm, setSelectedTerm] = useState("")
    const [selectedClass, setSelectedClass] = useState("")
    const [selectedSession, setSelectedSession] = useState("")
    const [parentName, setParentName] = useState("")
    const [selectedChildren, setSelectedChildren] = useState("")
    const [term, setTerm] = useState([]);
    const [childrenSession, setChildrenSession] = useState([]);
    const [childrenTerm, setChildrenTerm] = useState([]);
    const [childrenClasses, setChildrenClasses] = useState([]);


    const handleChildrenChange = (event) => {
        setSelectedChild(event.target.value)
    }
    const handleClassChange = (event) => {
        setSelectedClass(event.target.value)
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
    useEffect(()=>{
        if (bearer){
            fetchAllChildren()
        }
    },[bearer]);

    const fetchChildrenDetail = async () => {
        setIsLoading(true);
        try {

            const response = await axios.get(`${BASE_URL}/get-student-by-id?student_id=${selectedChild}`,
            {headers});
            const details = response.data?.data
            setChildrenDetails(details);
            console.log(details?.school?.name, "School Name");
            setChildrenSubjects(details?.classes?.assigned);
            // console.log(details?.classes?.assigned, "hereee");
            // console.log("childrenDetails:", childrenDetails);
            // console.log("school:", childrenDetails?.school);
            // console.log("school name:", childrenDetails?.school?.name);
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

    useState(()=>{
        if (bearer){
            fetchChildrenDetail(selectedChild)
        }
    }, [selectedChild, bearer]);
    // console.log("Selected child:", selectedChild);
    // console.log("Selected term:", selectedTerm);
    // console.log("Selected session:", selectedSession);

    const fetchChildrenScores = async () => {
        setIsLoadings(true);
        try {
            const response = await axios.get(`${BASE_URL}/get-scores-filter`,{
                params:{
                    student_id :selectedChild,
                    term_id : selectedTerm,
                    session_id : selectedSession,
                    class_id : selectedClass,
                },
                headers:headers
            });
            // console.log('response', response)
            const scores = response.data?.data
            setChildrenScores(scores);
            setSelectedChildren(scores[0]?.id);
            // setTerm(scores?.term);
            // setSession(scores?.session);
            navigate('/result_sheet', {state:{
                childrenScores: scores,
                selectedChild: selectedChild,
                selectedTerm : selectedTerm,
                selectedSession:selectedSession,
                selectedClass: selectedClass,
            }});
            console.log("scores", scores);
            console.log('selected children', scores[0]?.id)
            
        } catch (error) {
            let errorMessage = error.response?.data?.message || 'An error occurred';
            if (error.message === 'Network Error') {
                errorMessage = 'Connection error. Please check your internet connection.';
            }
            toast.error(errorMessage);
        } finally {
            setIsLoadings(false);
        }
    }
    const fetchClasses = async () => {
        setAmLoadings(true);
        try {
            const response = await axios.get(`${BASE_URL}/get-student-class?student_id=${selectedChild}`,
            {headers});
            // console.log('response', response)
            const classes = response.data?.data;
            setChildrenClasses(classes);
            console.log("session:", classes);
            // setSelectedChildren(session[0]?.id);
            
        } catch (error) {
            let errorMessage = error.response?.data?.message || 'An error occurred';
            if (error.message === 'Network Error') {
                errorMessage = 'Connection error. Please check your internet connection.';
            }
            toast.error(errorMessage);
        } finally {
            setAmLoadings(false);
        }
    }

    useEffect(() => {
        if (bearer) {
            fetchClasses(selectedChild);
        }
      }, [selectedChild, bearer]);

    const fetchSession = async () => {
        setOnLoadings(true);
        try {
            const response = await axios.get(`${BASE_URL}/get-student-session?student_id=${selectedChild}`,
            {headers});
            // console.log('response', response)
            const session = response.data?.data;
            setChildrenSession(session);
            console.log("session:", session);
            // setSelectedChildren(session[0]?.id);
            
        } catch (error) {
            let errorMessage = error.response?.data?.message || 'An error occurred';
            if (error.message === 'Network Error') {
                errorMessage = 'Connection error. Please check your internet connection.';
            }
            toast.error(errorMessage);
        } finally {
            setOnLoadings(false);
        }
    }

    useEffect(() => {
        if (bearer) {
            fetchSession(selectedChild);
        }
      }, [selectedChild, bearer]);
      
    const fetchTerm = async () => {
        setInLoadings(true);
        try {
            const response = await axios.get(`${BASE_URL}/get-student-term?student_id=${selectedChild}`,
            {headers});
            // console.log('response', response)
            const term = response.data?.data;
            setChildrenTerm(term);
            console.log("term:", term);
            // setSelectedChildren(session[0]?.id);
            
        } catch (error) {
            let errorMessage = error.response?.data?.message || 'An error occurred';
            if (error.message === 'Network Error') {
                errorMessage = 'Connection error. Please check your internet connection.';
            }
            toast.error(errorMessage);
        } finally {
            setInLoadings(false);
        }
    }

    useEffect(() => {
        if (bearer) {
            fetchTerm(selectedChild);
        }
      }, [selectedChild, bearer]);
    

    const handleDownloadResult = ()=>{
        fetchChildrenScores();
    }
    const handleSessionChang = (event)=>{
        setSelectedSession(event.target.value);
    }
    const handleTermChange = (event)=>{
        setSelectedTerm(event.target.value);
    }

// const session = childrenSession.map(item => item.description);
// console.log(session, "Messss");
    

    const options = [
        { value: 'option1', label: 'View result:Full session' },
        { value: 'option2', label: 'One term' },
        { value: 'option3', label: 'Subject' },
        { value: 'option4', label: 'Mid term' },
    ];
    
    return (

        <div>
            < MainDashboard/>
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
                            <h3 style={{ color: 'black' }}>Result</h3>
                        </div>
                        <div>
                        <Form.Group className={classes.group}>
                                <Form.Label>Select child</Form.Label>
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
                            </Form.Group>
                        </div>
                        {/* <div className={classes.users}>
                        <Form.Select aria-label="Default select example" 
                            value={selectedChild} 
                            onChange={handleChildrenChange}
                        >
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
                        </div> */}
                    </div>
                </div>

                <div className={classes.chartCont}>
                    <div className={classes.sessionresult}>
                        <div className={classes.users}>
                            <Form.Group className={classes.group}>
                                <Form.Label>Select class</Form.Label>
                                <Form.Select aria-label="Default select example" 
                                    value={selectedClass} 
                                    onChange={handleClassChange}
                                >
                                    <option>Select class</option>
                                    {childrenClasses.map((item) =>(
                                        <option key={item.id} value={item.id}>
                                            {item.description}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className={classes.group}>
                                <Form.Label>Select session</Form.Label>
                                <Form.Select 
                                value={selectedSession}
                                onChange={handleSessionChang}
                                >
                                    <option value=" ">Select Session</option>
                                    {childrenSession.map((item) => (
                                        <option key={item.id} value={item.id}>
                                            {item.description}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className={classes.group}>
                                <Form.Label>select term</Form.Label>
                                <Form.Select
                                    value={selectedTerm}
                                    onChange={handleTermChange}
                                >
                                <option value=" ">Select term</option>
                                {childrenTerm.map((item)=>(
                                    <option key={item.id} value={item.id}>
                                        {item?.description}
                                    </option>
                                ))}
                                </Form.Select>
                            </Form.Group>
                        </div>
                    </div>
                    <p className={classes.scndtxt}>View the result by clicking on the button below</p>
                    {isLoadings? (
                        <Button className={classes.rsltbtn} variant='dark' disabled>
                            <Spinner animation="border" size="sm" role="status" aria-hidden="true" />
                            <span className="visually-hidden">Loading...</span>
                            Downloading result...
                        </Button>
                    ) : (
                        <Button className={classes.rsltbtn} variant='dark' onClick={handleDownloadResult}>Download result</Button>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Result;