import React from 'react';
import { getProfile } from '../Components/UserFunctions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
class Statut extends React.Component{

    constructor(props){
        super(props);
        this.state={
            nom:'',
            prenom:'',
            email:'',
            items:[],
        }
    }
    componentDidMount() {
        
        getProfile().then(res => {
            this.setState({
                nom: res.user.nom,
                prenom: res.user.prenom,
                email: res.user.email
            })
            var email=this.state.email
           // console.log('http://127.0.0.1:8000/api/statut/'+email)
        
        
        fetch('http://127.0.0.1:8000/api/statut/'+email)
        
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items:Array.from([json]),
                    
                }
                ) 
               
               // console.log(this.state.items)
            }).catch((err) => {
                console.log(err);
             //   console.log('hello')
               // console.log(this.state.items)
            });
        })
    }
    

    render(){
        const {items} =this.state
        return(
            <div>
                <Sidebar/>
                <Navbar/>
            <div className="container">
             <div className="statutInner">
              {items.map(item=>(
                  <div>
                      {item.accept==1 ? <h2> YOU HAVE BEEN ACCEPTED YAY *-*</h2> 
                       : item.reject==1 ? <h2> SORRY FOR YOU WELLAH YOU HAVE BEEN REJECTED DNT BE SAD BALIZ U-U</h2> 
                       : <h2> PLEASE WAIT THE SELECTION HAS NOT BEEN DONE YET</h2>  }
                  </div>

              ))}
             </div>
            </div>
            </div>
        );
    }
}
export default Statut;