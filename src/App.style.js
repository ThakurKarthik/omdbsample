const MainBody={
  backgroundColor:'#EEEFF1',
  height:'120vh'
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
  width:'50%',
  margin:'60px auto 30px auto',
  height:'auto',
}
const Grid={
  display:'flex',
  justifyContent:'space-around',
  flexWrap:'wrap',
  // margin:'20px auto 20px auto',
  alignContent:'center'
}
const Card={
  boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)',
  margin:'20px auto auto auto'
}
const Container={
  padding:'2px 16px',
  backgroundColor:'yellow',
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
let styled={}
styled.Header=Header
styled.MainBody=MainBody
styled.InputBody=InputBody
styled.Grid=Grid
styled.Card=Card
styled.Container=Container
styled.Input=Input
styled.Select=SelectInput
styled.Button=SearchButton
styled.Error=ErrorBody
export default styled
