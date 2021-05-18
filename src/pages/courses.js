import React from 'react'
import { Router } from '@reach/router'

import Template from '../components/Template/template'

function app1() {
    return (
       <Router>
           <Template path="/courses/:id" />
       </Router>
    )
}

export default app1;