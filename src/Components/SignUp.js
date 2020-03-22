import React from 'react';
class SignUp extends React.Component{
    render (){
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form method="POST" action="http://127.0.0.1:8000/api/save">
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" name="prenom" />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" name="nom"/>
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" name="email"/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name="password"/>
            </div>
             <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" placeholder="Enter password" name="confirm_password"/>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="/Login">sign in?</a>
            </p>
        </form>
        </div>
        </div>

        );
    }
}
export default SignUp;