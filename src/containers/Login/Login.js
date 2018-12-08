import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Logo from '../../components/Logo/Logo';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button'

import  './Login.css';

class Login extends Component {

    state = {
        email: null,
        password: null
    }

    loginHandler = (event) => {

        event.preventDefault();

        let user = {
          email: this.state.email,
          password: this.state.password
        }

        axios.post('http://localhost:2000/login', user)
        .then(res => {
            localStorage.setItem('usertoken', JSON.stringify(res.data));
            this.props.history.push('/main');
        })

        .catch(err => console.log(err));

      }

      inputHandler = (event) => {
        this.setState({[event.target.name] : event.target.value })
      }

    render() {       

        return (

            <div className = "loginWrapper">

               <div className = "Signup">
                   <Link to = "/signup" > Sign Up </Link>
               </div>

               <div>  
                   <Logo />
               </div>

               <br/>

               <div> Building Product Selection Playform </div>

               <br/>

               <form>

               <Input placeholder = "Email" name = "email" onChange = {this.inputHandler} />
               <br/>
               <Input placeholder = "Password" name = "password" onChange = {this.inputHandler} />

               </form>

               <br/>               

                <Button onClick = {this.loginHandler} label = "Log in"  /> 

            </div>

        );
    }
}

export default Login;