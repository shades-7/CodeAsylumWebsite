import React from 'react'

export default function yuhi() {
    const pathname = window.location.pathname
    let name;

    if(pathname === "/courses/FullStack_Web_Development"){
        name = "WD"
    }else if(pathname === "/courses/DSA"){
        name= "DSA"
    }else if(pathname === "/courses/DS/courses/Data_Ananlyst_with_Bussiness_Analysts"){
        name= "Data_Ananlyst_with_Bussiness_Analysts"
    }else if(pathname === "/courses/Data_Science_with_Machine_Learning"){
        name= "Data_Science_with_Machine_Learning"
    }


    return (
        <div>
            <p> hello i am {name}</p>
        </div>
    )
}
