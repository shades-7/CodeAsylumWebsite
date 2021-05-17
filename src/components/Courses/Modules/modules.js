import React from 'react'
import styles from './module.module.scss'
import Accordion from './Accordion/accordion'

const Module = () =>{

   
    const Data = [
        {
            module: "Module 1",
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
            module: "Module 2",
            submodule : [
                {
                title: "JavaScript - 10 Sessions",
                content: "ES6, ECMAScript, JIT compilation vs normal compilation, Window scope, Console, jsbin, jsfiddle, var, let, const, Operators (Your all c++ operators here), Strict typed, loosely typed, alert, confirm, prompt, functions expression, declaration, arrows, Buttons, input."
                },
                {
                title: "More on Javascript",
                content: "Datatypes, Type conversions, debugging via chrome, Babel, webpack, Object, Arrays, looping through these, In very basic words, what is [this] (not in classes), [new], Array methods, Object methods, String methods, SetTimeout, SetInterval, HTTP requests, XHR, Asynchronous Javascript, callbacks, event loops, API"
                }
            ]
        },
        {
            module: "Module 3",
            submodule : [
                {
                title: "AdvanceJS - 5 Sessions",
                content: "Closures, Promises, Bind, Call, Apply, Async, Await, Classes, Destructuring, the Spread operator"
                }
            ]
        },
        {
            module: "Module 4",
            submodule : [
                {
                title: "NodeJs & MongoDB- 5 Sessions",
                content: "Error handling, node, npm, webpack implementation, CRUD operation, APIs, Integration of Javascript with nodejs, Postman, Queries, DB integrations in NodeJS, DataBase Design"
                }
            ]
        },
        {
            module: "Module 5",
            submodule : [
                {
                title: "AWS - 2 Sessions",
                content: "Deploying and hosting the web application using EC2 and S3"
                },
                {
                title: "GIT - 4 Sessions",
                content: "Staging, Committing, Branching, Can Collaborate the code among peers and other team members involving various code bases."
                }
            ]
        },
        {
            module: "Module 6",
            submodule : [
                {
                title: "Mentored Hackathon - 4 Sessions",
                content: "Frontend Hackathon & Fullstack Hackathon - Teams based project development"
                }
            ]
        },
        {
            module: "Module 7",
            submodule : [
                {
                title: "Project Development Sessions - 7 Sessions",
                content: "Bootstrap-based responsive static web application for community profiling Integrating Bitcoin API to make a browser-based application E-Commerce Web-Application using MERN stack (end-to-end)"
                }
            ]
        },
        {
            module: "Module 8",
            submodule : [
                {
                title: "Mock Interviews - 2 Sessions",
                content: "Will be taken by the industry people who are working in startups and product-based Companies."
                }
            ]
        },
        {
            module: "Module 9",
            submodule : [
                {
                title: "Placement Assistance - 2 Sessions",
                content: "Tech talks and discussions around the tech and industry culture."
                }
            ]
        }

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