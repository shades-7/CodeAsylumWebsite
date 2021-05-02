import React from 'react'
import styles from './Fullstack.module.scss'
import NavBar from '../../components/Common/NavBar/navbar'
import Landing from '../../components/Courses/Landing/landing'

const fullstack =() =>{
    return(
        <>
            <div className={styles.landing}>
                <NavBar />
                <Landing />
            </div>
            
            
        </>
    )
}

export default fullstack;