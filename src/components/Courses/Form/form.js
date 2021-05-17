import React from 'react';
import styles from './form.module.scss';
import Bg from '../../../images/formbg.png'
import Icon from '../../../images/flat.png'

const form = () =>{
    return(
        <>
            <div className={styles.Container}>
                <div className={styles.FormContainer}>
                    <div className={styles.BgContainer}>
                        <img src={ Bg } alt="guy with laptop" width="85%" />
                    </div>
                    <div className={styles.RightContainer}>
                        <div className={styles.SubContainer}>
                            <div className={styles.Form}>
                                <form className={styles.CustomForm}>
                                    <label className={styles.label}>Email</label>
                                    <input className={styles.input} type="email" placeholder="johndoe@gmail.com"></input>
                                    <div className={styles.row}>
                                        <div className={styles.alignment}>
                                            <label className={styles.label}>Name</label>
                                            <input className={styles.input1} type="text" placeholder="Full Name"></input>
                                        </div>
                                        <div className={styles.alignment}>
                                            <label className={styles.label}>Phone</label>
                                            <input className={styles.input1} type="number" placeholder="+91 9988776655"></input>
                                        </div>
                                    </div>

                                    <input type="button" value="Submit" className={styles.button}></input>
                                </form>
                            </div>
                            <div className={styles.Icon}>
                                <img src={ Icon } alt="icon" width="60%" />
                            </div>
                        </div>
                        <div className={styles.TextContainer}>
                            <div className={styles.Heading}>
                                Upcoming batches every <span style={{color: "#2E388E"}}>10th of the Month</span>
                            </div>
                            <p className={styles.text}>Offline bootcamps ₹35,000 + GST ₹45,000</p>
                            <p className={styles.text}>Offline bootcamps ₹35,000 + GST ₹45,000</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default form;