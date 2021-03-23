import React from 'react';
import styles from './navbar.module.scss';
import Layout from '../layout'
import Logo from '../../../images/LogoBlack.png';
import LogoWhite from '../../../images/LogoWhite.png';
import Menu from '../../../images/menu1.png';
import { Link } from "gatsby"
import * as Scroll from "react-scroll"

let SmoothLink = Scroll.Link;

const navbar = () =>{
    return(
        <Layout>
            <div className={styles.navbar}>
                <img className={styles.logo} src={ Logo } alt="Logo"/>
                
                <SmoothLink to="courses" smooth={true} duration={1000} className={styles.link}>Bootcamp</SmoothLink>
                <Link to={`/`} className={styles.link}>Alumni</Link>
                <Link to={`/`} className={styles.link}>Mentors</Link>
                <div className={styles.space}></div>
                <button className={styles.button2}>Request Callback</button>
                <img className={styles.logoWhite} src={ LogoWhite } alt="Logo"/>
                <img className={styles.menu} src={ Menu } alt="Hamburger Menu" />
            </div>
        </Layout>
    )
}

export default navbar;