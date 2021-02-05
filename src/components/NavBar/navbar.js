import React from 'react';
import styles from './navbar.module.scss';
import Layout from '../layout'
import Logo from '../../images/LogoBlack.png';
import LogoWhite from '../../images/LogoWhite.png';
import Menu from '../../images/menu1.png';
import { Link } from "gatsby"

const navbar = () =>{
    return(
        <Layout>
            <div className={styles.navbar}>
                <img className={styles.logo} src={ Logo } alt="Logo"/>
                <img className={styles.logoWhite} src={ LogoWhite } alt="Logo"/>
                <Link to={``} className={styles.link}>Bootcamp</Link>
                <Link to={``} className={styles.link}>Alumni</Link>
                <Link to={``} className={styles.link}>Mentors</Link>
                <img className={styles.menu} src={ Menu } alt="Hamburger Menu" />
            </div>
        </Layout>
    )
}

export default navbar;