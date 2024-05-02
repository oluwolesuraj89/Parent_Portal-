import React from "react";
import classes from '../../Pages/Results Sheet/ResultSheet.module.css';
import logoPlaceholder from '../../assets/promix/logoPlaceholder.png';
import student from '../../assets/promix/student.png';


const Result_Sheet = () => {
    
    return (
        <div>         
            <div className={classes.mainDiv}>
                <div className={classes.header}>
                    <img src={logoPlaceholder} className={classes.logoPlaceholder}/>
                    <div className={classes.headerTxt}>
                        <p className={classes.fedTxt}>FEDERAL UNIVERSITY OF AGRICULTURE</p>
                        <p className={classes.intTxt}>INTERNATIONAL SCHOOL (FUNNIS), ABEOKUTA</p>
                        <p className={classes.adrTxt}>Address: Alabata Road, Abeokuta Ogun State</p>
                        <p className={classes.emailtxt}>Email: funis2004@yahoo.co.uk | Tel: 08055108853, 08162955615</p>
                    </div>
                </div>
                <div className={classes.HeaderLine}/>

                <div className={classes.underLineTxt}>
                    <p className={classes.co}>JUNIOR SECONDARY SCHOOL (JSS) REPORT SHEET</p>
                    <p className={classes.co}>1ST TERM 2022/2023 SESSION</p>
                </div>

                <div className={classes.labelFlex}>
                    {/* <div>
                        <div className={classes.flexing}>
                            <p className={classes.label}>STUDENT:</p>
                            <p className={classes.value}>OWUMI, FOLASOPE</p>
                        </div>
                        <div className={classes.flexing}>
                            <p>ADMISSION NO:</p>
                            <p className={classes.value1}>US/21/179</p>
                        </div>
                        <div className={classes.flexing}>
                            <p>SEX:</p>
                            <p className={classes.value2}>F</p>
                        </div>
                        <div className={classes.flexing}>
                            <p>CLASS:</p>
                            <p className={classes.value3}>JS2BLUE</p>
                        </div>
                    </div> */}

                    <div>
                    <table>
                                <tr>
                                    <td>STUDENT:</td>
                                    <td className={classes.deep}>OWUMI, FOLASOPE</td>
                                </tr>
                                <tr>
                                    <td>ADMISSION NO:</td>
                                    <td className={classes.deep}>US/21/179</td>
                                </tr>
                                <tr>
                                    <td>SEX:</td>
                                    <td className={classes.deep}>F</td>
                                </tr>
                                <tr>
                                    <td>CLASS:</td>
                                    <td className={classes.deep}>JS2BLUE</td>
                                </tr>
                            </table>
                    </div>
                    

                    <img src={student} className={classes.student}/>
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

                            <tr>
                                <td className={classes.rowing}>1</td>
                                <td className={classes.rowing1}>**ENGLISH LANGUAGE</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>9</td>
                                {/* <td className={classes.rowing}>12</td> */}
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>62</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>GS</td>
                                <td className={classes.rowing}>WEAK CREDIT</td>
                                {/* <td>12</td> */}
                            </tr>

                            <tr>
                                <td className={classes.rowing}>2</td>
                                <td className={classes.rowing1}>*MATHEMATICS</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>9</td>
                                {/* <td className={classes.rowing}>12</td> */}
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>62</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>GS</td>
                                <td className={classes.rowing}>WEAK PASS</td>
                                {/* <td>12</td> */}
                            </tr>

                            <tr>
                                <td className={classes.rowing}>3</td>
                                <td className={classes.rowing1}>AGRICULTURAL SCIENCE</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>9</td>
                                {/* <td className={classes.rowing}>12</td> */}
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>62</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>GS</td>
                                <td className={classes.rowing}>WEAK CREDIT</td>
                                {/* <td>12</td> */}
                            </tr>

                            <tr>
                                <td className={classes.rowing}>4</td>
                                <td className={classes.rowing1}>BASIC SCIENCE</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>9</td>
                                {/* <td className={classes.rowing}>12</td> */}
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>62</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>GS</td>
                                <td className={classes.rowing}>WEAK CREDIT</td>
                                {/* <td>12</td> */}
                            </tr>

                            <tr>
                                <td className={classes.rowing}>5</td>
                                <td className={classes.rowing1}>BASIC TECHNOLOGY</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>9</td>
                                {/* <td className={classes.rowing}>12</td> */}
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>62</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>GS</td>
                                <td className={classes.rowing}>PASS</td>
                                {/* <td>12</td> */}
                            </tr>

                            <tr>
                                <td className={classes.rowing}>6</td>
                                <td className={classes.rowing1}>BUSINESS STUDIES</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>9</td>
                                {/* <td className={classes.rowing}>12</td> */}
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>62</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>GS</td>
                                <td className={classes.rowing}>PASS</td>
                                {/* <td>12</td> */}
                            </tr>

                            <tr>
                                <td className={classes.rowing}>7</td>
                                <td className={classes.rowing1}>CHRISTAIND RELIGIOUS STUDIES</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>9</td>
                                {/* <td className={classes.rowing}>12</td> */}
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>62</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>GS</td>
                                <td className={classes.rowing}>PASS</td>
                                {/* <td>12</td> */}
                            </tr>

                            <tr>
                                <td className={classes.rowing}>8</td>
                                <td className={classes.rowing1}>CIVIC EDUCATION</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>9</td>
                                {/* <td className={classes.rowing}>12</td> */}
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>62</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>GS</td>
                                <td className={classes.rowing}>FAIR CREDIT</td>
                                {/* <td>12</td> */}
                            </tr>

                            <tr>
                                <td className={classes.rowing}>9</td>
                                <td className={classes.rowing1}>COMPUTER STUDIES</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>9</td>
                                {/* <td className={classes.rowing}>12</td> */}
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>62</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>GS</td>
                                <td className={classes.rowing}>WEAK CREDIT</td>
                                {/* <td>12</td> */}
                            </tr>

                            <tr>
                                <td className={classes.rowing}>10</td>
                                <td className={classes.rowing1}>CREATIVE ARTS</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>9</td>
                                {/* <td className={classes.rowing}>12</td> */}
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>62</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>GS</td>
                                <td className={classes.rowing}>WEAK PASS</td>
                                {/* <td>12</td> */}
                            </tr>

                            <tr>
                                <td className={classes.rowing}>11</td>
                                <td className={classes.rowing1}>FRENCH</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>9</td>
                                {/* <td className={classes.rowing}>12</td> */}
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>62</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>GS</td>
                                <td className={classes.rowing}>FAIL</td>
                                {/* <td>12</td> */}
                            </tr>

                            <tr>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing1}>HISTORY</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>9</td>
                                {/* <td className={classes.rowing}>12</td> */}
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>62</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>GS</td>
                                <td className={classes.rowing}>FAIL</td>
                                {/* <td>12</td> */}
                            </tr>

                            <tr>
                                <td className={classes.rowing}>13</td>
                                <td className={classes.rowing1}>HOME ECONOMICS</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>9</td>
                                {/* <td className={classes.rowing}>12</td> */}
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>62</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>GS</td>
                                <td className={classes.rowing}>PASS</td>
                                {/* <td>12</td> */}
                            </tr>

                            <tr>
                                <td className={classes.rowing}>14</td>
                                <td className={classes.rowing1}>MUSIC</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>9</td>
                                {/* <td className={classes.rowing}>12</td> */}
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>62</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>GS</td>
                                <td className={classes.rowing}>FAIL</td>
                                {/* <td>12</td> */}
                            </tr>

                            <tr>
                                <td className={classes.rowing}>15</td>
                                <td className={classes.rowing1}>PHYSICAL HEALTH EDUCATION</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>9</td>
                                {/* <td className={classes.rowing}>12</td> */}
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>62</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>GS</td>
                                <td className={classes.rowing}>FAIL</td>
                                {/* <td>12</td> */}
                            </tr>

                            <tr>
                                <td className={classes.rowing}>16</td>
                                <td className={classes.rowing1}>SOCIAL STUDIES</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>9</td>
                                {/* <td className={classes.rowing}>12</td> */}
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>12</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>62</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>C6</td>
                                <td className={classes.rowing}>GS</td>
                                <td className={classes.rowing}>PASS</td>
                                {/* <td>12</td> */}
                            </tr>

                            <tr>
                                <td className={classes.rowing}>17</td>
                                <td className={classes.rowing1}>YORUBA LANGUAGE</td>
                                <td className={classes.rowing}>7</td>
                                <td className={classes.rowing}>7</td>
                                {/* <td className={classes.rowing}>12</td> */}
                                <td className={classes.rowing}>7</td>
                                <td className={classes.rowing}>7</td>
                                <td className={classes.rowing}>7</td>
                                <td className={classes.rowing}>7</td>
                                <td className={classes.rowing}>F9</td>
                                <td className={classes.rowing}>49</td>
                                <td className={classes.rowing}>F9</td>
                                <td className={classes.rowing}>F9</td>
                                <td className={classes.rowing}>NGS</td>
                                <td className={classes.rowing}>FAIL</td>
                                {/* <td>12</td> */}
                            </tr>
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
                                            <td  className={classes.noSub}>No of Subjects</td>
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
                                            <td className={classes.noSub}>No of Subjects</td>
                                            <td>17</td>
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
                                    <td>TOTAL SCORE:</td>
                                    <td>920.5</td>
                                </tr>
                                <tr>
                                    <td>AVERAGE:</td>
                                    <td>54.15%</td>
                                </tr>
                                <tr>
                                    <td>OVERALL GRADE:</td>
                                    <td>E8</td>
                                </tr>
                                <tr>
                                    <td>OVERALL RATING:</td>
                                    <td>WEAK PASS</td>
                                </tr>
                            </table>
                            <div className={classes.headerLine}/>
                    </div>
            </div>
        </div>

    );
}

export default Result_Sheet;