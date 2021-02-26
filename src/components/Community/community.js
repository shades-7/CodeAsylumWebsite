import React from 'react';
import styles from './community.module.scss';
import Layout from '../layout';

import pic from '../../images/community.png';

const community = () => {
    return(
        <Layout>
            <div className={styles.container}>
                <img src={ pic } alt="background image" width="100%" />
                <div className={styles.heading}>
                    <p>25K+ Students </p>
                    <p>are in One Place</p>
                </div>       
                <div className={styles.content}>
                    <p>strong community to growth with</p> 
                </div>
            </div>
        </Layout>
    )
}

export default community;