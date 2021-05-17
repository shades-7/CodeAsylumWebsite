import React from 'react';
import Layout from '../../Common/layout';

import grad1 from '../../../images/grad1.png';
import grad2 from '../../../images/grad2.png';
import grad3 from '../../../images/grad3.png';
import GradsComponent from './mentorData'


const graduates = () =>{

   let Card = [
        {
            "image" : grad1,
            "name" : "Shivam Raj",
            "containt" : "CodeAsylums has played a valuable role in helping me land a package of 51L at Atlassian. I'm grateful for the constant support and the invaluable resources that they provided. With my never give up attitude and the need to constantly learn and grow, I realised CodeAsylums was just the assistance I needed.",
            "account" : "shivam's linkdien account",
            "title" : "SDE 1 at Walmart"
        },
        {
            "image" : grad2,
            "name" : "Shivansh ",
            "containt" : "CodeAsylums has played a valuable role in helping me land a package of 51L at Atlassian. I'm grateful for the constant support and the invaluable resources that they provided. With my never give up attitude and the need to constantly learn and grow, I realised CodeAsylums was just the assistance I needed.",
            "account" : "shivansh's linkdien account",
            "title" : "SDE 1 at Walmart"
        },
        {
            "image" : grad3,
            "name" : "Aman",
            "containt" : "CodeAsylums has played a valuable role in helping me land a package of 51L at Atlassian. I'm grateful for the constant support and the invaluable resources that they provided. With my never give up attitude and the need to constantly learn and grow, I realised CodeAsylums was just the assistance I needed.",
            "account" : "aman's linkdien account",
            "title" : "SDE 1 at Walmart"
        }
    ]

    return(
        <Layout>
           <GradsComponent Card={Card}/>     
        </Layout>
    )
}
export default graduates;