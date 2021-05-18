import React from 'react'
import styles from './course.module.scss'

import JS from '../../../images/js.png'
import JS1 from '../../../images/js1.png'
import JS2 from '../../../images/js2.png'
import JS3 from '../../../images/js3.png'

const Course= (props) => {
            
    const data =[
        {
            "image" : JS,
            "title" : "JavaScript & Node.js",
            "subtext" : "JavaScript is the universal programming language of the web. You'll gain firsthand experience with Javascript and Node ecosystems, as well as modern tooling and libraries such as Babel and webpack."
        },
        {
            "image" : JS1,
            "title" : "HTML, CSS, and More",
            "subtext" : "JavaScript is the universal programming language of the web. You'll gain firsthand experience with Javascript and Node ecosystems, as well as modern tooling and libraries such as Babel and webpack."
        },
        {
            "image" : JS2,
            "title" : "React JS",
            "subtext" : "JavaScript is the universal programming language of the web. You'll gain firsthand experience with Javascript and Node ecosystems, as well as modern tooling and libraries such as Babel and webpack."
        },
        {
            "image" : JS3,
            "title" : "Databases & Data Modeling",
            "subtext" : "JavaScript is the universal programming language of the web. You'll gain firsthand experience with Javascript and Node ecosystems, as well as modern tooling and libraries such as Babel and webpack."
        }
    ]

    return(
        <>
            <div className={styles.Container}>
                <div className={styles.Heading}>
                    <p>WHAT YOU WILL <span style={{color:"#2E388E"}}>LEARN</span></p>
                </div>

                <div className={styles.Container2}>
                    {
                        props.CDcontent.map((item,index)=>(
                            <div key={index} className={styles.Card}>
                                <div className={styles.Title}>
                                    <div className={styles.Image}>
                                        <img src = { item.image } alt="" width="70%"/>
                                    </div>
                                    <div className={styles.Text}>
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                                <div className={styles.Subtext}>
                                    <p>{item.subtext}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course;