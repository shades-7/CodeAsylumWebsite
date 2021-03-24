import React from 'react';
import styles from './hiring.module.scss';
import Layout from '../../Common/layout';

import faangPath from '../../../images/faangPath.png';
import proxyprep from '../../../images/proxyprep.png';
import cutshot from '../../../images/cutshot.png';
import oyo from '../../../images/oyo.png';


const hiring = () => {
    return(
        <Layout>
            <div className={styles.container}>
                <div className={styles.heading}>
                <p>Ecosystem  <span style={{color:"#2E368F"}}>Partners</span></p>
                </div>
                <div className={styles.subcontainer}>
                    <div className={styles.child1}>
                        <div className={styles.box}>
                            <div className={styles.name}>
                                <div className={styles.title}>Mock Interviews</div>
                                <div className={styles.company}>Proxy Prep</div>
                            </div>
                            <div className={styles.logo}>
                                <img src = { faangPath } alt="logo" width="70%" />
                            </div>
                        </div>
                        <div className={styles.box}>
                            <div className={styles.name}>
                                <div className={styles.title}>Resume Review</div>
                                <div className={styles.company}>FanngPath</div>
                            </div>
                            <div className={styles.logo}>
                                <img src = { proxyprep } alt="logo" width="70%" />
                            </div>
                        </div>  
                    </div>
                    <div className={styles.child2}></div>
                    <div className={styles.child3}>
                    <div className={styles.empty}></div>
                    <div className={styles.box}>
                        <div className={styles.name}>
                                <div className={styles.title}>Hiring Partner</div>
                                <div className={styles.company}>Cutshort.io</div>
                            </div>
                            <div className={styles.logo}>
                                <img src = { cutshot } alt="logo" width="70%" />
                            </div>
                        </div>
                        <div className={styles.box1}>
                            <div className={styles.name}>
                                <div className={styles.title}>Food & Accomodation</div>
                                <div className={styles.company}>Oyo Rooms</div>
                            </div>
                            <div className={styles.logo}>
                                <img src = { oyo } alt="logo" width="70%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default hiring;