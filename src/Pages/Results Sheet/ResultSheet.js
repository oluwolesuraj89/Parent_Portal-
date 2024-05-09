import React, {useState, useEffect, Children} from 'react';
import classes from '../../Pages/Results Sheet/ResultSheet.module.css';
import logoPlaceholder from '../../assets/promix/logoPlaceholder.png';
import student from '../../assets/promix/student.png';
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from '../../Promix/api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';




const ResultSheet = () => {
    
    const location = useLocation();
    const { childrenScores, selectedChild, selectedSession, selectedTerm } = location.state || {};
    const [schools, setSchools] = useState([childrenScores?.school]);
    const [details, setDetails] = useState([childrenScores?.studentScores[0]]);
    const [childrenDetails, setChildrenDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    // const [selectedChild, setSelectedChild] = useState('');
    const [bearer, setBearer] = useState('');
    const [children, setChildren] = useState('');

    console.log(childrenScores);
    
    // const readData = async () => {
    //     try {
    //       const details = await AsyncStorage.getItem('userToken');
    //     //   const parent = await AsyncStorage.getItem('userName')
                 
    //       if (details !== null) {
    //         setBearer(details);
    //       }
    //     //   if(parent !==null){
    //     //     setParentName(parent)
    //     //   }
    //     } catch (e) {
    //       alert('Failed to fetch the input from storage');
    //     }
    //   };
    
    //   useEffect(() => {
    //     readData();
    //   }, []);
    

    // const headers = {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${bearer}`
    //   };

    //   const fetchAllChildren = async () => {
    //     setLoading(true);
    //     try {
    //         const response = await axios.get(`${BASE_URL}/get-all-children`, {headers});
    //         const result = response.data?.data
    //         setChildren(result);
    //         setSelectedChild(result[0]?.id);
    //     } catch (error) {
    //         let errorMessage = error.response?.data?.message || 'An error occurred';
    //         if (error.message === 'Network Error') {
    //             errorMessage = 'Connection error. Please check your internet connection.';
    //         }
    //         toast.error(errorMessage);
    //     } finally {
    //         setLoading(false);
    //     }
    // }

    // const fetchChildrenDetail = async () => {
    //     setIsLoading(true);
    //     try {
    //         const response = await axios.get(`${BASE_URL}/get-student-by-id?student_id=${selectedChild}`,
    //         {headers});
    //         const details = response.data?.data
    //         setChildrenDetails(details);
    //         // console.log(details, "wehereh");
    //         console.log(details, "wehereh");
    //         // setChildrenSubjects(details?.classes?.assigned);
    //         // console.log(details?.classes?.assigned, "hereee");
    //         // console.log("childrenDetails:", childrenDetails);
    //         // console.log("school:", childrenDetails?.school);
    //         // console.log("school name:", childrenDetails?.school?.name);
    //     } catch (error) {
    //         let errorMessage = error.response?.data?.message || 'An error occurred';
    //         if (error.message === 'Network Error') {
    //             errorMessage = 'Connection error. Please check your internet connection.';
    //         }
    //         toast.error(errorMessage);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // }

    
    // useEffect(() => {
    //     if (bearer) {
    //         fetchAllChildren();
    //     }
    //   }, [bearer]);

    // useEffect(() => {
    //     if (bearer) {
    //         fetchChildrenDetail(selectedChild);
    //     }
    //   }, [selectedChild, bearer]);
    
    return (
        <div className={classes.generalCont}>         
            <div className={classes.mainDiv}>
                <div className={classes.header}>
                    <div className={classes.sideImg}>         
                        {schools && schools[0]?.school_logo ? (
                            <img src={schools[0]?.school_logo} alt='img' className={classes.imgs}/>
                        ) : (
                            <img src={logoPlaceholder} className={classes.imgs}/>
                        )}
                            {/* <img src={Boy} alt='img' className={classes.imgs}/> */}
                    </div>
                    {/* <img src={logoPlaceholder} className={classes.logoPlaceholder}/> */}
                    <div className={classes.headerTxt}>
                        <p className={classes.fedTxt}>{schools[0]?.name}</p>
                        {/* <p className={classes.intTxt}>INTERNATIONAL SCHOOL (FUNNIS), ABEOKUTA</p> */}
                        <p className={classes.adrTxt}>Address: {schools[0]?.address}</p>
                        <p className={classes.emailtxt} style={{margin:'0'}}>Email: {schools[0]?.email}</p>
                    </div>
                </div>
                <div className={classes.HeaderLine}/>

                <div className={classes.underLineTxt}>
                    <p className={classes.co}>JUNIOR SECONDARY SCHOOL (JSS) REPORT SHEET</p>
                    <p className={classes.co}>{details[0]?.term?.description}</p>
                </div>

                <div className={classes.labelFlex}>
                    

                    <div>
                    <table>
                                <tr>
                                    <td>STUDENT:</td>
                                    <td className={classes.deep}>{selectedChild} {childrenDetails.last_name}</td>
                                </tr>
                                <tr>
                                    <td>ADMISSION NO:</td>
                                    <td className={classes.deep}>{details[0]?.matric_id}</td>
                                </tr>
                                <tr>
                                    <td>SEX:</td>
                                    <td className={classes.deep}>{childrenDetails.gender}</td>
                                </tr>
                                <tr>
                                    <td>CLASS:</td>
                                    <td className={classes.deep}>{details[0]?.class?.description}</td>
                                </tr>
                            </table>
                    </div>

                    <div className={classes.sideImg2}>
                            
                        {childrenDetails && childrenDetails.image ? (
                            <img src={childrenDetails.image} alt='img' className={classes.imgss}/>
                        ) : (
                            <img src={student} className={classes.student}/>
                        )}
                            {/* <img src={Boy} alt='img' className={classes.imgs}/> */}
                    </div>
                    

                    {/* <img src={student} className={classes.student}/> */}
                </div>

                    <div className={classes.resultTable}>
                        <table>
                            <thead>
                            <tr>
                                <th className={classes.aanone} colSpan="1"></th>
                                <th className={classes.aanone} colSpan="1"></th>
                                <th className={classes.jead} colSpan="8">CURRENT TERM’S WORK</th>
                                <th className={classes.jead} colSpan="4" style={{whiteSpace:'nowrap'}}>SUMMARY OF TERM’S WORK</th>
                            </tr>
                          </thead>
                          
                          <tbody>

                            <tr>
                            <td className={classes.heros}>S/N</td>
                            <td className={classes.subject}>SUBJECT</td>
                            <td className={classes.smaller}>1ST CA</td>
                            <td className={classes.smaller}>2ND CA</td>
                            <td className={classes.smaller}>EXAM</td>
                            <td className={classes.smaller}>TOTAL</td>
                            <td className={classes.smaller}>CLASS AVERAGE</td>
                            <td className={classes.smaller}>CLASS HIGHEST</td>
                            <td className={classes.smaller}>CLASS LOWEST</td>
                            <td className={classes.smaller}>GRADE</td>
                            <td className={classes.smaller}>1ST TERM TOTAL</td>
                            <td className={classes.smaller}>GRADE</td>
                            <td className={classes.smaller}>GS/NGS</td>
                            <td className={classes.remarkRow}>REMARK</td>
                            </tr>

                            {details.map((item, index)=>(
                            <tr key={index}>
                                <td className={classes.rowing}>{index + 1}</td>
                                <td className={classes.rowing1}>{item?.subject?.name}</td>
                                <td className={classes.rowing}>{item?.assessment_category?.score}</td>
                                <td className={classes.rowing}>9</td>
                                {/* <td className={classes.rowing}>12</td> */}
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>62</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>{item?.grade}</td>
                                <td className={classes.rowing}>GS</td>
                                <td className={classes.rowing}>{item?.remark}</td>
                                {/* <td>12</td> */}
                            </tr>
                            ))}

                            
                        </tbody>
                        </table>
                    </div>

                    <div className={classes.info}>
                        <div className={classes.performance}>
                            <table className={classes.lativeTable}>
                                <thead>
                                    <tr>
                                        <td className={classes.doja} colSpan="10">CUMULATIVE PERFORMANCE ANALYSIS</td>
                                        <th className={classes.credit} rowSpan="2">No. Credit<br/>and Above</th>
                                    </tr>
                                        <tr>
                                            <td  className={classes.noSub1}>No of Subjects</td>
                                            <td className={classes.noSub}>A1</td>
                                            <td className={classes.noSub}>B2</td>
                                            <td className={classes.noSub}>B3</td>
                                            <td className={classes.noSub}>C4</td>
                                            <td className={classes.noSub}>C5</td>
                                            <td className={classes.noSub}>C6</td>
                                            <td className={classes.noSub}>D7</td>
                                            <td className={classes.noSub}>E8</td>
                                            <td className={classes.noSub}>F9</td>
                                            {/* <td></td> */}
                                        </tr>
                                        </thead>

                                    <tbody>
                                        <tr>
                                            <td className={classes.noSub}>17</td>
                                            <td> </td>
                                            <td> </td>
                                            <td> </td>
                                            {/* <td> </td> */}
                                            <td> </td>
                                            <td className={classes.noSub}>1</td>
                                            <td className={classes.noSub}>3</td>
                                            <td className={classes.noSub}>4</td>
                                            <td className={classes.noSub}>4</td>
                                            <td className={classes.noSub}>5</td>
                                            <td className={classes.noSub}>4</td>
                                        </tr>
                                    </tbody>
                                    
                            </table>
                        </div>

                        <div className={classes.next}>
                            <div>
                                <div className={classes.key}>
                                    <p className={classes.keyTxt}>KEY TO GRADES </p>
                                </div>
                                <div className={classes.keysTale}>
                                    <table className={classes.keyTable}>

                                     <tbody>   
                                            <tr>
                                                <td>85% and Above</td>
                                                <td>A1</td>
                                                <td>EXCELLENT</td>
                                            </tr>
                                        
                                        
                                            <tr>
                                                <td>80% to 84.99%</td>
                                                <td>B2</td>
                                                <td>VERY GOOD</td>
                                            </tr>

                                            <tr>
                                                <td>75% to 79.99%</td>
                                                <td>B2</td>
                                                <td>VERY GOOD</td>
                                            </tr>

                                            <tr>
                                                <td>70% to 74.99%</td>
                                                <td>B3</td>
                                                <td>GOOD</td>
                                            </tr>

                                            <tr>
                                                <td>70% to 74.99%</td>
                                                <td>C4</td>
                                                <td>GOOD CREDIT</td>
                                            </tr>

                                            <tr>
                                                <td>60% to 64.99%</td>
                                                <td>C5</td>
                                                <td>FAIR CREDIT</td>
                                            </tr>

                                            <tr>
                                                <td>60% to 64.99%</td>
                                                <td>C6</td>
                                                <td>WEAK CREDIT</td>
                                            </tr>

                                            <tr>
                                                <td>55% to 59.99%</td>
                                                <td>D7</td>
                                                <td>PASS</td>
                                            </tr>

                                            <tr>
                                                <td>50% to 54.99%</td>
                                                <td>E8</td>
                                                <td>WEAK PASS</td>
                                            </tr>
                                            <tr>
                                                <td>50% to 54.99%</td>
                                                <td>E8</td>
                                                <td>WEAK PASS</td>
                                            </tr>

                                            <tr>
                                                <td>50% BELOW</td>
                                                <td>F9</td>
                                                <td>FAIL</td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.last}>
                            <table>
                                <tr>
                                    <td className={classes.local}>TOTAL SCORE:</td>
                                    <td className={classes.inside}>920.5</td>
                                </tr>
                                <tr>
                                    <td className={classes.local}>AVERAGE:</td>
                                    <td className={classes.inside}>54.15%</td>
                                </tr>
                                <tr>
                                    <td className={classes.local}>OVERALL GRADE:</td>
                                    <td className={classes.inside}>E8</td>
                                </tr>
                                <tr>
                                    <td className={classes.local}>OVERALL RATING:</td>
                                    <td className={classes.inside}>WEAK PASS</td>
                                </tr>
                            </table>
                            <div className={classes.principal}>
                                <p className={classes.principalName}>MR ISAAC OGUNBUNMI</p>
                                <p className={classes.principalTxt}>PRINCIPAL</p>
                            </div>
                    </div>
                    <div className={classes.tree}>
                        <div className={classes.HeaderLine2}/>
                    <p className={classes.excellenceTxt}>Excellence and Integrity</p>
                    </div>
                    
            </div>
        </div>

    );
}

export default ResultSheet;