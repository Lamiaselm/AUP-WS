import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Login from './Components/Login'
import Register from './Components/Register'
import Profile from './Screens/Profile'
import Table from './Components/Table'
import Application from './Screens/Application'
import Home from './Components/Home'
import Detail from './Screens/Detail'
import Statut from './Components/Statut'






class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/application" component={Application} />
            <Route exact path="/table" component={Table} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/detail" component={Detail} />
            <Route exact path="/statut" component={Statut} />
         
        </div>
      </Router>
    )
  }
}

export default App