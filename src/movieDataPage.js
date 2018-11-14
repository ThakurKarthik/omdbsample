import React,{Component} from 'react'
class A extends Component{
  constructor(props){
    super(props)
    this.state={
      movieData:''
    }
  }
  componentDidMount(){
    const jsondata=localStorage.getItem("recent")
    console.log('json',jsondata)
    const movieData=JSON.parse(jsondata)
    this.setState({
      movieData:movieData
    })
  }
  render(){
    // console.log('A props',this.props)
    const {Title,Poster,Year}=this.state.movieData
    console.log('moviedata',this.props)
    return(
      <div>
        <h2>Title:{Title}</h2>
        <h2>Year:{Year}</h2>
        <img src={Poster} alt={Title}/>
      </div>
    )
  }
}
export default A
