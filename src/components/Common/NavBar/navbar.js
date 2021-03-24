import React, { useState } from 'react';
import styles from './navbar.module.scss';
import Layout from '../layout'
import Logo from '../../../images/LogoBlack.png';
import LogoWhite from '../../../images/LogoWhite.png';
import Menu1 from '../../../images/menu1.png';
import { Link } from "gatsby"
import * as Scroll from "react-scroll"

import icon1 from '../../../images/scholar.png'
import icon2 from '../../../images/icon2.png'
import icon3 from '../../../images/icon3.png'



let SmoothLink = Scroll.Link;


const Navbar = (props) =>{

    const [open, setOpen] = useState(false);

    const Content = [
      {
        "link" : `/`,
        "image" : icon1,
        "text" : "Bootcamp"
      },
      {
        "link" : `/Mentor/mentor`,
        "image" : icon2,
        "text" : "Mentor"
      },
      {
        "link" : `/`,
        "image" : icon3,
        "text" : "Alumni"
      }
    ]

    return(
        <Layout>
            <div className={styles.navbar}>
                <img className={styles.logo} src={ Logo } alt="Logo"/>
                
                <Link to={`/`} className={styles.link} >
                Bootcamp
                    {/* <SmoothLink to="courses" smooth={true}  duration={1000}>Bootcamp</SmoothLink> */}
                </Link>
                <Link to={`/`} className={styles.link}>Alumni</Link>
                <Link to={`/Mentor/mentor`} className={styles.link}>Mentors</Link>
                <div className={styles.space}></div>
                <button className={styles.button2}>Request Callback</button>  
            </div>

            <div className={styles.Mobnavbar}>
                <img className={styles.logoWhite} src={ LogoWhite } alt="Logo"/> 
                
                <img className={styles.menu} src={ Menu1 } onClick={() => {setOpen(!open)}} alt="Hamburger Menu" />

                {open && <div className={styles.dropdown}>
                  {
                    Content.map((item,index) => {
                      return(
                        <Link to={ item.link } key={index}> 
                          <div className={styles.item}>
                              <div className={styles.icon}>
                                <img className={styles.image} src = { item.image }/>
                              </div>
                              <div className={styles.text}>{ item.text }</div>
                          </div>
                        </Link>
                      )
                    })
                  }   
                </div>}
            </div>
                
        </Layout>
    )
}

export default Navbar;