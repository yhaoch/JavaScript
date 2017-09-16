import React, { Component, PropsType} from 'react';

class ControlPanel1 extends Component{
    constructor(props){
        super(props);

        this.onupdatedeal = this.onupdatedeal.bind(this);

        this.initValues = [ 0, 10, 20];
        const initSum = this.initValues.reduce((a, b) => a+b, 0);
        state : {
            sum: initSum
        }
    }

    onupdatedeal(newvalue,previous){
        this.setState({count : this.count + (newvalue - previous)});
    }

    render(){
        return(
        <div>
            <Counter1 onupdate={this.onupdatedeal} caption="first"></Counter1>
            <Counter1 onupdate={this.onupdatedeal} caption="second" initial_value = {this.initValues[0]}></Counter1>
            <Counter1 onupdate={this.onupdatedeal} caption="third" initial_value = {this.initValues[1]}></Counter1>
        </div>);
    }
}

export default ControlPanel1;