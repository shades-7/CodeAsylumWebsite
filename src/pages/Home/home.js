import React from 'react';
import styles from './home.module.scss';

import NavBar from '../../components/NavBar/navbar';
import Landing from '../../components/Landing/landing';
import Program from '../../components/ProgramIncludes/program';
import Courses from '../../components/Courses/courses';
import Strength from '../../components/StrengthInNumber/strength';
import Company from '../../components/Company/company';
import Footer from '../../components/Footer/footer';
import Graduates from '../../components/Graduates/graduates';
import Testimonials from "../../components/Testimonial/testimonials";



const App =() =>{
    return(
        <>
         <div className={styles.landing}>
            <NavBar />
            <Landing />
         </div>
         <Program />
         <Courses />
         <Strength />
         <Company />
         <Graduates />
         <Testimonials />
         <Footer />
        </>
    )
}


export default App;

