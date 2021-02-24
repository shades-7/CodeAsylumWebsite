import React from "react"
import styles from './offline.module.scss'
import Layout from '../../layout'

import Pic from '../../../images/pic.png'


const offline = () => {
    return(
        <Layout>
            <div className={styles.Container}>
                <div className={styles.Heading}><p>Offline <span style={{ color:"#2E388E"}}>bootcamp</span></p></div>
                <div className={styles.card}>
                    <div className={styles.child1}>
                        <img src={ Pic } alt=" Pic " width="100%"/>
                    </div>
                    <div className={styles.child2}>
                        <div className={styles.subheader}>
                            <p>FULLSTACK WEB DEVELOPMENT FROM SCRATCH</p>
                        </div>
                        <div className={styles.content}>
                            <p>Made for those with a passion for design, development and programming expertise, this course enables the average working professional to learn FullStack from scratch, with Industry-relevant projects and live exposure to both Client & Server-side Technologies like React, JavaScript, NodeJs, AWS and Git</p>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.comment}>
                            {/* <p>Offline ( 28 Days )</p> */}
                            <p>DSA + Fullstack Web Development</p>
                            <button className={styles.button2}>Explore Curriculum</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default offline;
