import React from 'react';
import logo from '../Assets/AUPLOGO.png'
import { getProfile } from '../Components/UserFunctions'
import { slide as Menu } from 'react-burger-menu';
class Sidebar extends React.Component{
  constructor() {
    super()
    this.state = {
        nom: '',
        prenom:'',
        email: ''
    }
}

componentDidMount() {
    getProfile().then(res => {
        this.setState({
            nom: res.user.nom,
            prenom: res.user.prenom,
            email: res.user.email
        })
        var email =this.state.email
        console.log(email)
      
    })
}
render(){
  
  return (
    <Menu>
        <img src={logo} height="150px" style={{marginLeft:"27px" }}></img>
        <br/> 
    <br></br>

      <a className="menu-item" href="/profile">
        Profile
      </a>

      <a className="menu-item" href="/Application">
       Application
      </a>

      <a className="menu-item" href="/statut">
       Statut
      </a>

      <a className="menu-item" href="/Team">
      Team
      </a>
      {this.state.email=="hl_selmane@esi.dz" &&  <a className="menu-item" href="/table">Answers </a>}


     

      <a className="menu-item" href="/Deconexion">
     Deconexion
      </a>
    </Menu>
  );
}
}
export default Sidebar;
