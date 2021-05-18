import React from 'react'
import styles from './template.module.scss'

import NavBar from '../../components/Common/NavBar/navbar'
import Landing from '../../components/Courses/Landing/landing'
import Overview from '../../components/Courses/Overview/overview'
import CourseDetail from '../../components/Courses/CourseDetail/course'
import Module from '../../components/Courses/Modules/modules'
import Grads from '../../components/Common/Mentor/mentor'
import Form from '../../components/Courses/Form/form'
import Testimonials from '../../components/Home/Testimonial/testimonials'
import FAQ from '../../components/Courses/FAQ/faq'
import Footer from '../../components/Common/Footer/footer'

import { overview, Data }   from './Content/Dsa'
import { overviewFS, DataFS } from './Content/FullstackFS'
import { overviewDA, DataDA } from './Content/DataAnalysts'
import {overviewML, DataML} from './Content/Machine'


const fullstack =() =>{

    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
    let CDcontent, ModuleContent;

    if(pathname === "/courses/FullStack_Web_Development"){
        CDcontent = overviewFS
        ModuleContent= DataFS
    }
    else if(pathname === "/courses/DSA"){
        CDcontent= overview
        ModuleContent= Data
    }
    else if(pathname === "/courses/Data_Ananlyst_with_Bussiness_Analysts"){
        CDcontent = overviewDA
        ModuleContent = DataDA
    }
    else if(pathname === "/courses/Data_Science_with_Machine_Learning"){
        CDcontent = overviewML
        ModuleContent= DataML
    }

  
    return(
        <React.Fragment>
            <div className={styles.landing}>
                <NavBar />
                <Landing />
            </div>
            <Overview />
            <CourseDetail CDcontent={CDcontent}/>
            <Module ModuleContent={ModuleContent}/>
            <Grads />
            <Form />
            <Testimonials />
            <FAQ />
            <Footer />
        </React.Fragment>
    )
}

export default fullstack;