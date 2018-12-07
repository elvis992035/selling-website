import React, { Component } from 'react';

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