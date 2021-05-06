import React from 'react'
import styles from './Fullstack.module.scss'

import NavBar from '../../components/Common/NavBar/navbar'
import Landing from '../../components/Courses/Landing/landing'
import Overview from '../../components/Courses/Overview/overview'
import CourseDetail from '../../components/Courses/CourseDetail/course'
import Testimonials from '../../components/Home/Testimonial/testimonials'
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
            <Testimonials />
            <Footer />
            
        </React.Fragment>
    )
}

export default fullstack;