import React from 'react'
import styles from './program.module.scss'
import Layout from '../layout'

const program = () =>{
    return(
        <Layout>
            <div className={styles.Container}>
                <div className={styles.Heading}>
                <p>All our <span style={{color: "#2E368F"}}>programs</span> include</p>
                </div>
                <div className={styles.Child1}>
                </div>
                <div className={styles.Child1}>
                </div>
            </div>
        </Layout>
    )
}

export default program;