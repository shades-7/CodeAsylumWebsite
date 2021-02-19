import React from 'react'
import styles from '../Online/online.module.scss'
import Layout from '../layout'
import { Link } from "gatsby";

const online = () => {

    let Courses = [
        {
            "title" : "FULLSTACK WEB DEVELOPMENT FROM SCRATCH",
            "content" : "Made for those with a passion for design, development and programming expertise, this course enables the average working professional to learn FullStack from scratch, with Industry-relevant projects and live exposure to both Client & Server-side Technologies like React, JavaScript, NodeJs, AWS and Git",
            "style" : styles.child2,
            "link" : "https://ace.codeasylums.com/fullstack"
        },
        {
            "title" : "DATA STRUCTURES AND ALGORITHMS FROM SCRATCH",
            "content" : "Specifically tailored for those looking to boost their knowledge in Data Structures & Algorithms, our curated content takes a deep dive into algorithms like Trees, Graphs & Dynamic Programming. Supported with HackerRank Contests, Self Practice Material, and a Hands-On Coding Sessions and Pair Programming. We ensure that you'll be ready for every coding test.",
            "style" : styles.child1,
            "link" : "https://ace.codeasylums.com/dsa"
        },
        {
            "title" : "DATA ANALYST WITH BUSINESS ANALYSTS",
            "content" : "Let Data do the talking for you. Derive insights, trends and inferences from real-world data using technologies like SQL, Python, Tableau. Join today to land exciting career opportunities in the hottest career prospect of the century. 3 Month intensive training on the latest Data Analytics tools and Technologies to make you learn Data Analytics from scratch!",
            "style" : styles.child1,
            "link" : "https://ace.codeasylums.com/danalytics"
        },
        {
            "title" : "DATA SCIENCE WITH MACHINE LEARNING",
            "content" : "For the people who are interested in extracting insightful information from structured as well as unstructured data and want to switch careers in Machine Learning to become a Data Scientist.",
            "style" : styles.child2,
            "link" : "https://ace.codeasylums.com/datascience"
        }
    ] 

    return(
        <Layout>
            <div className={styles.Container}>
                <div className={styles.Heading}><p>Offline <span style={{ color:"#2E388E"}}>bootcamp</span></p></div>
                <div className={styles.card}>

                    {Courses.map((item, index)=>{
                        return(
                            <div key={index} className={ item.style }>
                                <div className={styles.subheader}>
                                    <p>{ item.title }</p>
                                </div>
                                <div className={styles.content}>
                                    <p>{ item.content }</p>
                                </div>
                                <div className={styles.line}></div>
                                <div className={styles.comment}>
                                    <p>Offline ( 28 Days )</p>
                                    <a href = { item.link }><button className={styles.button2}>Explore Courses</button></a>
                                </div>
                            </div>
                        )
                    })}

                    

                    {/* <div className={styles.child1}>
                    <div className={styles.subheader}>
                            <p>DATA STRUCTURES AND ALGORITHMS FROM SCRATCH</p>
                        </div>
                        <div className={styles.content}>
                            <p>Specifically tailored for those looking to boost their knowledge in Data Structures & Algorithms, our curated content takes a deep dive into algorithms like Trees, Graphs & Dynamic Programming. Supported with HackerRank Contests, Self Practice Material, and a Hands-On Coding Sessions and Pair Programming. We ensure that you'll be ready for every coding test.</p>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.comment}>
                            <p>Offline ( 28 Days )</p>
                            <button className={styles.button2}>Explore Courses</button>
                        </div>
                    </div>

                    <div className={styles.child1}>
                    <div className={styles.subheader}>
                            <p>DATA STRUCTURES AND ALGORITHMS FROM SCRATCH</p>
                        </div>
                        <div className={styles.content}>
                            <p>Specifically tailored for those looking to boost their knowledge in Data Structures & Algorithms, our curated content takes a deep dive into algorithms like Trees, Graphs & Dynamic Programming. Supported with HackerRank Contests, Self Practice Material, and a Hands-On Coding Sessions and Pair Programming. We ensure that you'll be ready for every coding test.</p>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.comment}>
                            <p>Offline ( 28 Days )</p>
                            <button className={styles.button2}>Explore Courses</button>
                        </div>
                    </div>

                    <div className={styles.child2}>
                    <div className={styles.subheader}>
                            <p>DATA STRUCTURES AND ALGORITHMS FROM SCRATCH</p>
                        </div>
                        <div className={styles.content}>
                            <p>Specifically tailored for those looking to boost their knowledge in Data Structures & Algorithms, our curated content takes a deep dive into algorithms like Trees, Graphs & Dynamic Programming. Supported with HackerRank Contests, Self Practice Material, and a Hands-On Coding Sessions and Pair Programming. We ensure that you'll be ready for every coding test.</p>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.comment}>
                            <p>Offline ( 28 Days )</p>
                            <button className={styles.button2}>Explore Courses</button>
                        </div>
                    </div> */}

                </div>
            </div>

        </Layout>
    )
}

export default online;