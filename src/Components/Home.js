import React from 'react';
import Sidebar from './Sidebar'

class Home extends React.Component{
    render (){
        return (
          
                <div>
                    <Sidebar/>
                 <img className="accueil"></img>
                 </div>
        );
    }
}
export default Home;