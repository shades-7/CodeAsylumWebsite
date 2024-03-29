import React, { useState } from 'react';
import styles from './navbar.module.scss';
import Layout from '../layout'
import Logo from '../../../images/LogoBlack.png';
import LogoWhite from '../../../images/LogoWhite.png';
import Menu1 from '../../../images/menu1.png';
import { Link } from "gatsby"


import icon1 from '../../../images/scholar.png'
import icon2 from '../../../images/icon2.png'
import icon3 from '../../../images/icon3.png'



// let SmoothLink = Scroll.Link;


const Navbar = (props) =>{

    const [open, setOpen] = useState(false);

    const Content = [
      {
        "link" : `/Home/home#courses`,
        "image" : icon2,
        "text" : "Bootcamps"
      },
      {
        "link" : `/Mentor/mentor`,
        "image" : icon3,
        "text" : "Mentors"
      },
      {
        "link" : `/Alumni/alumni`,
        "image" : icon1,
        "text" : "Alumni"
      }
    ]      
    
      return(
        <Layout>
            <div className={styles.navbar}>
                <Link to ={`/`} className={styles.logo}>
                    <img  src={ Logo } alt="Logo" width="75%"/>
                </Link>    

                <Link to="/Home/home#courses" smooth={true} className={styles.link} duration={1000}>Bootcamps</Link>
                <Link to={`/Alumni/alumni`} className={styles.link}>Alumni</Link>
                <Link to={`/Mentor/mentor`} className={styles.link}>Mentors</Link>
                <div className={styles.space}></div>
                <Link to={'https://forms.gle/kxc5gi7mqYwnYUEj9'} target='blank' className={styles.button2}>Apply</Link>  
            </div>

            <div className={styles.Mobnavbar}>
                <Link to ={`/`} className={styles.logoWhite}>
                    <img src={ LogoWhite } alt="Logo" width="70%"/> 
                </Link>    
                <img className={styles.menu} src={ Menu1 } onClick={() => {setOpen(!open)}} alt="Hamburger Menu" />

              <div className={ open ? styles.animationactive : styles.animation}>
                  <div className={styles.backdrop} onClick={() => {setOpen(!open)} }></div>
                  <div className={styles.dropdown}>  
                    {
                      Content.map((item,index) => {
                        return(
                          <Link to={ item.link } className={styles.link1} key={index}> 
                            <div className={styles.item}>
                                <div className={styles.icon}>
                                  <img className={styles.image} alt="icon" src = { item.image }/>
                                </div>
                                <div className={styles.text}>{ item.text }</div>
                            </div>
                          </Link>
                        )
                      })
                    }   
                  </div> 
              </div>
            </div>    
            {console.log(open)}
        </Layout>
      )
        
    
}

export default Navbar;