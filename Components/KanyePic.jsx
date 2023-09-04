function KanyePic(props){
  const customStyle = {
    width: '20rem', // Set the width as '1rem'
  
  };

  return <img src={props.url}  className=" rounded mt-5 mb-5 img-fluid mx-auto" style={customStyle}/>
}
export default KanyePic