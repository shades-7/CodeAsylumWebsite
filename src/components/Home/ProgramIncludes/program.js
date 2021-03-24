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
            "subheading" : "",
            "highlighted" : "Real World Projects",
            "content" : "We constantly curate interesting projects from the startup ecosystem. Our measure of success is in the extra mile we make you travel. And we believe real projects are the best way for conceptual implementations."
        },
        {
            "image" : Pic2,
            "subheading" : "",
            "highlighted" : "Live Mentorship",
            "content" : "We have a pool of mentors from leading tech companies and startups. We keep our batch sizes small to facilitate interactions. These mentors are empowered with our strong curriculum and teaching assistance."
        },
        {
            "image" : Pic3,
            "subheading" : "",
            "highlighted" : "Hackathons and Challenges",
            "content" : "Competitive programming is by far the most effective approach for Indian engineers. Weekly challenges, hacker rank problems, team assignments and national level hackathons, we take you everywhere"
        },
        {
            "image" : Pic4,
            "subheading" : "",
            "highlighted" : "Placement Assistance",
            "content" : "Expert mock interviews, professional LinkedIn page, outreach strategies, Git Hub portfolio, soft skill essentials and your personal portfolio in HTML. We’ve got you fully covered for getting your dream job."
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
                                            <p><span style={{ borderBottom: "solid 3px #FFCC27"}}>{ item.highlighted }</span></p>
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