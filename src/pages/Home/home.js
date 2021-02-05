import React from 'react';
import styles from './home.module.scss';

import NavBar from '../../components/NavBar/navbar';
import Landing from '../../components/Landing/landing'
import Program from '../../components/ProgramIncludes/program'


const App =() =>{
    return(
        <>
         <div className={styles.landing}>
            <NavBar />
            <Landing />
         </div>
         <Program />
        </>
    )
}


export default App;

