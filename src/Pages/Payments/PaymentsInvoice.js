import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// import OnbImg from '../../Images/image bg.png';
import classes from './PaymentsInvoice.module.css'
// import loanicon from '../../Images/moneys.png'
// import loaniconblue from '../../Images/moneysblue.png'
// import loanicongreen from '../../Images/receipt-2.png'
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-bootstrap';
// import RegLogo from '../../Images/RegistrationLogo.svg'
import { Link } from 'react-router-dom'
import MainDashboard from '../Main Dashboard/MainDashoard';
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
import Payment from '../../assets/promix/detailsIcon1.svg'
import Payment2 from '../../assets/promix/detailsIcon2.svg'
// import Curve from '../../assets/promix/curve1.svg'
// import Boy from '../../assets/promix/FineBoy.svg'
// import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { BASE_URL } from '../../Promix/api/api';
import Form from 'react-bootstrap/Form';
import FemaleIcon from '../../assets/promix/MyUser.svg';
import MaleIcon from '../../assets/promix/MaleIcon.svg';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Spinner,Badge } from 'react-bootstrap';

const PaymentsInvoice = () => {
    const [invoice, setInvoice] = useState([]);
    const [selectedChild,setSelectedChild] = useState("");
    const [bearer, setBearer] = useState('');
    const [parentName, setParentName] = useState('');
    const [loading, setLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loadings, setLoadings] = useState(false);
    const [childrenDetails, setChildrenDetails] = useState([]);
    const [children, setChildren] = useState([]);
    const [outstanding, setOutstanding] = useState('');
    const [selectedInvoice, setSelectedInvoice] = useState('');

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


    const fetchInvoice = async () =>{
        setLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/get-invoices?student_id=${selectedChild}`,{headers});
            const invoices = response.data?.data
            setInvoice(invoices);
            // setSelectedInvoice(Invoices);
            // setSelectedInvoice(Invoices[0]?.id);
            console.log("Invoice here:", invoices);

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
            console.log(result);
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
            // console.log(details, "wehereh");
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
            fetchInvoice(selectedChild)
        }
    }, [selectedChild, bearer]);
    
    useEffect(()=>{
        if (bearer) {
            fetchChildrenDetail(selectedChild)
        }
    }, [selectedChild, bearer]);



    const formattedOutstanding = isNaN(parseFloat(outstanding)) ? '0.00' : parseFloat(outstanding).toLocaleString('en-US', {
        minimumIntegerDigits: 1,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    const totalOutstanding = invoice.reduce((total, item) => total + parseFloat(item.amount), 0);
    
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
                    
                    <div className={classes.cardConte}>
                        <div className={classes.detailsCard}>
                            <img src={Payment} alt='payment' className={classes.icon}/>
                            <div style={{marginTop:'55px'}}>
                                <p>N300,000.00</p>
                                <h6 style={{fontSize:'15px'}}>Second term fees</h6>
                            </div>
                        </div>    
                        <div className={classes.detailsCard}>
                            <img src={Payment2} alt='payment' className={classes.icon}/><br/>
                            <div style={{marginTop:'55px'}}>
                                
                                <p>N300,000.00</p>
                                <h6>Amount Paid</h6>
                            </div>
                        </div>    
                        <div className={classes.detailsCard}>
                            <img src={Payment2} alt='payment' className={classes.icon}/>
                            
                            <div style={{marginTop:'55px'}}>
                                <p>{totalOutstanding.toLocaleString('en-US', {
                                    minimumIntegerDigits: 1,
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}
                                            </p>
                                <h6>Outstanding Payment</h6>
                            </div>
                        </div>    
                        <div className={classes.detailsCard}>
                            <img src={Payment2} alt='payment' className={classes.icon}/>
                            
                            <div style={{marginTop:'55px'}}>
                                <p>N950,000.00</p>
                                <h6>Session fees</h6>
                            </div>
                        </div>    
                    </div>

                        <div className={classes.tableSection}>
                            <div className={classes.tHead}>
                                <h5 className={classes.i}>Payment History</h5>
                                {/* <Link to={'/make_payment'}><Button variant='dark'>Make a new payment</Button></Link> */}
                                
                            </div>    
                            <Table striped bordered hover className={classes.table}>
                                <thead>
                                    <tr className={classes.tableHead}>
                                        <th>S/N</th>
                                        <th>Transaction ID</th>
                                        <th>Date created</th>
                                        <th>Amount</th>
                                        <th>Description</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                {loading?(
                                    <p style={{marginTop:'10px'}}><Spinner size='sm' style={{ marginRight: 5 }}/>Fetching invoices ...</p>
                                ):invoice.length > 0 ?(
                                <tbody>
                                    {invoice.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.transaction_id}</td>
                                        <td>{new Date(item.created_at).toLocaleDateString('en-GB')}</td>
                                        <td style={{textAlign:'right'}}>{parseFloat(item.amount).toLocaleString('en-US', {
                                            minimumIntegerDigits: 1,
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })}</td>
                                        {/* <td >{item.amount}</td> */}
                                        <td>{item?.term?.description}</td>
                                        <td>
                                            <div className="btn btn-success-soft btn-sm mr-1">
                                                {/* <i className="far fa-edit"></i> */}
                                                <Link to={'/make_payment'}><Button variant='dark'>Make payment</Button></Link>
                                            </div>
                                            {/* <div className="btn btn-danger-soft btn-sm">
                                                <i className="far fa-trash-alt"></i>
                                            </div> */}
                                            </td>
                                    </tr>
                                    ))}
                                    
                                </tbody>
                                ) : (
                                    <tbody>
                                        <tr>
                                            <td colSpan="6">No invoice available for this selected child</td>
                                        </tr>
                                    </tbody>
                                )}
                                
                            </Table>
                        </div> 
                     
                </div>
            </div>

        </div>

    );
}

export default PaymentsInvoice;