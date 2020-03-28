import React from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar'
import { Link, withRouter } from 'react-router-dom'
class Table extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        }
    }
    componentDidMount() {

        fetch('http://127.0.0.1:8000/api/app')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    
                })
            }).catch((err) => {
                console.log(err);
            });

    }
    render(){
        const {items}=this.state;
        return (
    <div>
    <Sidebar/>
    <Navbar/>
    <div className="container-table">
    <table class="table">
    <thead class="thead-dark">
     <tr>
      <th scope="col">#</th>
      <th scope="col">Submit Date</th>
      <th scope="col">Participant</th>
      <th scope="col">Email</th>
      <th scope="col">Link</th>
      <th scope="col">Statut</th>
    </tr>
  </thead>
  <tbody>
     
    
    {items.map(item => ( <tr key={item.id_app}>
                         <td> {item.id_app}</td>
                          <td>{item.created_at}</td>
                          <td>{item.nom} &nbsp;{item.prenom}</td>
                          <td>{item.email}</td>
                          <td> <Link to={{
                                   pathname:'/detail',
                                   state:{
                                       id_app:item.id_app
                                   }
                          }}
                          
                           className="nav-link">App Detail</Link>
                           </td>
                        </tr>
                    ))}
    
  </tbody>
</table>
    </div>
    </div>
      
        );
    }
}
export default Table;


