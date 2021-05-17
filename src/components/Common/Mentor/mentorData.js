import React from 'react';
import styles from './mentor.module.scss';
import Layout from '../../Common/layout';
import {Link} from 'gatsby'

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import linkdien from '../../../images/linkd.svg'


const graduatesData = ({Card}) =>{

    return(
        <Layout>
            <div className = {styles.container}>
                <div className={styles.header}>
                    <p>Meet our star  <span style={{color:"#2E368F"}}>coders</span></p>
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

{/* MobVersion */}

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
                <Link to={'/Alumni/alumni'} className={styles.buttonContainer}>
                   
                        <button className={styles.button}> Success Stories</button>
                </Link>
            </div>
        </Layout>
    )
}
export default graduatesData;