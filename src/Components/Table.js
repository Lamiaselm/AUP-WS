import React from 'react';
import Sidebar from '../Components/Sidebar';
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
    <div className="container-table">
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Submit Date</th>
      <th scope="col">Participant</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
     
    
    {items.map(item => ( <tr key={item.id_app}>
                         <td> {item.id_app}</td>
                          <td>{item.created_at}</td>
                          <td>{item.nom}</td>
                          <td>{item.email}</td>
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

