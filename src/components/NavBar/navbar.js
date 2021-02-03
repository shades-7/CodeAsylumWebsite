import React from 'react';
import styles from './navbar.module.scss';
import Logo from '../../images/LogoBlack.png';
import { Link } from "gatsby"

const navbar = () =>{
    return(
        <>
            <div className={styles.navbar}>
                <img src={ Logo } alt="Logo"/>
                <Link to={``}>More posts</Link>
            </div>
        </>
    )
}

export default navbar;