import React from 'react'
import styles from './program.module.scss'
import Layout from '../layout'

import Pic1 from '../../images/pic1.png'

const program = () =>{
    return(
        <Layout>
            <div className={styles.Container}>
                <div className={styles.Heading}>
                <p>All our <span style={{color: "#2E368F"}}>programs</span> include</p>
                </div>
                <div className={styles.Child1}>
                    <div className={styles.Program}>
                        <div className={styles.Img}>
                            <img src={ Pic1 } alt="Art Work" width='100%'/>
                        </div>
                        <div className={styles.Text}>
                            <div className={styles.Subheading}>
                                <p>Real-world projects from<br></br>
                                <span style={{ borderBottom: "solid 5px #FFCC27"}}>industry experts</span></p>
                            </div>
                            <div className={styles.Content}>
                                <p>
                                With real world projects and immersive<br></br>
                                content built in partnership with top<br></br>
                                tier companies, you’ll master the tech<br></br>
                                skills companies want.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.Program}>
                        <div className={styles.Img}>
                            <img src={ Pic1 } alt="Art Work" width='100%'/>
                        </div>
                        <div className={styles.Text}>
                            <div className={styles.Subheading}>
                                <p>Real-world projects from<br></br>
                                industry experts</p>
                            </div>
                            <div className={styles.Content}>
                                <p>
                                With real world projects and immersive<br></br>
                                content built in partnership with top<br></br>
                                tier companies, you’ll master the tech<br></br>
                                skills companies want.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.Child1}>
                    <div className={styles.Program}>
                        <div className={styles.Img}>
                            <img src={ Pic1 } alt="Art Work" width='100%'/>
                        </div>
                        <div className={styles.Text}>
                            <div className={styles.Subheading}>
                                <p>Real-world projects from<br></br>
                                <span style={{ borderBottom: "solid 5px #FFCC27"}}>industry experts</span></p>
                            </div>
                            <div className={styles.Content}>
                                <p>
                                With real world projects and immersive<br></br>
                                content built in partnership with top<br></br>
                                tier companies, you’ll master the tech<br></br>
                                skills companies want.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.Program}>
                        <div className={styles.Img}>
                            <img src={ Pic1 } alt="Art Work" width='100%'/>
                        </div>
                        <div className={styles.Text}>
                            <div className={styles.Subheading}>
                                <p>Real-world projects from<br></br>
                                industry experts</p>
                            </div>
                            <div className={styles.Content}>
                                <p>
                                With real world projects and immersive<br></br>
                                content built in partnership with top<br></br>
                                tier companies, you’ll master the tech<br></br>
                                skills companies want.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default program;