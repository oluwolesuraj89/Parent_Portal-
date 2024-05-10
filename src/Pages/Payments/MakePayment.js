import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import classes from './MakePayment.module.css';
import { Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom'
import MainDashboard from '../Main Dashboard/MainDashoard';
import { BASE_URL } from '../../Promix/api/api';
// import dChart1 from '../../assets/promix/dShart1.svg'
// import dChart2 from '../../assets/promix/dShart2.svg'
// import dChart3 from '../../assets/promix/dShart3.svg'
// import dChart4 from '../../assets/promix/dShart4.svg'
// import dChart5 from '../../assets/promix/dShart5.svg'
// import dChart6 from '../../assets/promix/dShart6.svg'
// import dChart7 from '../../assets/promix/dShart7.svg'
// import dChart8 from '../../assets/promix/dShart8.svg'
// import Arrow from '../../assets/promix/dArrow-down.svg'
// import USER from '../../assets/promix/MyUser.svg'
// import Payment from '../../assets/promix/detailsIcon1.svg'
// import Payment2 from '../../assets/promix/detailsIcon2.svg'
// import Curve from '../../assets/promix/curve1.svg'
// import Boy from '../../assets/promix/FineBoy.svg'
import Form from 'react-bootstrap/Form';
import FemaleIcon from '../../assets/promix/MyUser.svg';
import MaleIcon from '../../assets/promix/MaleIcon.svg';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MakePayment = () => {
    const [pyment,setPyment] = useState([]);
    const [selectedChild,setSelectedChild] = useState("");
    const [bearer, setBearer] = useState('');
    const [parentName, setParentName] = useState('');
    const [loading, setLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loadings, setLoadings] = useState(false);
    const [childrenDetails, setChildrenDetails] = useState([]);
    const [children, setChildren] = useState([]);
    // const [selectedChild, setSelectedChild] = useState('');


    const handleChildrenChange = (event) =>{
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


    const fetchPayments = async () =>{
        setLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/get-payments?student_id=${selectedChild}`,{headers});
            const result = response.data?.data
            setPyment(result);
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

    const fetchAllChildren = async () => {
        setLoadings(true);
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
            setLoadings(false);
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
            // setChildrenSubjects(details?.classes?.assigned);
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

    useEffect(()=>{
        if (bearer){
            fetchAllChildren();
        }
    }, [bearer]);

    useEffect(()=>{
        if (bearer) {
            fetchPayments(selectedChild)
        }
    }, [selectedChild, bearer]);
    
    useEffect(()=>{
        if (bearer) {
            fetchChildrenDetail(selectedChild)
        }
    }, [selectedChild, bearer]);



    return (
        <div style={{backgroundColor:'#E9ECEF'}}>
            < MainDashboard/>
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
                            <h3 style={{color:'black'}}>Payment</h3>
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
                        </div>
                    </div>
                </div>
                
                <div className={classes.chartCont}>
                    <div className={classes.tHead}>
                        <Button variant='light'><i class='bx bx-chevron-left'></i>Make a new payment</Button>
                    </div>    
                    <div className={classes.formHead}>
                        <h6>Pay for your Child’s school fees here</h6>
                        <div className={classes.container}>
                            <Form >
                                <Form.Group className="mb-3">
                                    <Form.Label>Select class</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Primary 2</option>
                                        <option value="1">Primary 1</option>
                                        <option value="2">Primary 3</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Select class</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Third</option>
                                        <option value="1">First</option>
                                        <option value="2">Second</option>
                                    </Form.Select>
                                </Form.Group>
                                
                                <Form.Group className="mb-3">
                                    <Form.Label>Enter amount to pay</Form.Label>
                                    <Form.Control type="number" placeholder="100,000" />
                                </Form.Group>
                                <p>*Third term fees is N300,000, you can make payment instalmentally</p>
                                <Button variant="dark" type="submit">Make Payment</Button>
                            </Form>
                        </div>
                    </div> 
                </div>
            </div>

        </div>

    );
}

export default MakePayment;