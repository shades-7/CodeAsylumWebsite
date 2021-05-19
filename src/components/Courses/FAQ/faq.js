import React from 'react'
import styles from './faq.module.scss'

import Accodion from '../Modules/Accordion/accordion'

const Faq = () => {

    const Data = [
        {
            question: "How much will I need to devote to the course?",
            answer: "Around 10-12 Hrs of Mentorship per week plus assignments and challenges."
        },
        {
            question: "Will I get a certificate of completion?",
            answer: "In the professional industry, people are looking for skills for now, but still you will be getting a completion certificate with the speciations of your performance and analysis by CodeAsylums."
        },
        {
            question: "Can I apply for more than one course at a time?",
            answer: "We will be here always, start with one and can move to another after at least starting one."
        },
        {
            question: "Who will clear my doubts upon enrolment?",
            answer: "We have a great counselling support for your conduction related doubts and TA support for 24x7 teaching assistance."
        },
        {
            question: "Will my performance and projects be graded?",
            answer: "We don’t believe in grades, we look for implementation and applications which we motivates through coding challenges and Hackathons."
        },
    ]

    return(
        <>
           <div className={styles.Container}>
                <div className={styles.Heading}>
                    <p>FREQUENTLY ASKED <span style={{color: "#2E388E"}}>QUESTIONS</span></p>
                </div>

                <div className={styles.Container2}>
                {
                    Data.map(({question, answer},index)=>{
                        return(
                            <Accodion title={question} content={answer}/>
                        )
                    })
                }
                </div>
            </div>    

        </>
    )
}

export default Faq;