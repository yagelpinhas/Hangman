import React, { Component } from 'react';
import { Letter } from './Letter'
export class Letters extends Component {
    render(){
        return(<div className='letters' >
            <div>Available Letters</div>
            <Letter />
        </div>)
    }
}