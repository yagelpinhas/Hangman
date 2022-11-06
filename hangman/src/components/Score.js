import React, { Component } from 'react';

export class Score extends Component {
    render(){
        return <div className={this.props.score>=80? "high-score": this.props.score>=50&&this.props.score<80 ? "medium-score" : "low-score"}>{this.props.score}</div>    
    }
}