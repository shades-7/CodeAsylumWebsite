import React from 'react';
import styles from './strength.module.scss';
import Layout from '../layout';

import University from "../../images/university.png";
import Student from "../../images/student.png";
import Statistics from "../../images/statistics.png";
import Infinity from "../../images/infinity.png";


const strength = () =>{

    let product = [
        {
            "image" : University,
            "number" : "200+",
            "containt" : "Connected Campuses"
        },
        {
            "image" : Statistics,
            "number" : "700+",
            "containt" : "Alumni Network"
        },
        {
            "image" : Student,
            "number" : "100+",
            "containt" : "Experienced Mentors"
            
        },
        {
            "image" : Infinity,
            "number" : "12,000+",
            "containt" : "Community Reach"
        }
    ]

    return(
        <Layout>
            <div className={styles.Container}>
                <div className={styles.header}>
                    <p>Strength in <span style={{color:'#2E388E'}}>numbers</span></p>
                </div>
                <div className={styles.Container1}>

                    {product.map((items, index)=>{
                        return(
                            <div key={ index } className={styles.Container2}>
                                <div className={styles.Image}>
                                    <img src={ items.image } alt=" " width="100%"/>
                                </div>
                                <div className={styles.number}>
                                    <p>{ items.number }</p>
                                </div>
                                <div className={styles.containt}>
                                    <p>{ items.containt }</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </Layout>
    )
}

export default strength;