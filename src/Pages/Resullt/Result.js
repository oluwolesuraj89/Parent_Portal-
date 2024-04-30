import React, { useState } from 'react';
import SelectInput from './SelectInput';
import SelectClassInput from './SelecctClassInput';
import SelectTermInput from './SelecctTermInput';
import SelectSubjectInput from './SelecctSubjectInput';
import classes from './Result.module.css';
import MainDashboard from '../Main Dashboard/MainDashoard';
import USER from '../../assets/promix/MyUser.svg'
import { Form } from 'react-bootstrap';



const Result = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptions, setSelectedOptions] = useState('');
    const [selectedOptionss, setSelectedOptionss] = useState('');
    const [selectedOptionsss, setSelectedOptionsss] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSelectedChange = (event) => {
        setSelectedOptions(event.target.value);
    };

    const handleSelectedTermChange = (event) => {
        setSelectedOptionss(event.target.value);
    };
    const handleSelectedSubjectChange = (event) => {
        setSelectedOptionsss(event.target.value);
    };



    const options = [
        { value: 'option1', label: 'View result:Full session' },
        { value: 'option2', label: 'Session 1' },
        { value: 'option3', label: 'Session 2' },
        { value: 'option4', label: 'Session 3' },
    ];
    const classOptions = [
        { value: 'option1', label: 'Select class' },
        { value: 'option2', label: 'Class 1' },
        { value: 'option3', label: 'Class 2' },
        { value: 'option4', label: 'Class 3' },
    ];
    const termOptions = [
        { value: 'option1', label: 'Select Term' },
        { value: 'option2', label: 'Term 1' },
        { value: 'option3', label: 'Term 2' },
        { value: 'option4', label: 'Term 3' },
    ];
    const subjectOptions = [
        { value: 'option1', label: 'Select Subject' },
        { value: 'option2', label: 'Mathematics' },
        { value: 'option3', label: 'English' },
        { value: 'option4', label: 'Creative Art' },
    ];

    return (

        <div>
            <MainDashboard />
            <div className={classes.formSection}>
                <div className={classes.formSectionHeader}>
                    <div style={{ textAlign: 'left' }}>
                        <p style={{ margin: '0' }}>Welcome</p>
                        <h3>
                            Ololade Lawanson
                        </h3>

                    </div>
                    <div>
                        <h3 style={{ color: 'black' }}>Result</h3>
                    </div>
                    <div className={classes.users}>
                        <h6 >Mosumola Lawanson</h6>
                        <img src={USER} alt='User' />
                        <i class='bx bxs-chevron-down'></i>
                    </div>
                </div>

                <div className={classes.chartCont}>
                    <div className={classes.sessionresult}>
                        <p className={classes.frsttxt}>View your Child's result</p>
                        {/* <Form.Select
                       
                       >
                        <options>na me</options>
                       </Form.Select> */}
                        <SelectInput

                            options={options}
                            value={selectedOption}
                            onChange={handleSelectChange}

                        />

                    </div>

                    <div className={classes.hrlne}>

                    </div>

                    <p className={classes.scndtxt}>View the result of your child for the entire session</p>

                    <div className={classes.childsinfo}>
                        
                        <div>

                            <SelectClassInput
                                options={classOptions}
                                value={selectedOptions}
                                onChange={handleSelectedChange}
                            />
                        </div>
                        <div>

                            <SelectTermInput
                                options={termOptions}
                                value={selectedOptionss}
                                onChange={handleSelectedTermChange}
                            />
                        </div>
                        <div>

                            <SelectSubjectInput
                                options={subjectOptions}
                                value={selectedOptionsss}
                                onChange={handleSelectedSubjectChange}
                            />
                        </div>
                    </div>
                    <button className={classes.rsltbtn}>Download result</button>




                </div>

            </div>



        </div>
    )
};

export default Result;