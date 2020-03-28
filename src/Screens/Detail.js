import React from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar'
class Detail extends React.Component{
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
                console.log(this.state.items)

            }).catch((err) => {
                console.log(err);
            });

    }
    render (){
        const {items} =this.state
        console.log(localStorage.getItem('usertoken').id) 
        return(
            
            <div>
            <Sidebar/>
            <Navbar/>
            <div className="container">
                <div className="jumbotron mt-4">
                    <div className="col-sm-6 mx-auto">
        <h4 className="text-center">Application detail</h4>  
            
             <table class="table">
                 <tbody>
                 {items.map(item => 
                 ( 
                 <div>    
                 <tr key={localStorage.getItem('usertoken').id}> <td> Family name : {item.nom}</td>  </tr>
                 <tr key={localStorage.getItem('usertoken').id}> <td> First name : {item.prenom}</td>  </tr>
                 <tr key={localStorage.getItem('usertoken').id}> <td> Email : {item.email}</td>  </tr>   
                 <tr key={localStorage.getItem('usertoken').id}> <td> T-Shirt size : {item.tshirt}</td>  </tr>   
                 <tr key={localStorage.getItem('usertoken').id}> <td> About you : {item.abt_urslf}</td>  </tr>   
                 <tr key={localStorage.getItem('usertoken').id}> <td> Why would you attend AUP's competion : {item.why_aup}</td>  </tr> 
                 <tr key={localStorage.getItem('usertoken').id}> <td> Link CV : {item.cv}</td>  </tr>   
                 <tr key={localStorage.getItem('usertoken').id}> <td> Link Github : {item.github}</td>  </tr>   
                 <tr key={localStorage.getItem('usertoken').id}> <td> Link Linkedin : {item.linkedin}</td>  </tr>   
                 <tr key={localStorage.getItem('usertoken').id}> <td> Any comments : {item.comments}</td>  </tr>   


                 </div>     
                 ))}
                 </tbody>

             </table>
            </div>
            </div>
            </div>
            </div>
           
         
        );
    }
}
export default Detail;