import React from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
class Team extends React.Component{
    render(){
        return(
            <div>

            <Sidebar/>
            <Navbar/>
            <div className="container">
                <div className="jumbotron mt-4">
                    <div className="col-sm-4 mx-auto">
        <h1 className="text-center">Welcome  </h1>  
                    </div>
                    <table className="table col-md-4 mx-auto">
                        <tbody>
                           
                            <tr>
                                <td>Email</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        );
    }
}
export default Team;