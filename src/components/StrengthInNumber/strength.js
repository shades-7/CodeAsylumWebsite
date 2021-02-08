import React from 'react';
import styles from './strength.module.scss';
import Layout from '../layout';

import University from "../../images/university.png"

const strength = () =>{
    return(
        <Layout>
            <div className={styles.Container}>
                <div className={styles.header}>
                    <p>Strength in <span style={{color:'#2E388E'}}>numbers</span></p>
                </div>
                <div className={styles.Container1}>

                    <div className={styles.Container2}>
                        <div className={styles.Image}>
                            <img src={ University } alt=" " width="100%"/>
                        </div>
                        <div className={styles.number}>
                            <p>200+</p>
                        </div>
                        <div className={styles.containt}>
                            <p>Colleges Reached</p>
                        </div>
                    </div>

                    <div className={styles.Container2}>
                        <div className={styles.Image}>
                            <img src={ University } alt=" " width="100%"/>
                        </div>
                        <div className={styles.number}>
                            <p>200+</p>
                        </div>
                        <div className={styles.containt}>
                            <p>Colleges Reached</p>
                        </div>
                    </div>

                    <div className={styles.Container2}>
                        <div className={styles.Image}>
                            <img src={ University } alt=" " width="100%"/>
                        </div>
                        <div className={styles.number}>
                            <p>200+</p>
                        </div>
                        <div className={styles.containt}>
                            <p>Colleges Reached</p>
                        </div>
                    </div>

                    <div className={styles.Container2}>
                        <div className={styles.Image}>
                            <img src={ University } alt=" " width="100%"/>
                        </div>
                        <div className={styles.number}>
                            <p>200+</p>
                        </div>
                        <div className={styles.containt}>
                            <p>Colleges Reached</p>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default strength;