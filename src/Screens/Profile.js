import React, { Component } from 'react'
import { getProfile } from '../Components/UserFunctions'
import Sidebar from '../Components/Sidebar'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            nom: '',
            email: ''
        }
    }

    componentDidMount() {
        getProfile().then(res => {
            this.setState({
                nom: res.user.nom,
                email: res.user.email
            })
        })
    }

    render() {
        return (
            <div>
            <Sidebar/>
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-4 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-4 mx-auto">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{this.state.nom}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        )
    }
}

export default Profile