import React from 'react';
import styles from './placement.module.scss';
import Layout from '../layout'

const placement = () => {
    return(
        <Layout>
            <div className={styles.Container}>
                <div className={styles.card}>
                    <div className={styles.child1}>
                        <div className={styles.subheader}>
                            <p>PLACEMENT ASSISTANCE PROGRAM</p>
                        </div>
                        <div className={styles.content}>
                            <p>2 Mock Interviews + 5 Coding Contest Pack</p>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.comment}>
                            <p>Offline ( 28 Days )</p>
                            <button className={styles.button2}>Explore Courses</button>
                        </div>
                    </div>
                    
                    <div className={styles.child2}>
                        <div className={styles.subheader}>
                            <p>ADDITIONAL ASSISTANCE</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default placement;