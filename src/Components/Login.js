import React, { Component } from 'react'
import { login } from './UserFunctions'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errors: {},
            loggedin:false,
            
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
 

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentDidMount(){
       var token=localStorage.getItem('usertoken')
       if(token)
       { this.props.history.push(`/profile`)}
       else { this.props.history.push(`/login`)}

      
    }
    onSubmit(e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password
        }

        login(user).then(res => {
            if (res) {
                this.setState({
                    loggedin:true,
                });
                this.props.history.push(`/profile`)
            } else {alert("PLEASEENTER YOUR EMAIL/PASSWORD CORRECTLY ")}
        })
    }

    render() {
        return (
            <div>
            <img className="my-container" />
            <div className="container">
               
            <div className="container-inner">
            <form noValidate onSubmit={this.onSubmit}>
                    <h3>Log in</h3>
    
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                    </div>
    
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
    
                    <button type="submit" className="btn  btn-block loginF">Log in</button>
                    <p className="forgot-password text-right">
                        new account ? <a href="/register">Sign Up!</a>
                    </p>
                </form>
                </div>
                </div>
                </div>
        )
    }
}

export default Login




























