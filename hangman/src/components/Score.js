import React, { Component } from 'react';

export class Score extends Component {
    render(){
        return <div className='score'>{this.props.score}</div>
    }
}