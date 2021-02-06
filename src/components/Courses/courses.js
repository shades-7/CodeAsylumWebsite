import React from "react"
import styles from "./courses.module.scss"
import Layout from "../layout"
import Offline from "../OflineBootcamps/offline"
import Online from "../Online/online"

const courses = () => {
    return(
        <Layout>
            <div className={styles.Container}>
                <div className={styles.heading}>
                    <p>Discover our <span style = {{color: "#2E3192"}}>bootcamps</span></p>
                </div>
                <Offline />
                <Online />
            </div>
        </Layout>
    )
}

export default courses;