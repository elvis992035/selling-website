import React, { Component } from 'react';
import axios from 'axios';

import Input from '../../../components/Input/Input'
import Button from '../../../components/Button/Button'

import './SignUp.css'


class SignUp extends Component {

    constructor(props){
        
        super(props);
        this.state = {

          firstName: null,
          lastName:null,
          password:null,
          email:null,

        }
        this.path = 'http://localhost:2000';
      }

      signupHandler = (e) => {
        this.setState({
          [e.target.name] : e.target.value
          
        })
        console.log(e.target.name + ":" + e.target.value);
      }

      signupSubmit = (e) => {

        e.preventDefault();

        let newUser = {
          email: this.state.email,
          password: this.state.password,
          firstName: this.state.firstName,
          lastName: this.state.lastName
        }

        axios.post(`http://localhost:2000/signup`, newUser)
          .then(res => {console.log(res); this.props.history.push('/')})
          .catch(err => console.log(err));

      }

    render() {
        return (
            <div className = "signupWrapper" >

                <h1> Sign Up </h1>

                <form>

                    <Input placeholder = "First Name" name = "firstName" onChange = {this.signupHandler} />
                    <br/>
                    <Input placeholder = "Last Name" name = "lastName" onChange = {this.signupHandler} />
                    <br/>
                    <Input placeholder = "Email" name = "email" onChange = {this.signupHandler} />
                    <br/>
                    <Input placeholder = "Password" name = "password" onChange = {this.signupHandler} />
                    <br/>

                    <Button onClick = {this.signupSubmit} label = "Sign Up"/>                                  
                    
                </form>                
                
            </div>
        );
    }
}

export default SignUp;