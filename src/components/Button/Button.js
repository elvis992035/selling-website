import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
    render() {
        return (
            <div>
                <button type = "submit" onClick = {this.props.onClick}> {this.props.label} </button>
            </div>
        );
    }
}

export default Button;