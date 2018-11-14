import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      title:'',
      year:'',
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
      title:e.target.value
    })
  }
  yearInput(e){
    this.setState({
      year:e.target.value
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
    fetch(`https://www.omdbapi.com/?&apikey=1a984dfa&t=${this.state.title}&y=${this.state.year}
      &type=${this.state.type}`)
    .then(res=>res.json()).then(data=>{
      if(data.Response==="True"){
        this.recentSetState(data)
        localStorage.setItem("recent",JSON.stringify(data))
        window.open(`a/${data.Title}`)
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
      const pageObj={
        pathname:`/a/${val.Title}`,
        state:{
          data:val
        }
      }
      return(
        <div key={index}>
          <Link to={pageObj} target='_blank' onClick={()=>this.recentLink(val)}>{val.Title}</Link>
          <img src={val.Poster} alt={val.Title} height='150' width='150'/>
        </div>
      )
    }):null)
  }
  recentLink(data){
    localStorage.setItem('recent',JSON.stringify(data))
  }
  render(){
    return(
      <div className="home">
        <h1>omdb movie search</h1>
        <input placeholder="Enter movie title" onChange={this.titleInput}/>
        <input placeholder="Enter Year" onChange={this.yearInput}/>
        <select value={this.state.value} onChange={this.typechange}>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>
        <button onClick={this.fetchMovies}>Search</button>
        {this.state.error!==null?<h1>{this.state.error}</h1>:null}
        {this.state.recent.length!==0?<div>Recent List: {this.recentListDisplay()}</div>:null}
      </div>
    )
  }
}
export default App
