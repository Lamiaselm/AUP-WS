import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import LoginRegisterScreen from './Screens/LoginRegisterScreen';

function App() {
  return (
   
  
      <Router>
      
     <Route exact path="/" component={Home}  />
     <Route exact path="/LoginRegister" component={LoginRegisterScreen} />
     <Route exact path="/Login" component={Login} />
   
   
    </Router>
  );
}

export default App;
