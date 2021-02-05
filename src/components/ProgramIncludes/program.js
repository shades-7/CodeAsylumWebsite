import React from 'react'
import styles from './program.module.scss'
import Layout from '../layout'

import Pic1 from '../../images/pic1.png'
import Pic2 from '../../images/pic2.png'
import Pic3 from '../../images/pic3.png'

const program = () =>{

    let programContent = [
        {
            "image" : Pic1,
            "subheading" : "Real-world projects from",
            "highlighted" : "industry experts",
            "content" : "With real world projects and immersive content built in partnership with top tier companies, you’ll master the tech skills companies want."
        },
        {
            "image" : Pic2,
            "subheading" : "Real-world projects from",
            "highlighted" : "industry experts",
            "content" : "With real world projects and immersive content built in partnership with top tier companies, you’ll master the tech skills companies want."
        },
        {
            "image" : Pic3,
            "subheading" : "Real-world projects from",
            "highlighted" : "industry experts",
            "content" : "With real world projects and immersive content built in partnership with top tier companies, you’ll master the tech skills companies want."
        },
        {
            "image" : Pic1,
            "subheading" : "Real-world projects from",
            "highlighted" : "industry experts",
            "content" : "With real world projects and immersive content built in partnership with top tier companies, you’ll master the tech skills companies want."
        }
    ]

    return(

        <Layout>
            <div className={styles.Container}>
                <div className={styles.Heading}>
                <p>All our <span style={{color: "#2E368F"}}>programs</span> include</p>
                </div>
                <div className={styles.Child1}>

                    {
                        programContent.map(( item, index) => {
                            return(
                                <div key={index} className={styles.Program}>
                                    <div className={styles.Img}>
                                        <img src={ item.image } alt="Art Work" width='100%'/>
                                    </div>
                                    <div className={styles.Text}>
                                        <div className={styles.Subheading}>
                                            <p>{ item.subheading }<br></br>
                                            <span style={{ borderBottom: "solid 5px #FFCC27"}}>{ item.highlighted }</span></p>
                                        </div>
                                        <div className={styles.Content}>
                                            <p>
                                            { item.content }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    )
}

export default program;