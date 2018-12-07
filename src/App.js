import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Login from './containers/Login/Login';
import SignUp from './containers/Login/SignUp/SignUp';
import Main from './containers/Main/Main'

class App extends Component {
  render () {
    return (        
      <div>   
        
        <Route path = "/" exact component = { Login }/>
        <Route path = "/signup" component = { SignUp }/>
        <Route path = "/main" component = { Main }/>
        
      </div>     
    );
  }
}

export default App;
