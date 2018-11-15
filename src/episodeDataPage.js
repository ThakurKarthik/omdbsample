import React,{Component} from 'react'
import styled from './movieDataPage.style'
class MovieDataPage extends Component{
  constructor(props){
    super(props)
    this.state={
      movieData:''
    }
  }
  componentDidMount(){
    const jsondata=localStorage.getItem("recent")
    const movieData=JSON.parse(jsondata)
    this.setState({
      movieData:movieData
    })
  }
  render(){
    const MovieData=this.state.movieData
    let {Ratings}=MovieData
    return(
      <div style={styled.MainPage}>
        <div style={styled.grid}>
          <div style={styled.card}>
            <img src={MovieData.Poster} alt={MovieData.Title} style={styled.image}/>
            {
              MovieData.Website && MovieData.Website!=='N/A'?
                <div style={styled.website}><a href={MovieData.Website}><strong>Website link</strong></a></div>:
                null
            }
          </div>
          <div style={styled.column}>
            <h1 style={styled.MovieTitle}>{MovieData.Title}</h1>
            <div style={styled.Row}>
              <span ><strong>Released</strong>: {MovieData.Released}</span>
              <span ><strong>Rated</strong>: {MovieData.Rated}</span>
            </div>
            <div style={styled.Row}>
              <span ><strong>Runtime</strong>: {MovieData.Runtime}</span>
            </div>
            <div style={styled.Row}>
              <span ><strong>Genre</strong>: {MovieData.Genre}</span>
              <span ><strong>Language</strong>: {MovieData.Language}</span>
            </div>
            <div style={styled.Row}>
              <span ><strong>Directed by</strong>: {MovieData.Director}</span>
              <span ><strong>Actors</strong>: {MovieData.Actors}</span>
            </div>
            <div style={styled.Row}>
              <span ><strong>Written by</strong>: {MovieData.Writer}</span>
            </div>
            <div style={styled.PlotRow}>
              <p><strong>Plot</strong>:<span style={{paddingLeft:'8px'}}/>{MovieData.Plot}</p>
            </div>
            <div style={styled.SideHeading}>Ratings:</div>
            <ul>
              {
                Ratings && Ratings.map(rating=>(
                  <li key={rating.Source}>{rating.Source}: {rating.Value}</li>
                ))
              }
              <li>IMDB Rating: {MovieData.imdbRating} (ImdbVotes: {MovieData.imdbVotes})</li>
              <li>Metascore: {MovieData.Metascore}</li>
            </ul>
            <div style={styled.SideHeading}>Awards:</div>
            <div style={styled.Row}>
              <span style={{paddingLeft:'10px'}}>{MovieData.Awards}</span>
            </div>
            <div style={styled.SideHeading}>More Info:</div>
            <div style={styled.Row}>
              <span style={{paddingLeft:'10px'}}>IMDB Title: {MovieData.imdbID}</span>
            </div>
            <div style={styled.Row}>
              <span style={{paddingLeft:'10px'}}>Country: {MovieData.Country}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MovieDataPage
