import React from 'react';
import styles from './overview.module.scss'

import Img1 from '../../../images/overview1.png'
import Img2 from '../../../images/overview2.png'
import Img3 from '../../../images/overview3.png'
import Img4 from '../../../images/overview4.png'

const overview=(props)=>{
    const data=[
        {
            "image": Img1,
            "data" : "12 Week Bootcamp"
        },
        {
            "image": Img2,
            "data" : "3 Hackathons"
        },
        {
            "image": Img3,
            "data" : "Project Based Learning"
        },
        {
            "image": Img4,
            "data" : "Mentor Assistance"
        }
    ]
    return(
        <>
            <div className={styles.Container}>
                <div className={styles.Heading}>
                    <p>OVERVIEW</p>
                </div>

                <div className={styles.Container2}>
                {
                    data.map((item,index)=>{
                        return(
                            <div className={styles.subContainer}>
                                <div className={styles.image}>
                                    <img src={ item.image } alt="pic" width="75%"/>
                                </div>
                                <div className={styles.text}>
                                    <p>{item.data}</p>
                                </div>
                            </div>
                        )
                    })
                }
                </div>

                <div className={styles.Container3}>
                    <p className={styles.text1}>{props.OverviewContent.content}</p>
                </div>
            </div>
        </>
    )
}

export default overview;