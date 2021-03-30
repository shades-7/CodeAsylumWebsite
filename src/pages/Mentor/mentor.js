import React from 'react'
import styles from './mentor.module.scss'

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
                "post" : "Work at Amazon",
                "social" : "Know More "
            },
            {
                "image" : Aditya,
                "name": "Aditya Ghosh",
                "post" : "Work at Google",
                "social" : "Know More "
            },
            {
                "image" : Amar,
                "name": "Amar Pathak",
                "post" : "Work at SpringBoard",
                "social" : "Know More "
            },
            {
                "image" : Anubhav,
                "name": "Anubhav",
                "post" : "Work at Reliance Jio",
                "social" : "Know More "
            },
            {
                "image" : Arushit,
                "name": "Arushit Mudgal",
                "post" : "Work at Akamai",
                "social" : "Know More "
            },
            {
                "image" : Iti,
                "name": "Iti Agarwal",
                "post" : "Work at Inmobi",
                "social" : "Know More "
            },
            {
                "image" : Kajal,
                "name": "Kajal Singh",
                "post" : "Work at Amazon",
                "social" : "Know More "
            },
            {
                "image" : Mayank,
                "name": "Mayank Sharma",
                "post" : "Work at Hotstar",
                "social" : "Know More "
            },
            {
                "image" : Nabh,
                "name": "Nabh Chaudhary",
                "post" : "Work at Goldman Sachs",
                "social" : "Know More "
            },
            {
                "image" : Priyanka,
                "name": "Priyanka Kekane",
                "post" : "Work at ayopop",
                "social" : "Know More "
            }
            ,{
                "image" : Rahul,
                "name": "Rahul Kumar",
                "post" : "Work at pacteraEdge",
                "social" : "Know More "
            },
            {
                "image" : Rajat,
                "name": "Rajat jain",
                "post" : "Work at Microsoft",
                "social" : "Know More "
            },
            {
                "image" : Satyarth,
                "name": "Satyarth Oja",
                "post" : "Work at Grab",
                "social" : "Know More "
            },
            {
                "image" : Saurav,
                "name": "Saurav Chakroborty",
                "post" : "Work at Flipkart",
                "social" : "Know More "
            },
            {
                "image" : Shruti,
                "name": "shruti jalan",
                "post" : "Work at Amazon",
                "social" : "Know More "
            },
            {
                "image" : Reshab,
                "name": "Reshab Gupta",
                "post" : "Work at Amazon",
                "social" : "Know More "
            },
            {
                "image" : RajatG,
                "name": "Rajat Goyal",
                "post" : "Work at GoJek",
                "social" : "Know More "
            },
            {
                "image" : Madhav,
                "name": "C S Madhav",
                "post" : "Work at Amazon",
                "social" : "Know More "
            }
            
            
            
        ]
    }

    return(
       <Layout>
           <div className={styles.container}>
                <Navbar/>
                <div className={styles.background}>
                    <img src={ BG } alt="Art Work" width='100%'/>
                </div>

                <div className={styles.MoBbackground}>
                    <img src={ MobBG } alt="Art Work" width='100%'/>
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
                                <div className={styles.social}>{item.social}</div>
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