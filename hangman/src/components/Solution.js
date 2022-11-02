import React, { Component } from 'react';

export class Solution extends Component {
    render(){
        let underscores=["_"," ","_"," ","_"," ","_"]
        let results= underscores.map(underscore => <span>{underscore}</span>);
        results.push(<div className='hint'>Your ideal mode when u code</div>)
        return results
    }
}