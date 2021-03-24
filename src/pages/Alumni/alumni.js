import React from 'react'
import styles from './alumni.module.scss'

import Layout from '../../components/Common/layout'
import Navbar from '../../components/Common/NavBar/navbar'
import Footer from '../../components/Common/Footer/footer'

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import grad1 from '../../images/grad1.png';
import grad2 from '../../images/grad2.png';
import grad3 from '../../images/grad3.png';
import linkdien from '../../images/linkd.svg'

import BG from '../../images/MentorBG.png'
import MobBG from '../../images/MentorMobBg.png'

const Alumni = () => {

    let Card = [
        {
            "image" : grad1,
            "name" : "Shivam Raj",
            "containt" : "CodeAsylums has played a valuable role in helping me land a package of 51L at Atlassian. I'm grateful for the constant support and the invaluable resources that they provided. With my never give up attitude and the need to constantly learn and grow, I realised CodeAsylums was just the assistance I needed.",
            "account" : "shivam's linkdien account",
            "title" : "SDE 1 at Walmart"
        },
        {
            "image" : grad2,
            "name" : "Shivansh ",
            "containt" : "CodeAsylums has played a valuable role in helping me land a package of 51L at Atlassian. I'm grateful for the constant support and the invaluable resources that they provided. With my never give up attitude and the need to constantly learn and grow, I realised CodeAsylums was just the assistance I needed.",
            "account" : "shivansh's linkdien account",
            "title" : "SDE 1 at Walmart"
        },
        {
            "image" : grad3,
            "name" : "Aman",
            "containt" : "CodeAsylums has played a valuable role in helping me land a package of 51L at Atlassian. I'm grateful for the constant support and the invaluable resources that they provided. With my never give up attitude and the need to constantly learn and grow, I realised CodeAsylums was just the assistance I needed.",
            "account" : "aman's linkdien account",
            "title" : "SDE 1 at Walmart"
        }
    ]

    return(
        <Layout>
            <div className={styles.Container}>
                <Navbar/>
                <div className={styles.background}>
                    <img src={ BG } alt="Art Work" width='100%'/>
                </div>
                <div className={styles.container}>
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


{/* MobVersion */}
                    <div className={styles.MoBbackground}>
                        <img src={ MobBG } alt="Art Work" width='100%'/>
                    </div>

                    <div className={styles.cardContainer1}>
                        {
                            Card.map((item, index)=>{
                                return(
                                    <div key={index} className={styles.card}>
                                        <Accordion>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                >
                                                    <div className={styles.image}>
                                                        <img src = { item.image } alt="google logo " width="100%"/>
                                                    </div>
                                                    <div className={styles.accordinoHeading}>
                                                        <div className={styles.name}>
                                                            <p>{ item.name }</p>
                                                        </div>
                                                        <div className={styles.containt}>
                                                            <p>{ item.title }</p>
                                                        </div>
                                                    </div> 
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <div className={styles.accordinoDetail}>
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
                                                </AccordionDetails>
                                        </Accordion>
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

export default Alumni;