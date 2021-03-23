import React from 'react'
import styles from './program.module.scss'
import Layout from '../../Common/layout'

import Pic1 from '../../../images/pic1.png'
import Pic2 from '../../../images/pic2.png'
import Pic3 from '../../../images/pic3.png'
import Pic4 from '../../../images/pic4.png'

const program = () =>{

    let programContent = [
        {
            "image" : Pic1,
            "subheading" : "Real world projects from",
            "highlighted" : "Industry experts",
            "content" : "We constantly curate interesting challenges and projects for our bootcamp participants. We refine our curriculum for each batch pushing the limits of your learning outcomes"
        },
        {
            "image" : Pic2,
            "subheading" : "Mentor Lead ",
            "highlighted" : "Activity",
            "content" : "We’ve got a strong team of passionate programmers from leading companies across the globe. Not only will you be closely interacting with this elite group but you also get to work on live projects with them."
        },
        {
            "image" : Pic3,
            "subheading" : "Hackathons and ",
            "highlighted" : "Challenges",
            "content" : "At the end of every month, we organize a challenge week for participants to work in teams in building live projects to boost the GitHub profiles. We constantly push our participants to collaborate with their peers in dedicated hackathons. Solving coding challenges on hackerrank is a norm in our bootcamps. Our mentors periodically review your profiles and guide you on the specific topics you need support on."
        },
        {
            "image" : Pic4,
            "subheading" : "Placement",
            "highlighted" : "Care",
            "content" : "Helping and guiding you with the interview questions via industrial mentors who have been pass through that rigorous technical process. Additionally, we help you to build a balanced profile in listing platforms, an interactive resume and a detailed review of your linkedin and github profiles."
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