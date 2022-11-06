import React, { Component } from 'react';

export class EndGame extends Component {
    render(){
        return(<div>
           {this.props.validateEnd()==1 ? "Congratulations" : this.props.validateEnd()==-1 ?`The Secret word is ${this.props.word}`: ""}
        </div>)
    }
}