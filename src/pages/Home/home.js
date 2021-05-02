import React, {useState} from 'react';
import styles from './home.module.scss';

import NavBar from '../../components/Common/NavBar/navbar';
import Landing from '../../components/Home/Landing/landing';
import Program from '../../components/Home/ProgramIncludes/program';
import Courses from '../../components/Home/Courses/courses';
import Strength from '../../components/Home/StrengthInNumber/strength';
import Company from '../../components/Home/Company/company';
import Footer from '../../components/Common/Footer/footer';
import Graduates from '../../components/Home/Graduates/graduates';
import Testimonials from "../../components/Home/Testimonial/testimonials";
import Community from '../../components/Home/Community/community';
import Hiring from '../../components/Home/Hiring Partner/hiring';



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
         <Hiring />
         <Testimonials />
         <Community />
         <Footer />
        </>
    )
}


export default App;

