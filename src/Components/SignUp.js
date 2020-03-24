import React from 'react';
class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            prenom:"",
            nom:"",
            email:"",
            password:"",
            confirm_password:""
        }

    }
    signup() {
         const password=this.state.password;
         const confirm_password=this.state.confirm_password;
          console.log(password);
          console.log(confirm_password);
          
          if (password !== confirm_password){
              alert("password doesnt match please confirm ur password correctly");
          }
          
            else {

        
        fetch('http://127.0.0.1:8000/api/signuppost',{
            method:'post',
            body:JSON.stringify(this.state),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            }
        }
        ).then(function(response){
            response.json().then(function(resp){console.log(resp)})
        })
        console.log(this.state); }
         

            }
    render (){
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form method="POST" >
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" name="prenom" value={this.state.prenom} onChange={(item)=>{this.setState({prenom:item.target.value})}} />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" name="nom" value={this.state.nom} onChange={(item)=>{this.setState({nom:item.target.value})}}/>
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" name="email"value={this.state.email} onChange={(item)=>{this.setState({email:item.target.value})}}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={(item)=>{this.setState({password:item.target.value})}}/>
            </div>
             <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name="confirm_password" value={this.state.confirm_password} onChange={(item)=>{this.setState({confirm_password:item.target.value})}}/>
            </div>

            <button type="submit" className="btn btn-primary btn-block" onClick={()=>{this.signup()}}>Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="/login">sign in?</a>
            </p>
        </form>
        </div>
        </div>

        );
    }
}
export default SignUp;