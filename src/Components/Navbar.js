import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Sidebar from './Sidebar'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/login`)
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
        <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
      </ul>
    )

    return (
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <button className="navbar-toggler" >
          
          
       </button>
       

        <div
         className="collapse navbar-collapse" id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
      
    )
  }
}

export default withRouter(Landing)