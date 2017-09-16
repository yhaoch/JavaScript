import React,{ Component, PropTypes } from 'react'

class Counter1 extends Component{
    constructor(props){
        super(props);

        this.onClickAdd = this.onClickAdd.bind(this);        
        this.onClickDec = this.onClickDec.bind(this);

        state : {
            count : props.initial_value
        };
    }

    onClickAdd(){
        //this.setState({count : this.state.count + 1});
        this.onUpdate(true);
    }

    onClickDec(){
        this.onUpdate(false);
    }

    onUpdate(isAdd){
        const previous = this.state.count;
        const newvalue = isAdd ? this.state.count + 1 : this.state.count - 1;
        this.setState(newvalue);
        this.props.onupdate(newvalue,previous);
    }

    render(){
        return(
            <div>
                <Button onClick={this.onClickAdd}>+</Button>
                <Button onClick={this.onClickDec}>-</Button>
                <span>{caption} count : {this.state.count}</span>
            </div>
        );
    }
}

Counter1.PropTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    onUpdate: PropTypes.func
}

Counter1.defaultProps = {
    initial_value: 0,
    onupdate: f => f
}


export default Counter1;