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
    const { childrenScores, selectedChild, selectedClass, selectedSession, selectedTerm } = location.state || {};
    const [schools, setSchools] = useState([childrenScores?.school]);
    const [details, setDetails] = useState([childrenScores?.studentScores]);
    const [subjects, getSubjects] = useState([childrenScores?.subjects]);
    const [grades, getGrades] = useState([childrenScores?.grade]);
    const [allvaraibles, getAllDatas] = useState([childrenScores]);
    const [childrenDetails, setChildrenDetails] = useState([childrenScores?.student]);
    const [caLoading, setCaLoading] = useState(false);
    // const [loading, setLoading] = useState(false);
    // const [scoLoading, setScoLoading] = useState(false);
    // const [selectedChild, setSelectedChild] = useState('');
    const [bearer, setBearer] = useState('');
    const [childrenCa, setChildrenCa] = useState([]);
    // const [caScore, setCaScore] = useState([]);
    // const [children, setChildren] = useState('');

    console.log('childrenScores', childrenScores)
    // console.log('student', childrenDetails)
    // console.log('class', childrenScores?.student?.class)
    

    const readData = async () => {
        try {
          const details = await AsyncStorage.getItem('userToken');
                 
          if (details !== null) {
            setBearer(details);
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

    
    const fetchScoreForCa = (itemId, scoreId) => {
        const Alldata = details[0];
        const SubjectId = itemId;
        const caId = scoreId;
        const foundItem = Alldata.filter(item => item['subject_id'] == itemId && item['status'] == scoreId);
        
        return  foundItem?.[0]?.['score'] || 0;
    };
    const fetchGradeForCa = (itemId) => {
        const Alldata = grades[0];
        // console.log(Alldata);
        const SubjectId = itemId;
        const foundItem = Alldata.filter(item => item['subject'] == itemId);
        
        return  foundItem?.[0]?.['grade'] || "";
    };
    const fetchCommentForCa = (itemId) => {
        const Alldata = grades[0];
        // console.log(Alldata);
        const SubjectId = itemId;
        const foundItem = Alldata.filter(item => item['subject'] == itemId);
        
        return  foundItem?.[0]?.['comment'] || "";
    };
    const fetchTotalScoreForCa = (itemId) => {
        const Alldata = details[0];
        const columnToSum = 'score';
        const SubjectId = itemId;
        const foundItem = Alldata.filter(item => item['subject_id'] == itemId);
        // Calculate the total sum
        const totalSum = foundItem.reduce((acc, curr) => acc + parseInt(curr[columnToSum]), 0);
        return  totalSum || 0;
    };

    const fetchAverageScoreForCa = (itemId) => {
        const Alldata = details[0];
        const columnToSum = 'score';
        const SubjectId = itemId;
        const foundItem = Alldata.filter(item => item['subject_id'] == itemId);
        // Calculate the total sum
        const totalSum = foundItem.reduce((acc, curr) => acc + parseInt(curr[columnToSum]), 0);
        // Calculate the average
        const averageScore = foundItem.length > 0 ? totalSum / foundItem.length : 0;
        // Convert to whole number if averageScore is decimal
        const roundedAverageScore = Math.round(averageScore);
        return roundedAverageScore;
    };

    const fetchAllCa = async () => {
        setCaLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/get-class-ca?class_id=${selectedClass}`,
            {headers});
            const caData = response.data?.data
            setChildrenCa(caData);
      
        } catch (error) {
            let errorMessage = error.response?.data?.message || 'An error occurred';
            if (error.message === 'Network Error') {
                errorMessage = 'Connection error. Please check your internet connection.';
            }
            toast.error(errorMessage);
        } finally {
            setCaLoading(false);
        }
    }

    useEffect(() => {
        if (bearer) {
            fetchAllCa(selectedClass);
        }
      }, [selectedClass, bearer]);

      let totalSubjects = 0;
    
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
                    </div>
                    <div className={classes.headerTxt}>
                        <p className={classes.fedTxt}>{schools[0]?.name}</p>
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
                            <td className={classes.deep}>{childrenDetails[0].first_name} {childrenDetails[0].last_name}</td>
                        </tr>
                        <tr>
                            <td>ADMISSION NO:</td>
                            <td className={classes.deep}>{childrenDetails[0]?.student_id}</td>
                        </tr>
                        <tr>
                            <td>SEX:</td>
                            <td className={classes.deep}>{childrenDetails[0].gender}</td>
                        </tr>
                        <tr>
                            <td>CLASS:</td>
                            {/* <td className={classes.deep}>{childrenDetails[0]?.student?.class}</td> */}
                            <td className={classes.deep}>Pry {selectedClass}</td>
                        </tr>
                    </table>
                    </div>

                    <div className={classes.sideImg2}>
                            
                        {childrenDetails && childrenDetails[0].image ? (
                            <img src={childrenDetails[0].image} alt='img' className={classes.imgss}/>
                        ) : (
                            <img src={student} className={classes.student}/>
                        )}
                    </div>
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
                                {childrenCa.map((item, index)=>(
                                    // <div key={index}>
                                        <td className={classes.smaller}>{item?.name}</td>
                                    // </div>
                                ))}
                                
                                <td className={classes.smaller}>TOTAL</td>
                                <td className={classes.smaller}>CLASS AVERAGE</td>
                                <td className={classes.smaller}>CLASS HIGHEST</td>
                                <td className={classes.smaller}>CLASS LOWEST</td>
                                {/* <td className={classes.smaller}>GRADE</td> */}
                                <td className={classes.smaller}>1ST TERM TOTAL</td>
                                <td className={classes.smaller}>GRADE</td>
                                <td className={classes.smaller}>GS/NGS</td>
                                <td className={classes.remarkRow}>REMARK</td>
                            </tr>
                            
                            {subjects[0].map((item, index)=>{
                                totalSubjects ++
                            return(
                            <tr key={index}>
                                <td className={classes.rowing}>{index + 1}</td>
                                <td className={classes.rowing1}>{item?.name}</td>

                               {childrenCa.map((score, index)=>(
                                    // <div key={index}>
                                        <td key={index} className={classes.rowing}>{fetchScoreForCa(item.id, score.id)}</td>
                                    // </div>
                                ))}

                          
                                <td className={classes.rowing}>{fetchTotalScoreForCa(item.id)}</td>
                                <td className={classes.rowing}>{fetchAverageScoreForCa(item.id)}</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>C6</td>
                                {/* <td className={classes.rowing}>62</td> */}
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>{fetchGradeForCa(item.id)}</td>
                                <td className={classes.rowing}>GS</td>
                                <td className={classes.rowing}>{fetchCommentForCa(item.id)}</td>
                                {/* <td>12</td> */}
                            </tr>
                            );
                            })}

                            
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
                                            <td className={classes.noSub}>{totalSubjects}</td>
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

                        {/* <div > */}
                            <div className={classes.next}>
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

                                            {/* <tr>
                                                <td>75% to 79.99%</td>
                                                <td>B2</td>
                                                <td>VERY GOOD</td>
                                            </tr> */}

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

                                            {/* <tr>
                                                <td>50% to 54.99%</td>
                                                <td>E8</td>
                                                <td>WEAK PASS</td>
                                            </tr> */}
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
                        {/* </div> */}
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