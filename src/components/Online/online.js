import React from 'react'
import styles from '../Online/online.module.scss'
import Layout from '../layout'

const online = () => {

    let Courses = [
        {
            "title" : "DATA STRUCTURES AND ALGORITHMS FROM SCRATCH",
            "content" : "Specifically tailored for those looking to boost their knowledge in Data Structures & Algorithms, our curated content takes a deep dive into algorithms like Trees, Graphs & Dynamic Programming. Supported with HackerRank Contests, Self Practice Material, and a Hands-On Coding Sessions and Pair Programming. We ensure that you'll be ready for every coding test.",
            "style" : styles.child2
        },
        {
            "title" : "DATA STRUCTURES AND ALGORITHMS FROM SCRATCH",
            "content" : "Specifically tailored for those looking to boost their knowledge in Data Structures & Algorithms, our curated content takes a deep dive into algorithms like Trees, Graphs & Dynamic Programming. Supported with HackerRank Contests, Self Practice Material, and a Hands-On Coding Sessions and Pair Programming. We ensure that you'll be ready for every coding test.",
            "style" : styles.child1
        },
        {
            "title" : "DATA STRUCTURES AND ALGORITHMS FROM SCRATCH",
            "content" : "Specifically tailored for those looking to boost their knowledge in Data Structures & Algorithms, our curated content takes a deep dive into algorithms like Trees, Graphs & Dynamic Programming. Supported with HackerRank Contests, Self Practice Material, and a Hands-On Coding Sessions and Pair Programming. We ensure that you'll be ready for every coding test.",
            "style" : styles.child1
        },
        {
            "title" : "DATA STRUCTURES AND ALGORITHMS FROM SCRATCH",
            "content" : "Specifically tailored for those looking to boost their knowledge in Data Structures & Algorithms, our curated content takes a deep dive into algorithms like Trees, Graphs & Dynamic Programming. Supported with HackerRank Contests, Self Practice Material, and a Hands-On Coding Sessions and Pair Programming. We ensure that you'll be ready for every coding test.",
            "style" : styles.child2
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
                                    <button className={styles.button2}>Explore Courses</button>
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