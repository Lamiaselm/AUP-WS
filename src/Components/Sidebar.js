import React from 'react';
import logo from '../Assets/AUPLOGO.png'
import { slide as Menu } from 'react-burger-menu';

export default props => {
  const {email}=localStorage.getItem('usertoken');
  console.log(email);
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
      <a className="menu-item" href="/table">
       Answers
      </a>

      <a className="menu-item" href="/Deconexion">
     Deconexion
      </a>
    </Menu>
  );
};