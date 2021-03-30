import React from 'react';
import Layout from '../layout';
import styles from './footer.module.scss';

import Logo from '../../../images/LogoWhite.png';
import Facebook from '../../../images/facebook.png';
import Instagram from '../../../images/Instagram.png';
import Medium from '../../../images/Medium.png';
import Twitter from '../../../images/twitter.png';

const Footer = () => {
    return(
        <Layout>
            <div className = {styles.Container}>
                <div className= {styles.Child1}>
                    <div className={styles.logo}>
                        <img src={ Logo } alt="Logo" width='100%'/>
                    </div>
                    <div className={styles.text}>
                        <p>CodeAsylums 2020</p>
                    </div>
                        <div className={styles.icons}>
                            <a href="https://www.facebook.com/CodeAsylums/">
                                <img src={ Facebook } alt="facebook logo" width="55%"/>
                            </a>
                            <a href="https://www.instagram.com/codeasylums/?hl=en">
                                <img src={ Instagram } alt="instagram logo" width="55%"/>
                            </a>
                            <a href="https://medium.com/progate/kickstarting-careers-during-summer-holidays-with-a-4-week-programming-bootcamp-f807da834d83">
                                <img src={ Medium } alt="medium logo" width="55%"/>
                            </a>
                            <a href="https://twitter.com/CodeAsylums?s=08">
                                <img src={ Twitter } alt="medium logo" width="55%"/>
                            </a>
                        </div>
                </div>
                <div className= {styles.Child2}>
                    <div className={styles.course} style={{fontWeight:"700"}}>
                        <p>Bootcamps</p>
                    </div>
                    <div className={styles.course}>
                    <a href="https://ace.codeasylums.com/fullstack"><p>Full Stack Web Development</p></a>
                    </div>
                    <div className={styles.course}>
                        <a href="https://ace.codeasylums.com/dsa"><p>Data Structures & Algorithms</p></a>
                    </div>
                    <div className={styles.course}>
                    <a href="https://ace.codeasylums.com/danalytics"><p>Data Analytics</p></a>
                    </div>
                    <div className={styles.course}>
                    <a href="https://ace.codeasylums.com/datascience"><p>Data Science with Machine Learning</p></a>
                    </div>
                </div>
                <div className= {styles.Child2}>
                    <div className={styles.course} style={{fontWeight:"700"}}>
                        <p>Contact</p>
                    </div>
                    <div className={styles.course}>
                        <p>Email us:</p>
                    </div>
                    <div className={styles.course}>
                        <p>info@codeasylums.com</p>
                    </div>
                    <div className={styles.course}>
                        <p>Call us:</p>
                    </div>
                    <div className={styles.course}>
                        <p>+91 9737439326, +91 6281455032</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Footer;