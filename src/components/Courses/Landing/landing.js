import React from 'react';
import styles from './landing.module.scss';

import Pic from '../../../images/pic.png'
import Nagu from '../../../images/Nagu.png'
const App =(props) =>{
    return(
        <>
            <div className={styles.Container1}>
                {/* <div className={styles.Mob}>
                    <img src={ Pic } alt="Art Work" width='100%'/>
                </div> */}


                <div className={styles.Child1}>
                    <div className={styles.preHeading}>
                        <p>Online | 3 Months | Live Mentorship | Interview + Job Assistance</p>
                    </div>
                    <div className={styles.heading}>
                        <p>{props.LandingContent.heading}<span style={{color: "#2E368F"}}> {props.LandingContent.headingHighlight} </span></p>
                    </div>
                    <div className={styles.subheading}>
                        <p>ONLINE (3 WEEKS)</p>
                    </div>
                    <div className={styles.containt}>
                        <p>{props.LandingContent.containt}</p>
                    </div>
                    <div className={styles.button}>
                        <button className={styles.button2}>APPLY NOW</button>
                    </div>
                </div>
                <div className={styles.Child2}>
                    <div className={styles.ImageContainer}>
                        <img src={ Nagu } alt="Art Work" width='100%'/>
                    </div>
                </div>
            </div>
        </>
    )


}


export default App;