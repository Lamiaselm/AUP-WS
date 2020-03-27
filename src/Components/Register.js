import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
    constructor() {
        super()
        this.state = {
            nom: '',
            prenom: '',
            email: '',
            password: '',
            confirm_password:'',
            errors: {}
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit (e) {
        const password=this.state.password;
        const confirm_password=this.state.confirm_password;
        if (password !== confirm_password){
            alert("password doesnt match please confirm ur password correctly");
        }else {
        e.preventDefault()

        const newUser = {
            nom: this.state.nom ,
            prenom:this.state.prenom,
            email: this.state.email,
            password: this.state.password
        }

        register(newUser).then(res => {
            this.props.history.push(`/login`)
        })
    }
    }

    render () {
        return (
            <div className="auth-wrapper">
            <div className="auth-inner">
            <form noValidate onSubmit={this.onSubmit}>
            <h3>Sign Up</h3>

            <div className="form-group">
                                <label htmlFor="name">Last name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="nom"
                                    placeholder="Enter Last name"
                                    value={this.state.nom}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">First name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="prenom"
                                    placeholder="Enter First name"
                                    value={this.state.prenom}
                                    onChange={this.onChange}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
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
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm_password">Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="confirm_password"
                                    placeholder="Confirm Password"
                                    value={this.state.confirm_password}
                                    onChange={this.onChange}
                                />
                            </div>

            <button type="submit" className="btn btn-primary btn-block" >Sign Up !</button>
            <p className="forgot-password text-right">
                Already registered <a href="/login">sign in?</a>
            </p>
        </form>
        </div>
        </div>
        )
    }
}

export default Register










