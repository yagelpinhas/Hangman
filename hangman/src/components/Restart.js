import React, { Component } from 'react';

export class Restart extends Component {
    render(){
        return(<div>
            <button onClick={this.props.restart}>Restart</button>
        </div>)
    }
}