import React from 'react'
import styles from './module.module.scss'
import Accordion from './Accordion/accordion'

const Module = () =>{

   
    const Data = [
        {
            module: "Module 8",
            submodule : [
                {
                title: "Very basic starting implementation of HTML, CSS, JavaScript, Nodejs",
                content: "Progate Subscription (3 Months)"
                },
                {
                title: "HTML, CSS, Bootstrap - 5 Sessions",
                content: "Basic HTML syntax, Basic CSS syntax, Basic Layout, Header, Footer, Contents, Forms, Responsive Web Design, Media Queries, Making Your Page Responsive, Implementing Flexbox, Responsive Design, Bootstrap Templates and Components"
                }
            ]
        },
        {
            module: "Module 8",
            submodule : [
                {
                title: "Very basic starting implementation of HTML, CSS, JavaScript, Nodejs",
                content: "Progate Subscription (3 Months)"
                },
                {
                title: "HTML, CSS, Bootstrap - 5 Sessions",
                content: "Basic HTML syntax, Basic CSS syntax, Basic Layout, Header, Footer, Contents, Forms, Responsive Web Design, Media Queries, Making Your Page Responsive, Implementing Flexbox, Responsive Design, Bootstrap Templates and Components"
                }
            ]
        },
        {
            module: "Module 8",
            submodule : [
                {
                title: "Very basic starting implementation of HTML, CSS, JavaScript, Nodejs",
                content: "Progate Subscription (3 Months)"
                }
            ]
        },

    ]

    return(
        <React.Fragment>
           <div className={styles.Container}>
                <div className={styles.Heading}>
                    <p> <span style={{color:"#000000"}}>COURSE</span> CURRICULUM</p>
                </div>
                <div className={styles.AccordionContainer}>
                {
                        Data.map((item,index)=>{
                            const {module, submodule} = item;
                            return(
                                <div key={index} className={styles.ModContainer}>

                                    <div className={styles.DesignContainer}>
                                        <div className={styles.bullet}></div>
                                        <div className={styles.Line}></div>
                                    </div>

                                    <div className={styles.DetailContainer}>
                                        <div className={styles.ModHeading}> {module} </div>
                                         {
                                             submodule.map(({title, content})=>{
                                                 return(
                                                     <Accordion title={title} content={content}/>
                                                 )
                                             })
                                         }
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
           </div>
        </React.Fragment>
    )
}

export default Module;