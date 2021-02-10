import React from "react"
import styles from "./company.module.scss"
import Layout from "../layout"

import Google from "../../images/google.png";

const company = () => {
    return(
        <Layout>
            <div className={ styles.Container}>
                <div className={styles.Content}>   
                    <div className={styles.header}>
                        <p>Our gradutes are <span style={{color:"#2E388E"}}>hired</span> by</p>
                    </div> 
                    <div className={styles.logoContainer}>
                        <div className={styles.logo}>
                            <img src = { Google } alt="google logo " width="100%"/>
                        </div>
                        <div className={styles.logo}>
                            <img src = { Google } alt="google logo " width="100%"/>
                        </div>
                        <div className={styles.logo}>
                            <img src = { Google } alt="google logo " width="100%"/>
                        </div>
                        <div className={styles.logo}>
                            <img src = { Google } alt="google logo " width="100%"/>
                        </div>
                        <div className={styles.logo}>
                            <img src = { Google } alt="google logo " width="100%"/>
                        </div>
                        <div className={styles.logo}>
                            <img src = { Google } alt="google logo " width="100%"/>
                        </div>
                        <div className={styles.logo}>
                            <img src = { Google } alt="google logo " width="100%"/>
                        </div>
                        <div className={styles.logo}>
                            <img src = { Google } alt="google logo " width="100%"/>
                        </div>
                        <div className={styles.logo}>
                            <img src = { Google } alt="google logo " width="100%"/>
                        </div>
                        <div className={styles.logo}>
                            <img src = { Google } alt="google logo " width="100%"/>
                        </div>
                        <div className={styles.logo}>
                            <img src = { Google } alt="google logo " width="100%"/>
                        </div>
                        <div className={styles.logo}>
                            <img src = { Google } alt="google logo " width="100%"/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>   
    )
}

export default company;