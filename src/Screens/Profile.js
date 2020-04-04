import React, { Component } from 'react'
import { getProfile } from '../Components/UserFunctions'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            nom: '',
            prenom:'',
            email: ''
        }
    }

    componentDidMount() {
        var token=localStorage.getItem('usertoken')
        if(token)
        {   getProfile().then(res => {
            this.setState({
                nom: res.user.nom,
                prenom: res.user.prenom,
                email: res.user.email
            })
            console.log(res.user.id)
        })
            this.props.history.push(`/profile`)}
        else { this.props.history.push(`/login`)}
      
    }

    render() {
        return (
            <div>
            <img className="my-containerProfile" />

            <Sidebar/>
            <Navbar/>
            
          
            <div className="container">
                
                <div className="col-sm-4 mx-auto">
           <h1 className="text-center">Welcome  {this.state.nom} &nbsp; {this.state.prenom}</h1>  
                    </div>
                    <table className="table col-md-4 mx-auto">
                        <tbody>
                           
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                
            </div>
            </div>
        )
    }
}

export default Profile