import React,{useState,useEffect} from 'react'
import styles from './testimonials.module.scss';
import Layout from '../../Common/layout';

import bg from '../../../images/bg.png'
import AyushiKejriwal from '../../../images/ayushi kejriwal.png'
import TanuBhalot from '../../../images/tanu bhalot.png'
import MohakJain from '../../../images/mohak jain.png'
import RaunakAgarwal from '../../../images/raunak agarwal.png'
import controllerLeft from '../../../images/controllerLeft.png'
import controllerRight from '../../../images/controllerRight.png'

const Team = (props) => {

    const [member,setMember]=useState([
        {pic:AyushiKejriwal,name:"Ayushi Kejriwal - Software Engineer at Microsoft",content:"The experience is totally worth it, and I would definitely recommend it to my juniors, just go there, and experience it."},
        {pic:TanuBhalot,name:"Tannu Bhalotia - Software Engineer at Intuit",content:"It provides you a great learning experience with a very friendly environment. All the teachers guides and motivates you throughout the bootcamp and hence this helps you in learning new technologies and building confidence."},
        {pic:MohakJain,name:"Mohak Jain - Placed at Salesforce",content:"The environment provided by Codeasylums is excellent. Great for college students who are looking to learn new things and utilise their vacations productively. The mentors provide 24*7 guidance. Hackathons are a fun way of implementing. "},
        {pic:RaunakAgarwal,name:"Raunak Agarwal - Analyst (strats) at Goldman Sachs",content:"CodeAsylums has been the most incredible experience of my life. I am really glad that I could be a part of the first ever batch. I met new people, brilliant minds and we all are still connected."} 
      ])

      const [currentIndex,setCurrentIndex]=useState(0)
      const [counter,setCounter]=useState(0)
  
      useEffect(()=>{
          setInterval(()=>{  
            setCounter(prev=>prev+1)    
          },2000)
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

