import React from "react"
import styles from "./courses.module.scss"
import Layout from "../../Common/layout"
import Offline from "./OflineBootcamps/offline"
import Online from "./Online/online"
// import Placement from "./PlacementAssistance/placement"

const courses = (props) => {
    return(
        <Layout>
            <div className={styles.Container} id="courses">
                <div className={styles.heading}>
                    <p>Discover our <span style = {{color: "#2E3192"}}>bootcamps</span></p>
                </div>
                <Offline />
                <Online />
                {/* <Placement /> */}
            </div>
        </Layout>
    )
}

export default courses;