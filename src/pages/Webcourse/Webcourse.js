import React from 'react';
import styles from './Webcourse.module.scss';
import NavBar from '../../components/NavBar/navbar'

import Art from '../../images/art.png';
import Logo from '../../images/LogoBlack.png'


const App =() =>{
    return(
        <>
         <div className={styles.landing}>
            <NavBar />
            <div className={styles.Container1}>
                <div className={styles.Child1}>
                </div>
                <div className={styles.Child2}>
                    <img src={ Art } alt="Art Work" width='100%'/>
                </div>
            </div>
         </div>
        </>
    )


}


export default App;

