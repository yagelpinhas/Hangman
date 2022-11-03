import React, { Component } from 'react';

export class Letter extends Component {
    render(){
        return(<span class={this.props.cross==1? "cross" : "noncross"}>
            {this.props.letter}
        </span>)
    }
}