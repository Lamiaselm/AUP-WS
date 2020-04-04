import React from 'react';
import '../App.css';

import logoAUP from '../Assets/AUPLOGO.png'



class Home extends React.Component{
    render (){
        return (
             
              <div >
                  <img className="my-container" />
                  <img className="logoAUP" src={logoAUP}/> 
                
                 <div>
                 <a href="/login" role="button" className="btn btn-secondary btn-lg login" >GET STARTED </a>
                 </div>
                 
                 
                
                 </div>
                
              
             
        );
    }
}
export default Home;