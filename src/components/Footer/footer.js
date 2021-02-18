import React from 'react';
import Layout from '../layout';
import styles from './footer.module.scss';

import Logo from '../../images/LogoWhite.png';
import Facebook from '../../images/facebook.png';
import Instagram from '../../images/Instagram.png';
import Medium from '../../images/Medium.png';

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
                            <img src={ Facebook } alt="facebook logo" width="15%"/>
                            <img src={ Instagram } alt="instagram logo" width="15%"/>
                            <img src={ Medium } alt="medium logo" width="15%"/>
                        </div>
                </div>
                <div className= {styles.Child2}>
                    <div className={styles.course} style={{fontWeight:"700"}}>
                        <p>Bootcamps</p>
                    </div>
                    <div className={styles.course}>
                        <p>Full Stack Web Development</p>
                    </div>
                    <div className={styles.course}>
                        <p>Data Structures & Algorithms</p>
                    </div>
                    <div className={styles.course}>
                        <p>Data Analytics</p>
                    </div>
                    <div className={styles.course}>
                        <p>Data Science with Machine Learning</p>
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