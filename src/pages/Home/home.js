import React from 'react';
import styles from './home.module.scss';
import NavBar from '../../components/NavBar/navbar';
import Landing from '../../components/Landing/landing'



const App =() =>{
    return(
        <>
         <div className={styles.landing}>
            <NavBar />
            <Landing />
         </div>
        </>
    )
}


export default App;

