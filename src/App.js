// todo if image is not present show a default one
import React from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader'
import styled from './App.style'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      titleInput:'',
      yearInput:'',
      imdbIDInput:'',
      isFetching1:false,
      isFetching2:false,
      recent:[],
      type:'movie',
      error:''
    }
    this.titleChange=this.titleChange.bind(this)//bindings for functions
    this.yearChange=this.yearChange.bind(this)
    this.typechange=this.typechange.bind(this)
    this.imdbIdChange=this.imdbIdChange.bind(this)
    this.fetchByTitle=this.fetchByTitle.bind(this)
    this.fetchByIMDB=this.fetchByIMDB.bind(this)
    this.recentListDisplay=this.recentListDisplay.bind(this)
    this.recentSetState=this.recentSetState.bind(this)
    this.openPage=this.openPage.bind(this)
  }
  titleChange(e){
    this.setState({
      titleInput:e.target.value
    })
  }
  yearChange(e){
    this.setState({
      yearInput:e.target.value
    })
  }
  imdbIdChange(e){
    this.setState({
      imdbIDInput:e.target.value
    })
  }
  typechange(e){
    this.setState({
      type:e.target.value
    })
  }
  recentSetState(data){//to show the last five searches
    if(this.state.recent.length<5){
      this.setState({
        recent:[...this.state.recent,data],//set the data
        titleInput:'',
        yearInput:'',
        imdbIDInput:'',
        error:'',
        isFetching1:false,
        isFetching2:false,
        type:'movie'
      })
    }
    else{
      this.setState({
        recent:[...this.state.recent.slice(1,5),data],//slice to maintain last four recent searches
        titleInput:'',
        yearInput:'',
        imdbIDInput:'',
        error:'',
        isFetching1:false,
        isFetching2:false,
        type:'movie'
      })
    }
  }
  openPage(title,type){//to open link in new tab
    if(type==='movie'){
      window.open(`movie/${title}`)
    }
    else if(type==='series'){
      window.open(`series/${title}`)
    }
    else{
      window.open(`episode/${title}`)
    }
  }
  fetchByTitle(){//to search by title
    this.setState({
      isFetching1:true,
      error:''
    })
    fetch(`https://www.omdbapi.com/?&apikey=1a984dfa&t=${this.state.titleInput}&y=${this.state.yearInput}
      &type=${this.state.type}`)
    .then(res=>res.json()).then(data=>{
      if(data.Response==="True"){//the data received from this api has a key Response
        this.recentSetState(data)
        localStorage.setItem("recent",JSON.stringify(data))
        this.openPage(data.Title,data.Type)
      }
      else{
        this.setState({// if response is False then set the error as not found
          error:data.Error,
          yearInput:'',
          titleInput:'',
          isFetching1:false,
          type:'movie'
        })
      }
    }).catch(error=>{//set the error if fetch fails to retreive data
      this.setState({
        error:error.message,
        isFetching1:false,
        type:'movie'
      })
    })
  }

  fetchByIMDB(){//to search by imdbid
    this.setState({
      isFetching2:true,
      error:''
    })
    fetch(`https://www.omdbapi.com/?&apikey=1a984dfa&i=${this.state.imdbIDInput}`)
    .then(res=>res.json()).then(data=>{
      if(data.Response==="True"){
        this.recentSetState(data)
        localStorage.setItem("recent",JSON.stringify(data))
        this.openPage(data.Title,data.Type)
      }
      else{
        this.setState({
          error:data.Error,
          isFetching2:false,
          type:'movie',
          imdbIDInput:''
        })
      }
    }).catch(error=>{
      this.setState({
        error:error.message,
        isFetching2:false,
        type:'movie',
        imdbIDInput:''
      })
    })
  }
  recentListDisplay(){
    return (this.state.recent.length>0?this.state.recent.slice(0).reverse().map((val,index)=>{
      return(
        <div key={index} style={styled.Card}>
          <div>
            <img style={styled.img}src={val.Poster} alt={val.Title} title={val.Title}/>
          </div>
          <div style={styled.Container}>
            <Link to={`/${val.Type}/${val.Title}`} target='_blank' onClick={()=>this.recentLink(val)}><h3>{val.Title}</h3></Link>
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
          <div style={styled.Text}>Search by Title</div>
          <input style={styled.Input} placeholder="Enter movie title" onChange={this.titleChange} value={this.state.titleInput}/>
          <input style={styled.Input} placeholder="Enter Year" onChange={this.yearChange} value={this.state.yearInput}/>
          <select style={styled.Select} value={this.state.type} onChange={this.typechange}>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
              <option value="episode">Episode</option>
          </select>
          <button style={styled.Button} onClick={this.fetchByTitle}>SEARCH</button>
          <div style={styled.LoaderStyle}>
            <Loader loaded={!this.state.isFetching1}  options={styled.Loader}/>
          </div>
        </div>

        <div style={styled.InputBody2}>
          <div style={styled.Text}>Search by IMDB ID</div>
          <input style={styled.Input} placeholder="Enter IMDB id" onChange={this.imdbIdChange} value={this.state.imdbIDInput}/>
          <button style={styled.Button} onClick={this.fetchByIMDB}>SEARCH</button>
          <div style={styled.LoaderStyle}>
            <Loader loaded={!this.state.isFetching2}  options={styled.Loader}/>
          </div>
        </div>

        {this.state.error!==''?<h2 style={styled.Error}>{this.state.error}</h2>:null}
        {this.state.recent.length!==0?<div style={styled.Grid}>{this.recentListDisplay()}</div>:null}
      </div>
    )
  }
}
export default App
