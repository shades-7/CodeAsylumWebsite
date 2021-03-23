import React from 'react'
import styles from './mentor.module.scss'

import Layout from '../../components/Common/layout'
import Navbar from '../../components/Common/NavBar/navbar'
import Footer from '../../components/Common/Footer/footer'
import { getData } from './mentorContent'

import BG from '../../images/MentorBG.png'


const mentor = () =>{
    const content = getData();
    return(
       <Layout>
           <div className={styles.container}>
                <Navbar/>
                <div className={styles.background}>
                    <img src={ BG } alt="Art Work" width='100%'/>
                </div>

                <div className={styles.container2}>
                    <div className={styles.cardContainer}>

                    {
                        content.section.map((item,index) => {
                        return(
                            <div key={index} className={styles.card}>
                                <div className={styles.image}>
                                    <img src={ item.image } alt="Art Work" width='100%'/>
                                </div>
                                <div className={styles.name}>{item.name}</div>
                                <div className={styles.post}>{item.posts}</div>
                                <div className={styles.social}>{item.social}</div>
                            </div>
                        )
                        })
                    }
    
                    </div>
                </div>

                <Footer />
           </div>
       </Layout>
    )
}

export default mentor;