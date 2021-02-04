import React from 'react';
import styles from './landing.module.scss';


import Art from '../../images/art.png'
const App =() =>{
    return(
        <>
            <div className={styles.Container1}>
                <div className={styles.Child1}>
                    <div className={styles.heading}>
                        <p>Start <span style={{color: "#2E368F"}}> coding </span> your future today.</p>
                    </div>
                    <div className={styles.subheading}>
                        <p>Learn from the best</p>
                    </div>
                    <div className={styles.containt}>
                        <p>Become a star developer in under 3 months <br></br> 
                        Intense Bootcamp delivered by industry veterans <br></br>
                        Coding Bootcamp for both Beginners and Experts</p>
                    </div>
                    <div className={styles.button}>
                        <button className={styles.button1}>Online Bootcamp</button>
                        <button className={styles.button2}>Offline Bootcamp</button>
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