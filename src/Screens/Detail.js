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
        console.log('http://127.0.0.1:8000/api/mely/'+id_app)
        fetch('http://127.0.0.1:8000/api/mely/'+id_app)
        
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items:Array.from([json]),
                    
                }
                ) 
               
                console.log(this.state.items)
            }).catch((err) => {
                console.log(err);
                console.log('hello')
                console.log(this.state.items)
            });

    }
    accept(){
        const {id_app}=this.props.location.state
        console.log(id_app)



        fetch('http://127.0.0.1:8000/api/accept/'+id_app,{
            method:'post',
          
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(this.state),
        }
        )
        alert("APPLICATION ACCEPTED *-*")
    
    }
    

    reject(){
        const {id_app}=this.props.location.state
        console.log(id_app)



        fetch('http://127.0.0.1:8000/api/reject/'+id_app,{
            method:'post',
          
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(this.state),
        }
        )
       
        alert("APPLICATION REJCTED u.u")
    }

    render (){
        const {items} =this.state
       
       
        return(
            
            <div>
              
            <Sidebar/>
            <Navbar/>
            <div className="containerDetail">
                <div className="jumbotron mt-4">
                    <div className="col-sm-6 mx-auto">
        <h4 className="text-center">Application detail</h4>  
            
             <table className="table">
                 
                 
                 {items.map(item => 
                 ( 
                 
                    <tbody>
                 <tr> <td>Family name : {item.nom}</td></tr>
                 <tr> <td>First name : {item.prenom}</td></tr>
                 <tr> <td>Email : {item.email}</td></tr>   
                 <tr> <td>T-Shirt size : {item.tshirt}</td></tr>   
                 <tr> <td>About you : {item.abt_urslf}</td></tr>   
                 <tr> <td>Why would you attend AUP's competion : {item.why_aup}</td></tr> 
                 <tr> <td>Link CV : {item.cv}</td></tr>   
                 <tr> <td>Link Github : {item.github}</td></tr>   
                 <tr> <td>Link Linkedin : {item.linkedin}</td></tr>   
                 <tr> <td>Any comments : {item.comments}</td></tr>   


                 </tbody>   
                 ))}
                 <br></br>
                 <div className="buttonDetail">
                 <button className="btn btn-danger"onClick={()=>{this.reject()}}>Reject</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                 <button className="btn btn-success" onClick={()=>{this.accept()}}>Accept</button>
                 </div>
             </table>
            </div>
            </div>
            </div>
                
            </div>
           
         
        );
                 }
    }

export default Detail;