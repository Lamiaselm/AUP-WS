import React from 'react';  
import '../App.css';

class Popup extends React.Component {  
  render() {  
return (  
<div className='popup'>  
<div className='popupinner'>  
<br></br>
<br></br>
<h5 >Your team code id : {this.props.code}</h5>  
<button className="btn btn-warning" onClick={this.props.closePopup}>close me</button>  
</div>  
</div>  
);  
}  
}  

export default Popup;