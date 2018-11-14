import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import App from './App'
import A from './movieDataPage'
const Routing=()=>{
  return(
    <BrowserRouter>
      <div>
        <Route path="/" exact component={App}/>
        <Route path="/a/:title" component={A}/>
      </div>
    </BrowserRouter>
  )
}
export default Routing
