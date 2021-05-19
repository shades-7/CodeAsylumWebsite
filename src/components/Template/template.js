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

import { detailsDSA, DataDSA, overviewDSA, landingDSA }   from './Content/Dsa'
import { detailsFS, DataFS, overviewFS, landingFS } from './Content/FullstackFS'
import { detailsDA, DataDA, overviewDA, landingDA } from './Content/DataAnalysts'
import {detailsML, DataML, overviewML, landingML} from './Content/Machine'


const fullstack =() =>{

    const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
    let CDcontent, ModuleContent, OverviewContent, LandingContent;

    if(pathname === "/courses/FullStack_Web_Development"){
        CDcontent = detailsFS
        ModuleContent= DataFS
        OverviewContent =overviewFS
        LandingContent = landingFS
    }
    else if(pathname === "/courses/DSA"){
        CDcontent= detailsDSA
        ModuleContent= DataDSA
        OverviewContent =overviewDSA
        LandingContent = landingDSA
    }
    else if(pathname === "/courses/Data_Ananlyst_with_Bussiness_Analysts"){
        CDcontent = detailsDA
        ModuleContent = DataDA
        OverviewContent =overviewDA
        LandingContent = landingDA
    }
    else if(pathname === "/courses/Data_Science_with_Machine_Learning"){
        CDcontent = detailsML
        ModuleContent= DataML
        OverviewContent =overviewML
        LandingContent = landingML
    }

  
    return(
        <React.Fragment>
            <div className={styles.landing}>
                <NavBar />
                <Landing LandingContent={LandingContent}/>
            </div>
            <Overview OverviewContent={OverviewContent}/>
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