import React,{useState,useEffect} from 'react'
import styles from './testimonials.module.scss';
import Layout from '../../Common/layout';

import bg from '../../../images/bg.png'
import test1 from '../../../images/test1.png'
import controllerLeft from '../../../images/controllerLeft.png'
import controllerRight from '../../../images/controllerRight.png'

const Team = (props) => {

    const [member,setMember]=useState([
        {pic:test1,name:"Saloni Gupta",content:"It's the best ever bootcamp I have ever attended. The pattern of teaching and the quality mentors and tutors are top notch and it provides a friendly competitive environment of learning."},
        {pic:test1,name:"S Gupta",content:"It's the best ever bootcamp I have ever attended. The pattern of teaching and the quality mentors and tutors are top notch and it provides a friendly competitive environment of learning."},
        {pic:test1,name:"Shalu Gupta",content:"It's the best ever bootcamp I have ever attended. The pattern of teaching and the quality mentors and tutors are top notch and it provides a friendly competitive environment of learning."}
      ])

      const [currentIndex,setCurrentIndex]=useState(0)
      const [counter,setCounter]=useState(0)
  
      useEffect(()=>{
          setInterval(()=>{  
            setCounter(prev=>prev+1)    
          },1000)
      },[])
  
      useEffect(()=>{
        if(counter%3===0&&counter!==0){
          setCurrentIndex(prev=>prev===member.length-1?0:prev+1)
        }
      },[counter])
  
      const previous=()=>{
        if(currentIndex===0)
        {
          setCurrentIndex(member.length-1)
          setCounter(0)
        }
        else{
          setCurrentIndex(prev=>prev-1)
          setCounter(0)
        }
      }
  
      const next=()=>{
        if(currentIndex===member.length-1)
        {
          setCurrentIndex(0)
          setCounter(0)
        }
        else{
          setCurrentIndex(prev=>prev+1)
          setCounter(0)
        }
      }

    return(
        <Layout>
            <div className={styles.container}>
                <div className={styles.container2}>
                    <img className={styles.mob} src= { bg } alt="background" width="100%" />
                    <div className={styles.heading}>
                        <p>Testimonials</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.Img}>
                            <img src= { member[currentIndex].pic } alt="background" width="100%" />
                        </div>
                        <div className={styles.name}>
                            <p>{member[currentIndex].name} </p>
                        </div>
                        <div className={styles.content}>
                            <p>{member[currentIndex].content} </p>
                        </div>
                    </div>
                    <div className={styles.controller}>
                        <div onClick={previous} className={styles.controllerLeft}>
                            <img src= { controllerLeft } alt="background" width="100%" />
                        </div>
                        <div onClick={next} className={styles.controllerRight}>
                            <img src= { controllerRight } alt="background" width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Team

