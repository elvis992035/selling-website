import React, { Component } from 'react';

import Logo from '../../components/Logo/Logo';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button'

import  './Login.css';

class Login extends Component {

    render() {       

        return (

            <div className = "loginWrapper">

               <a href = "#"> Sign up </a>

               <Logo />

               <div>Building Product Selection Playform</div>

               <Input placeholder="email"/>
               <Input placeholder="password" />

               <Button/>

            </div>

        );
    }
}

export default Login;