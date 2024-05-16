import React, { useState } from "react";
import classes from './Login.module.css'
import backgroundImg from '../../assets/promix/LogIn.png'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../api/api";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import crossedEyeIcon from '../../assets/promix/eye-slash.png';
import eduImg from '../../assets/eduImg.png';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const handleLogin = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`${BASE_URL}/login`,
                {
                    email: email,
                    password: password
                }
            );
            //  console.log(response);
            const name = response.data?.data?.user?.name;
            const token = response.data?.data?.token;
            
           
            AsyncStorage.setItem('userToken', token);
            AsyncStorage.setItem('userName', name);


            if (location.state && location.state.from) {
                navigate(location.state.from);
            } else {
                navigate('/dashboard');
            }

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

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !isButtonDisabled) {
            handleLogin();
        }
    };

    const isButtonDisabled = !email || !password;


    return (

        <div className={classes.background}>
            <ToastContainer />
            <div className={classes.mainContainerx}>
                <div className={classes.thecntnt}>
                    <div className={classes.head}>
                        <p className={classes.SignUptxt}>Login</p>
                        <p className={classes.SignUptxtsub}>Enter your Information to continue</p>
                    </div>
                    <Form className={classes.formz}>
                        <Form.Group className={classes.formGroup}>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control onChange={(e) => setEmail(e.target.value)} type='text'  placeholder="Enter your email address" style={{ backgroundColor: '#ffff', color: "#000" }} />
                        </Form.Group>
                        <Form.Group className={classes.formGroup}>
                            <Form.Label  >Password</Form.Label>
                            <Form.Control onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} placeholder="Enter your password address" style={{ backgroundColor: '#ffff', color: "#000", }} onKeyPress={handleKeyPress} />
                            <button
                                type="button"
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    float: 'right',
                                    left: "-10px",
                                    marginTop: '-40px',
                                    position: 'relative',
                                    zIndex: 2,
                                    // displayf:'flex',
                                    // justifyContent:'space-between',
                                    // alignItems:'center'
                                }}
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <img src={crossedEyeIcon} alt="Hide Password" style={{ height: "20px", width: "20px"}} />
                                ) : (
                                    '👁️'
                                )}
                            </button>
                        </Form.Group>
                    </Form>
                    <Button onClick={handleLogin} variant="success" className={classes.snupbtn} disabled={isButtonDisabled}>
                        {loading ? (
                            <>
                                <Spinner size='sm' />
                                <span style={{ marginLeft: '5px' }}>Signing in...</span>
                            </>
                        ) : (
                            "Log In"
                        )}
                    </Button>
                    <p className={classes.lgin}>Don't have an account? <Link to={'/signup'} style={{ textDecoration: 'none' }}><span>Sign Up</span></Link></p>
                </div>
            </div>

            <div className={classes.mainContainerx2}>
            <div className={classes.thecntnt}>
                <img src={eduImg} className={classes.eduImg}/>
                <p className={classes.welcomeTo}>Welcome to our Parents Portal</p>
                <ul className={classes.listOf}>
                    <li>View all your children's information</li>
                    <li>Generate your invoice to pay your child's school fees</li>
                    <li>View payment history for your children </li>
                    <li>View your children's result</li>
                    <li>Read school announcements</li>
                    <li>See your children's school attendance</li>
                </ul>

            </div>
        </div> 

        </div>
    );

}
export default Login;