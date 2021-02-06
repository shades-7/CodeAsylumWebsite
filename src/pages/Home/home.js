import React from 'react';
import styles from './home.module.scss';

import NavBar from '../../components/NavBar/navbar';
import Landing from '../../components/Landing/landing';
import Program from '../../components/ProgramIncludes/program';
import Courses from '../../components/Courses/courses';


const App =() =>{
    return(
        <>
         <div className={styles.landing}>
            <NavBar />
            <Landing />
         </div>
         <Program />
         <Courses />
        </>
    )
}


export default App;

