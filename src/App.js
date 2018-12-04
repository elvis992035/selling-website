import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render () {
    return (
      <div>
        
          <Switch>
            {/* <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} /> */}
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        
      </div>
    );
  }
}

export default App;
