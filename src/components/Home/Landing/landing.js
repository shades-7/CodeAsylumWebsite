import React from 'react';
import styles from './landing.module.scss';
import { Link } from 'gatsby'

import Pic from '../../../images/pic.png'
import Art from '../../../images/art.png'
import d from '../../Template/template'
const App =() =>{
    return(
        <>
            <div className={styles.Container1}>
                <div className={styles.Mob}>
                    <img src={ Pic } alt="Art Work" width='100%'/>
                </div>


                <div className={styles.Child1}>
                    <div className={styles.heading}>
                        <p>Start <span style={{color: "#2E368F"}}> coding </span> your future today.</p>
                    </div>
                    <div className={styles.subheading}>
                        <p>Learn from the best</p>
                    </div>
                    <div className={styles.containt}>
                        <p>Become a <span style={{color:"#2E368F"}}>star developer</span> in under 3 months <br></br> 
                        Intense Bootcamp delivered by <span style={{color:"#2E368F"}}>industry veterans</span> <br></br>
                        Coding Bootcamp for both <span style={{color:"#2E368F"}}>Beginners and Experts</span></p>
                    </div>
                    <div className={styles.button}>
                        <Link to={"/courses/FullStack_Web_Development#form"} className={styles.link}><button className={styles.button1}>Request Callback</button></Link>
                        {/* <button className={styles.button2}>Request Call</button> */}
                    </div>
                </div>
                <div className={styles.Child2}>
                    <img src={ Art } alt="Art Work" width='100%'/>
                </div>
            </div>
        </>
    )


}


export default App;