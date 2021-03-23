import React from "react"
import styles from "./company.module.scss"
import Layout from "../../Common/layout"

import Google from "../../../images/google.png";
import Microsoft from "../../../images/microsoft.png";
import Flipkart from "../../../images/flipkart.png";
import Paytm from "../../../images/paytm.png";
import Oyo from "../../../images/oyo.png";
import Vmware from "../../../images/vmware.png";
import Adobe from "../../../images/adobe.png";
import Intuit from "../../../images/intuit.png";
import Walmart from "../../../images/walmartLabs.png";
import Amazon from "../../../images/amazon.png";
import Arcesium from "../../../images/arcesium.png";
import Goldman from "../../../images/goldmanSachs.png";

const company = () => {

    let logo = [ Google, Microsoft, Flipkart, Paytm, Walmart, Amazon, Arcesium, Goldman, Oyo, Vmware, Adobe, Intuit]

    return(
        <Layout>
            <div className={ styles.Container}>
                    <div className={styles.header}>
                        <p>Our gradutes are <span style={{color:"#2E388E"}}>hired</span> by</p>
                    </div>
                <div className={styles.Content}>    
                    <div className={styles.logoContainer}>
                        {
                            logo.map((item, index) => {
                                return(
                                    <div key={ index } className={styles.logo}>
                                        <img src = { item } alt="google logo " width="100%"/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.footer}>
                        
                    </div>
                </div>
            </div>
        </Layout>   
    )
}

export default company;