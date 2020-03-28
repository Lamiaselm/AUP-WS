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
        const {id_app}=this.props.location.state
        console.log(id_app)
        fetch('http://127.0.0.1:8000/api/app/?id_app='+id_app)
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
                 <div > 
            
                 <tr  > <td> Family name : {item.nom}</td>  </tr>
                 <tr > <td> First name : {item.prenom}</td>  </tr>
                 <tr > <td> Email : {item.email}</td>  </tr>   
                 <tr> <td> T-Shirt size : {item.tshirt}</td>  </tr>   
                 <tr > <td> About you : {item.abt_urslf}</td>  </tr>   
                 <tr > <td> Why would you attend AUP's competion : {item.why_aup}</td>  </tr> 
                 <tr > <td> Link CV : {item.cv}</td>  </tr>   
                 <tr > <td> Link Github : {item.github}</td>  </tr>   
                 <tr> <td> Link Linkedin : {item.linkedin}</td>  </tr>   
                 <tr > <td> Any comments : {item.comments}</td>  </tr>   


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