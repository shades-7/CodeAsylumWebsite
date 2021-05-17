import React from 'react'
import styles from './Fullstack.module.scss'

import NavBar from '../../components/Common/NavBar/navbar'
import Landing from '../../components/Courses/Landing/landing'
import Overview from '../../components/Courses/Overview/overview'
import CourseDetail from '../../components/Courses/CourseDetail/course'
import Module from '../../components/Courses/Modules/modules'
import Grads from '../../components/Common/Mentor/mentor'
import Testimonials from '../../components/Home/Testimonial/testimonials'
import FAQ from '../../components/Courses/FAQ/faq'
import Footer from '../../components/Common/Footer/footer'

const fullstack =() =>{
    return(
        <React.Fragment>
            <div className={styles.landing}>
                <NavBar />
                <Landing />
            </div>
            <Overview />
            <CourseDetail />
            <Module />
            <Grads />
            <Testimonials />
            <FAQ />
            <Footer />
            
        </React.Fragment>
    )
}

export default fullstack;