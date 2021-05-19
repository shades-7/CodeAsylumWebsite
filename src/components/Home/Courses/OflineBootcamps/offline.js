import React from "react"
import styles from './offline.module.scss'
import Layout from '../../../Common/layout'
import { Link } from 'gatsby'

import Pic from '../../../../images/pic.png'
import PicM from '../../../../images/picM.png'


const offline = () => {
    return(
        <Layout>
            <div className={styles.Container}>
                <div className={styles.Heading}><p>Offline <span style={{ color:"#2E388E"}}>bootcamp</span></p></div>
                <div className={styles.card}>
                    <div className={styles.child1}>
                        <img className={styles.des} src={ Pic } alt=" Pic " width="100%"/>
                        <img className={styles.mob} src={ PicM } alt=" Pic " width="100%"/>
                    </div>
                    <div className={styles.child2}>
                        <div className={styles.subheader}>
                            <p>SOFTWARE ENGINEER PROGRAM</p>
                        </div>
                        <div className={styles.content}>
                            <p>Our flagship offering turning beginners into seasoned developers. Ideal for undergrads and graduates with under 2 years of experience. This program starts with foundations of data structures and algorithms and facilitates live exposure to both client and server side technologies like React, Javascript, Node.js, Express, AWS and Git</p>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.comment}>
                            {/* <p>Offline ( 28 Days )</p> */}
                            <p>DSA + Fullstack Web Development</p>
                            <div className={styles.buttonContainer}> 
                                <Link to={"/courses/software_engineer_program"} className={styles.button2}>Explore Curriculum</Link>
                                <Link to={'https://forms.gle/kxc5gi7mqYwnYUEj9'} target='_blank' className={styles.button1}>Apply Now</Link>
                            </div>
                            <p style={{color: "red",fontWeight:"400"}}>Applications now open for May 14th Bootcamp</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default offline;
