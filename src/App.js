// todo if image is not present show a default one
import React from 'react'
import {Link} from 'react-router-dom'
import styled from './App.style'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      titleInput:'',
      yearInput:'',
      recent:[],
      type:'movie',
      error:null
    }
    this.titleInput=this.titleInput.bind(this)
    this.yearInput=this.yearInput.bind(this)
    this.typechange=this.typechange.bind(this)
    this.fetchMovies=this.fetchMovies.bind(this)
    this.recentListDisplay=this.recentListDisplay.bind(this)
    this.recentSetState=this.recentSetState.bind(this)
  }
  titleInput(e){
    this.setState({
      titleInput:e.target.value
    })
  }
  yearInput(e){
    this.setState({
      yearInput:e.target.value
    })
  }
  typechange(e){
    this.setState({
      type:e.target.value
    })
  }
  recentSetState(data){
    if(this.state.recent.length<5){
      this.setState({
        recent:[...this.state.recent,data],
        error:''
      })
    }
    else{
      this.setState({
        recent:[...this.state.recent.slice(1,5),data]
      })
    }
  }
  fetchMovies(){
    fetch(`https://www.omdbapi.com/?&apikey=1a984dfa&t=${this.state.titleInput}&y=${this.state.yearInput}
      &type=${this.state.type}`)
    .then(res=>res.json()).then(data=>{
      if(data.Response==="True"){
        this.recentSetState(data)
        localStorage.setItem("recent",JSON.stringify(data))
        window.open(`movie/${data.Title}`)
      }
      else{
        this.setState({
          error:data.Error
        })
      }
    }).catch(error=>console.log('error',error))
  }
  recentListDisplay(){
    return (this.state.recent.length>0?this.state.recent.slice(0).reverse().map((val,index)=>{
      return(
        <div key={index} style={styled.Card}>
          <img style={{width:'100%'}}src={val.Poster} alt={val.Title} height='200' width='200' title={val.Title}/>
          <div style={styled.Container}>
            <Link to={`/movie/${val.Title}`} target='_blank' onClick={()=>this.recentLink(val)}><h3>{val.Title}</h3></Link>
          </div>
        </div>
      )
    }):null)
  }
  recentLink(data){
    localStorage.setItem('recent',JSON.stringify(data))
  }
  render(){
    return(
      <div style={styled.MainBody}>
        <h1 style={styled.Header}>omdb movie/tv series/episodes search</h1>
        <div style={styled.InputBody}>
          <input style={styled.Input} placeholder="Enter movie title" onChange={this.titleInput}/>
          <input style={styled.Input} placeholder="Enter Year" onChange={this.yearInput}/>
          <select style={styled.Select} value={this.state.value} onChange={this.typechange}>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
              <option value="episode">Episode</option>
            </select>
          <button style={styled.Button} onClick={this.fetchMovies}>SEARCH</button>
        </div>
        {this.state.error!==null?<h2 style={styled.Error}>{this.state.error}</h2>:null}
        {this.state.recent.length!==0?<div style={styled.Grid}>{this.recentListDisplay()}</div>:null}
      </div>
    )
  }
}
export default App
