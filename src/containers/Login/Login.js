import React, { Component } from 'react';

import Logo from '../../components/Logo/Logo';
import Input from '../../components/Input/Input';

import  './Login.css';

class Login extends Component {

    render() {       

        return (

            <div className = "loginWrapper">

               <a> Sign up </a>

               <Logo />

               <div>Building Product Selection Playform</div>

               <Input name="aaa"/>
               <Input  />

            </div>

        );
    }
}

export default Login;