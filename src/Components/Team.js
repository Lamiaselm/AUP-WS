import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import {getProfile} from '../Components/UserFunctions'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Team extends React.Component{

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
        fetch('http://127.0.0.1:8000/api/team/'+email)
        
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items:json,
                    
                }
                ) 
                console.log(this.state.items)

            }).catch((err) => {
                console.log(err);
                console.log(this.state.items)
            });
        })
    }
    render(){
        const {items}=this.state;
        return(
            <div>
            <img className="my-containerTeam" />
            <Sidebar/>
            <Navbar/>
            <div className="container">
                <div className="TeamInner">
                    <div className="col-sm-8 mx-auto">
                   <h1 className="center"> Your team :</h1>  
                    </div>
                    <table className="table col-md-4 mx-auto">
                        <thead>
                            <tr>
                                <th>Participant</th>
                                <th>Email</th>
                                <th>Statut</th>
                            </tr>
                        </thead>
                        
                      <tbody>   
        {items.map(item => 
                 ( 
                 
                  <tr key={item.id_app}>
                  <td> {item.nom} &nbsp; {item.prenom}</td>
                  <td> {item.email}</td>
                  <td>
                  { item.accept==1 ?  ( 
                            <FontAwesomeIcon icon={faCheck} style={{color:"green" }} />
                           
                            )
                            
                      :  item.reject==1 ? <FontAwesomeIcon icon={faTimes} style={{color:"red" }}/> 
                      : <FontAwesomeIcon icon={faSpinner} style={{color:"black" }}/> }
                      </td>
                  </tr>


                   
                 ))}
                       </tbody> 
                    </table>
                </div>
            </div>
            </div>
        );
    }
}
export default Team;