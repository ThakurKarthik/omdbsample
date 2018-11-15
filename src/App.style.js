const MainBody={
  backgroundColor:'#EEEFF1',
  height:'100%'
}
const ErrorBody={
  textAlign:'center',
  textTransform:'uppercase',
  color:'red',
}
const Header={
  textAlign:'center',
  textTransform:'uppercase',
}
const InputBody={
  display:'flex',
  alignItems:'center',
  width: '70%',
  margin:'60px auto 30px auto',
  height:'auto',
}
const InputBody2={
  display:'flex',
  alignItems:'center',
  width:'50%',
  margin:'60px auto 30px auto',
  height:'auto',
}
const Grid={
  display:'flex',
  justifyContent:'space-around',
  flexWrap:'wrap',
  alignContent:'flex-end'
}
const Card={
  boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',
  border:'2px solid black',
  margin:'20px auto'
}
const Container={
  padding:'2px 16px',
  backgroundColor:'yellow',
  margin:'auto'
}
const Input={
  height:'45px',
  fontSize:'15px',
  padding:'0px 10px',
  margin:'0px 2px',
  fontWeight:'bold',
  border:'1px solid black',
  borderRadius:'5px',
}
const SelectInput={
  height:'45px',
  fontSize:'15px',
  padding:'0px 10px',
  margin:'0px 2px',
  fontWeight:'bold',
  border:'1px solid black',
  borderRadius:'5px',
  backgroundColor:'white'
}
const SearchButton={
  height:'45px',
  fontSize:'15px',
  padding:'0px 10px',
  margin:'0px 8px',
  fontWeight:'bold',
  backgroundColor:'#62D643',
  borderRadius:'5px'
}
const Text={
  fontSize:'15px',
  fontWeight:'bold',
  textTransform:'uppercase',
  textAlign:'center',
  width:'300px'
}
const Loader={
  color:'blue',
  position:'relative',
}

const LoaderStyle={
  width: '20%'
}
const img={
  minHeight:'200px',
  maxHeight:'250px',
  width:'100%'
}
let styled={}
styled.Header=Header
styled.MainBody=MainBody
styled.InputBody=InputBody
styled.InputBody2=InputBody2
styled.Grid=Grid
styled.Card=Card
styled.Container=Container
styled.Input=Input
styled.Select=SelectInput
styled.Button=SearchButton
styled.Error=ErrorBody
styled.Text=Text
styled.LoaderStyle = LoaderStyle
styled.Loader=Loader
styled.img=img
export default styled
