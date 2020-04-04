import React from 'react';
import '../App.css';
import nuage from '../Assets/nuage.png'
import nuageR from '../Assets/nuageright.png'
import logoAUP from '../Assets/AUPLOGO.png'
import monstre1 from '../Assets/monstre1.png'
import monstre2 from '../Assets/monstre2.png'
import monstre3 from '../Assets/monstre3.png'
import monstre4 from '../Assets/monstre4.png'
import monstre5 from '../Assets/monstre2.png'


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