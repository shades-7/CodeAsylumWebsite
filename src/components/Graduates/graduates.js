import React from 'react';
import styles from './graduates.module.scss';
import Layout from '../layout';

import grad1 from '../../images/grad1.png';
import grad2 from '../../images/grad2.png';
import grad3 from '../../images/grad3.png';
import linkdien from '../../images/linkdien.png'

const graduates = () =>{

   let Card = [
        {
            "image" : grad1,
            "name" : "Shivam Raj",
            "containt" : "CodeAsylums has played a valuable role in helping me land a package of 51L at Atlassian. I'm grateful for the constant support and the invaluable resources that they provided. With my never give up attitude and the need to constantly learn and grow, I realised CodeAsylums was just the assistance I needed.",
            "account" : "shivam's linkdien account"
        },
        {
            "image" : grad2,
            "name" : "Shivansh ",
            "containt" : "CodeAsylums has played a valuable role in helping me land a package of 51L at Atlassian. I'm grateful for the constant support and the invaluable resources that they provided. With my never give up attitude and the need to constantly learn and grow, I realised CodeAsylums was just the assistance I needed.",
            "account" : "shivansh's linkdien account"
        },
        {
            "image" : grad3,
            "name" : "Aman",
            "containt" : "CodeAsylums has played a valuable role in helping me land a package of 51L at Atlassian. I'm grateful for the constant support and the invaluable resources that they provided. With my never give up attitude and the need to constantly learn and grow, I realised CodeAsylums was just the assistance I needed.",
            "account" : "aman's linkdien account"
        }
    ]

    return(
        <Layout>
            <div className = {styles.container}>
                <div className={styles.header}>
                    <p>Meet our coding bootcamp <span style={{color:"#2E368F"}}>grads</span></p>
                </div>
                <div className={styles.cardContainer}>
                    {
                        Card.map((item, index)=>{
                            return(
                                <div key={index} className={styles.card}>
                                    <div className={styles.image}>
                                        <img src = { item.image } alt="google logo " width="100%"/>
                                    </div>
                                    <div className={styles.name}>
                                        <p>{ item.name }</p>
                                    </div>
                                    <div className={styles.containt}>
                                        <p>{ item.containt }</p>
                                    </div>
                                    <div className={styles.social}>
                                        <div className={styles.child1}>
                                            <img src = { linkdien } alt="linkdien logo" width="100%" />
                                        </div>
                                        <div className={styles.child2}>
                                            <p>{ item.account }</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.button}> Success Stories</button>
                </div>
            </div>
        </Layout>
    )
}
export default graduates;