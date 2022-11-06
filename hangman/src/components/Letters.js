import React, { Component } from 'react';
import { Letter } from './Letter'
export class Letters extends Component {
    render(){
        return(<div className='letters' >
            <div>Available Letters</div>
            {Object.keys(this.props.letterStatus).map(l=><Letter letter={l} cross={this.props.letterStatus[l] ? 1: 0} selectLetter={this.props.selectLetter}/>)}
        </div>)
    }
}