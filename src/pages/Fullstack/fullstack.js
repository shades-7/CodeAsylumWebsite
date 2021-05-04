import React from 'react'
import styles from './Fullstack.module.scss'

import NavBar from '../../components/Common/NavBar/navbar'
import Landing from '../../components/Courses/Landing/landing'
import Overview from '../../components/Courses/Overview/overview'
import CourseDetail from '../../components/Courses/CourseDetail/course'

const fullstack =() =>{
    return(
        <>
            <div className={styles.landing}>
                <NavBar />
                <Landing />
                <Overview />
                <CourseDetail />
            </div>
            
            
        </>
    )
}

export default fullstack;