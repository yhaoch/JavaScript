import React, { Component } from 'react';

class Counter extends Component{
    //data and initial
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {count: 0};
    }
    //event
    handleClick(){
        this.setState({count: this.state.count + 1}); 
     };

    handleReset(){
        this.setState({count: this.state.count = 0});
    };
    render(){
        //css
        const CounterSytle = {
            margin: '100px',
        };
        return(
            <div style = {CounterSytle}>
                <button onClick = {this.handleClick}>Add</button>
                <button onClick = {this.handleReset}>Reset</button> 
                <div>
                    <p>Count: {this.state.count}</p>
                </div>
            </div>
        );
    };
}

export default Counter;