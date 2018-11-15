import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import App from './App'
import MoviePage from './movieDataPage'
import SeriesPage from './seriesDataPage'
import EpisodePage from './episodeDataPage'
const Routing=()=>{
  return(
    <BrowserRouter>
      <div>
        <Route path="/" exact component={App}/>
        <Route path="/movie/:title" component={MoviePage}/>
        <Route path="/series/:title" component={SeriesPage}/>
        <Route path="/episode/:title" component={EpisodePage}/>
      </div>
    </BrowserRouter>
  )
}
export default Routing
