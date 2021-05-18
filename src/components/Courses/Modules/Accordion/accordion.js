import React,{useState} from 'react'
import styles from './accordion.module.scss'

const Accordion = ({ title, content}) =>{
    const [isActive, setActive] = useState(false);
    return(
        <>
        <div className={styles.SubContainer} onClick={()=>{setActive(!isActive)}}>
            <p>{ title }</p>
            {/* <h4>{ isActive ? "-" : "+"}</h4> */}
            <h3 className={isActive? styles.active : styles.normal }>+</h3>
        </div>
        <div className={isActive ? styles.ActiveContent : styles.Content}> {content} </div>
        </>
    )
}

export default Accordion;