import React from 'react';
import styles from './community.module.scss';
import Layout from '../../Common/layout';

import pic from '../../../images/community.png';
import Mob from '../../../images/communityMob.png'

const community = () => {
    return(
        <Layout>
            <div className={styles.container}>
                <img src={ pic } alt="background" width="100%" />
                <div className={styles.heading}>
                    <p>25K+ Students </p>
                    <p>are in One Place</p>
                </div>       
                <div className={styles.content}>
                    <p>strong community to growth with</p> 
                </div>
            </div>

            <div className={styles.Mob}>
                 <img src={ Mob } alt="background" width="70%" />
                 <div className={styles.heading}>
                    <p>25K+ Students </p>
                    <p>are in One Place</p>
                    <p className={styles.content1}>strong community to growth with</p> 
                </div>       
            </div>
        </Layout>
    )
}

export default community;