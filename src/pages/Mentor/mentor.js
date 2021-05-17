import React from 'react'
import styles from './mentor.module.scss'
import {Link} from 'gatsby'

import Layout from '../../components/Common/layout'
import Navbar from '../../components/Common/NavBar/navbar'
import Footer from '../../components/Common/Footer/footer'

import BG from '../../images/MentorBG.png'
import MobBG from '../../images/MentorMobBg.png'

import Aayush from '../../images/aayush kumar - Amazon 1.png'
import Aditya from '../../images/Aditya Ghosh - Google 1.png'
import Amar from '../../images/Amar Pathak - SpringBoard 1.png'
import Anubhav from '../../images/anubhav - Reliance Jio 1.png'
import Arushit from '../../images/Arushit mudgal - Akamai 1.png'
import Iti from '../../images/iti agarwal - Inmobi 1.png'
import Kajal from '../../images/kajal Singh - Amazon 1.png'
import Mayank from '../../images/Mayank sharma - Hotstar 1.png'
import Nabh from '../../images/nabh Chaudhary - Goldman Sachs 1.png'
import Priyanka from '../../images/priyanka kekane - ayopop 1.png'
import Rahul from '../../images/rahul kumar - pacteraEdge 1.png'
import Rajat from '../../images/rajat jain - microsoft 1.png'
import Reshab from '../../images/reshab gupta - Amazon 1.png'
import Satyarth from '../../images/Satyarth.png'
import Saurav from '../../images/Saurav Chakroborty - Flipkart 1.png'
import Shruti from '../../images/shruti jalan - Amazon 1.png'
import RajatG from'../../images/Rajat Goyal - GoJek 1.png'
import Madhav from'../../images/C S Madhav - Amazon 1.png'





const mentor = () =>{

    const data = {
        "section": [
            {
                "image" :Aayush,
                "name": "Aayush Kumar",
                "post" : "Works at Amazon",
                "link" : "https://www.linkedin.com/in/csmadhav/"
            },
            {
                "image" : Aditya,
                "name": "Aditya Ghosh",
                "post" : "Works at Google",
                "link" : "https://www.linkedin.com/in/adityaghosh996/"
            },
            {
                "image" : Amar,
                "name": "Amar Pathak",
                "post" : "Works at SpringBoard",
                "link" : "https://www.linkedin.com/in/pathakamar/"
            },
            {
                "image" : Anubhav,
                "name": "Anubhav",
                "post" : "Works at Reliance Jio",
                "link" : "https://www.linkedin.com/in/anubhav-chaturvedi-a7465a72/"
            },
            {
                "image" : Arushit,
                "name": "Arushit Mudgal",
                "post" : "Works at Akamai",
                "link" : "https://www.linkedin.com/in/arushit-mudgal/"
            },
            {
                "image" : Iti,
                "name": "Iti Agarwal",
                "post" : "Works at Inmobi",
                "link" : "https://www.linkedin.com/in/iti-agrawal/"
            },
            {
                "image" : Kajal,
                "name": "Kajal Singh",
                "post" : "Works at Amazon",
                "link" : "https://www.linkedin.com/in/kajal-singh-5a4808131/"
            },
            {
                "image" : Mayank,
                "name": "Mayank Sharma",
                "post" : "Works at Hotstar",
                "link" : "https://www.linkedin.com/in/mayank-sharma-24088325/"
            },
            {
                "image" : Nabh,
                "name": "Nabh Chaudhary",
                "post" : "Works at Microsoft",
                "link" : "https://www.linkedin.com/in/nabh-choudhary/"
            },
            {
                "image" : Priyanka,
                "name": "Priyanka Kekane",
                "post" : "Works at ayopop",
                "link" : "https://www.linkedin.com/in/priyanka-kekane-275606130/"
            }
            ,{
                "image" : Rahul,
                "name": "Rahul Kumar",
                "post" : "Works at pacteraEdge",
                "link" : "https://www.linkedin.com/in/rahul-kumar-501776504/"
            },
            {
                "image" : Rajat,
                "name": "Rajat jain",
                "post" : "Works at Microsoft",
                "link" : "https://www.linkedin.com/in/rajatjain-21/"
            },
            {
                "image" : Satyarth,
                "name": "Satyarth Ojha",
                "post" : "Works at Grab",
                "link" : "https://www.linkedin.com/in/satyarth-ojha/"
            },
            {
                "image" : Saurav,
                "name": "Sourav Chakraborty",
                "post" : "Works at Flipkart",
                "link" : "https://www.linkedin.com/in/souravchk/"
            },
            {
                "image" : Shruti,
                "name": "shruti jalan",
                "post" : "Works at Amazon",
                "link" : "https://www.linkedin.com/in/shruti-jalan-98a4a830/"
            },
            {
                "image" : Reshab,
                "name": "Reshab Gupta",
                "post" : "Works at Amazon",
                "link" : "https://www.linkedin.com/in/reshab-gupta/"
            },
            {
                "image" : RajatG,
                "name": "Rajat Goyal",
                "post" : "Works at GoJek",
                "link" : "https://www.linkedin.com/in/rajat-g/"
            },
            {
                "image" : Madhav,
                "name": "C S Madhav",
                "post" : "Works at Amazon",
                "link" : "https://www.linkedin.com/in/csmadhav/"
            }
            
            
            
        ]
    }

    return(
       <Layout>
           <div className={styles.container}>
                <Navbar/>
                <div className={styles.background}>
                    <img src={ BG } alt="Art Work" width='100%'/>
                    <div className={styles.heading}>
                    Meet Our Mentor Family
                    <p className={styles.subHeading}>
                    Our community has made it possible to onboard some amazing mentors for you. Professionals from MNCs like Microsoft, Amazon, DE Shaw, etc. & some amazing startups who are working as Software Developers, Data Scientist and Platform Engineers.
                    </p>
                    </div>
                </div>

                <div className={styles.MoBbackground}>
                    <img src={ MobBG } alt="Art Work" width='100%'/>
                    <div className={styles.heading}>
                    Meet Our Mentor Family
                    <p className={styles.subHeading}>
                    Our community has made it possible to onboard some amazing mentors for you. Professionals from MNCs like Microsoft, Amazon, DE Shaw, etc. & some amazing startups who are working as Software Developers, Data Scientist and Platform Engineers.
                    </p>
                    </div>
                </div>

                <div className={styles.container2}>
                    <div className={styles.cardContainer}>

                    {
                        data.section.map((item,index) => {
                        return(
                            <div key={index} className={styles.card}>
                                <div className={styles.image}>
                                    <img src={ item.image } alt="Art Work" width='100%'/>
                                </div>
                                <div className={styles.name}>{item.name}</div>
                                <div className={styles.post}>{item.post}</div>
                                <a href={ item.link } target="blank" className={styles.social}><div >Know More</div></a>
                            </div>
                        )
                        })
                    }
    
                    </div>
                </div>

                <Footer />
           </div>
       </Layout>
    )
}

export default mentor;