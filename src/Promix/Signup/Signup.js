import React from "react";
import backgroundImage from '../../assets/promix/bgForSignup.png';
import classes from './Signup.module.css'
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../api/api";
import axios from "axios";
import eduImg from '../../assets/eduImg.png';



function SignUp() {
    const location = useLocation();
    const selectedPlan = location.state?.selectedPlan;

 

    return (
        <div className={classes.background}>
            <div className={classes.mainContainerx}>
            <div className={classes.thecntnt}>
                
                    <p className={classes.SignUptxt}>Sign Up</p>
                    <p className={classes.SignUptxtsub}>Enter your Information to continue</p>

                    <Form className={classes.formClasses}>
                    <Form.Group className={classes.formGroup}>
                        <Form.Label  >Full Name</Form.Label>
                        <Form.Control type='text' id="date" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className={classes.formGroup}>
                        <Form.Label  >Last Name</Form.Label>
                        <Form.Control type='text' id="date" placeholder="Enter your email address" />
                    </Form.Group>
                    <Form.Group className={classes.formGroup}>
                        <Form.Label  >Phone Number</Form.Label>
                        <Form.Control type='number' id="date" placeholder="Enter your email address" />
                    </Form.Group>
                    {/* <Form.Group className={classes.formGroup}>
                        <Form.Label  >Password</Form.Label>
                        <Form.Control type='password' id="date" placeholder="Enter your password" />
                    </Form.Group>
                    <Form.Group className={classes.formGroup}>
                        <Form.Label  >Re-enter Password</Form.Label>
                        <Form.Control type='password' id="date" placeholder="Enter your password" />
                    </Form.Group> */}

                    <Form.Group className={classes.formGroup}>
                        <Form.Label  >Email address</Form.Label>
                        <Form.Control type='email' id="date" placeholder="Enter your email address" />
                    </Form.Group>

                    {/* <Form.Group className={classes.formGroup}>
                        <Form.Label  >Compay Email address</Form.Label>
                        <Form.Control type='email' id="date" placeholder="Enter your email address" />
                    </Form.Group> */}

                    {/* <Form.Group className={classes.formGroup}>
                        <Form.Label  >Company Phone Number</Form.Label>
                        <Form.Control type='number' id="date" placeholder="Enter your email address" />
                    </Form.Group> */}
                    <Form.Group className={classes.formGroup}>
                        <Form.Label  >Enter Password</Form.Label>
                        <Form.Control type='password' id="date" placeholder="Enter your password" />
                    </Form.Group>
                    <Form.Group className={classes.formGroup}>
                        <Form.Label  >Re-enter Password</Form.Label>
                        <Form.Control type='password' id="date" placeholder="Enter your password" />
                    </Form.Group>
                    <Button variant="success" className={classes.snupbtn}>Sign Up</Button>
               <p className={classes.lgin}>Already have an account? <Link to={'/'} style={{textDecoration:'none'}}><span style={{color:'black'}}>Log In</span></Link></p>
                    </Form>
                {/* <p className={classes.lgin}>Don't have an account? <Link to={'/login'} style={{textDecoration:'none'}}><span>Log In</span></Link></p> */}
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

export default SignUp;