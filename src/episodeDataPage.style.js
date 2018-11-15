const MainPage={
  backgroundColor:'#EEEFF1',
}
const grid={
  width:'100%',
  display:'flex',
  justifyContent:'space-around',
  height:'100%',
}
const card={
  paddingLeft: '10px',
}
const image={
  left:'20px',
  height: '300px',
  width: '300px'
}
const website={
  textTransform:'capitalize',
  justifyContent:'center',
  height:'30px',
  display:'flex',
  alignItems:'center',
}
const column={
  wordBreak: 'break-word',
  border:'2px solid black',
  borderRadius:'0.5px'
}
const MovieTitle={
  textAlign:'center',
}
const Row={
  display:'flex',
  justifyContent:'space-between',
  fontSize:'20px',
  margin:'15px 15px 20px 5px',
}
const PlotRow={
  fontSize:'20px',
  margin:'15px 15px 20px 5px',
}
const SideHeading={
  fontSize:'20px',
  textTransform:'uppercase',
  width:'20%',
  borderBottom:'2px solid red',
  fontWeight:'bold',
  margin:'15px 15px 20px 5px',
}
let styled={}
styled.MainPage=MainPage
styled.card=card
styled.image=image
styled.grid=grid
styled.column=column
styled.MovieTitle=MovieTitle
styled.Row=Row
styled.PlotRow=PlotRow
styled.website=website
styled.SideHeading=SideHeading
export default styled
