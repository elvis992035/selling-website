import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div>
                <input type = "text" placeholder = {this.props.placeholder} 
                name = {this.props.name} onChange = {this.props.onChange} />
            </div>
        );
    }
}

export default Input;