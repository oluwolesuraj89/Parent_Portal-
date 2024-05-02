import React from "react";
import classes from '../../Pages/Results Sheet/ResultSheet.module.css';
import logoPlaceholder from '../../assets/promix/logoPlaceholder.png';


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
                        <div className={classes.HeaderLine}/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Result_Sheet;