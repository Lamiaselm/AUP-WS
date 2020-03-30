import React from 'react';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar'
import { getProfile } from '../Components/UserFunctions'
import Popup from '../Components/Popup'
import '../App.css'
import { push } from 'react-burger-menu';
class Application extends React.Component{
    constructor(){
        super();
        this.state={
            nom:"",
            prenom:"",
            email:"",
            tshirt:"",
            abt_urslf:"",
            why_aup:"",
            team:"",
            cv:"",
            github:"",
            linkedin:"",
            comments:"",
            random:0,
            showPopup: false ,
            result:'',
            submitted:false ,
            
        }
         }
       
         componentDidMount(){
             if (this.state.submitted==true)
             {
                this.props.history.push(`/statut`)
             }

         }
    submit() {
       var team=this.state.team
       console.log(team)
       if (team==1){
        function makeid(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
         }
         var code=makeid(15)
         
         console.log(code)
         this.setState({  
            showPopup: true ,
            result:code,
            submitted:true,
       });
       console.log(this.state.result)
         
       }
       
        
        fetch('http://127.0.0.1:8000/api/save',{
            method:'post',
            body:JSON.stringify(this.state),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
        }
        ).then(response => { 
            
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }

   
    render() {  
        return(
         
            <div> 
                <Sidebar/>
                <Navbar/>
                {this.state.showPopup== true && alert('ur code team is : '+this.state.result)  
                  }
                

                   
                  <div className="container">
                      <div className="container-inner">
                          <form noValidate onSubmit={this.submit} >
                              <h3> Application Form</h3>
                              
                                <div className="form-group">
                                 <label>Family Name</label>
                                 <input type="text" className="form-control" placeholder="Enter here " name="nom" value={this.state.nom} onChange={(item)=>{this.setState({nom:item.target.value})}}/>
                                 </div>
                                 <div className="form-group">
                                 <label>First Name</label>
                                 <input type="text" className="form-control" placeholder="Enter here " name="prenom" value={this.state.prenom} onChange={(item)=>{this.setState({prenom:item.target.value})}}/>
                                 </div>
                                 <div className="form-group">
                                 <label>Email address</label>
                                 <input type="email" className="form-control" placeholder="Enter here " name="email" value={this.state.email} onChange={(item)=>{this.setState({email:item.target.value})}}/>
                                 </div>
                                 <div className="form-group">
                                 <label>T-shirt size</label>
                                 <input type="text" className="form-control" placeholder="Enter here " name="tshirt" value={this.state.tshirt} onChange={(item)=>{this.setState({tshirt:item.target.value})}}/>
                                 </div>
                                 <div className="form-group">
                                 <label>Tell us about yourself !</label>
                                 <input type="text" className="form-control" placeholder="Enter here " name="abt_urslf" value={this.state.abt_urslf} onChange={(item)=>{this.setState({abt_urslf:item.target.value})}}/>
                                 </div>
                                 <div className="form-group">
                                 <label>Why would you attend Algiers'up competition ?</label>
                                 <input type="text" className="form-control" placeholder="Enter here " name="why_aup" value={this.state.why_aup} onChange={(item)=>{this.setState({why_aup:item.target.value})}}/>
                                 </div>
                                 <div className="form-group">
                                 <label>Do you have a team ? </label>
                                 <select  className="form-control" onChange={(item)=>{this.setState({team:item.target.value})}} value={this.state.team} >
                                     <option  value="1" >Oui</option>
                                     <option  value="0" >Non</option>
                                 </select>
                                 </div>
                                 <div className="form-group">
                                 <label> Attach your CV here  </label>
                                 <input type="text" className="form-control" placeholder="Enter here " name="cv" value={this.state.cv} onChange={(item)=>{this.setState({cv:item.target.value})}} />
                                 </div>
                                 <div className="form-group">
                                 <label>Link to your Github</label>
                                 <input type="text" className="form-control" placeholder="Enter here " name="github" value={this.state.github} onChange={(item)=>{this.setState({github:item.target.value})}}/>
                                 </div>
                                 <div className="form-group">
                                 <label>Link to your Linkedin</label>
                                 <input type="text" className="form-control" placeholder="Enter here " name="linkedin" value={this.state.linkedin} onChange={(item)=>{this.setState({linkedin:item.target.value})}}/>
                                 </div>
                                 <div className="form-group">
                                 <label>Any comments ?</label>
                                 <input type="text" className="form-control" placeholder="Enter here " name="comments" value={this.state.comments} onChange={(item)=>{this.setState({comments:item.target.value})}}/>
                                 </div>
                                 <div className="form-group">
                                 <button type="submit" className="btn btn-primary btn-block" onClick={()=>{this.submit()}}>Submit</button>
                                 
                                 </div>

                          </form>

                      </div>

                  </div>
            
            </div>
          
        );
    }
}
export default Application ;