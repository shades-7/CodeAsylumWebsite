import React from 'react';
import styles from './strength.module.scss';
import Layout from '../layout';

const strength = () =>{
    return(
        <Layout>
            <div className={styles.Container}>
                <div className={styles.header}>
                    <p>Strength in <span style={{color:'#2E388E'}}>numbers</span></p>
                </div>
                <div className={styles.Container1}>

                </div>
            </div>
        </Layout>
    )
}

export default strength;