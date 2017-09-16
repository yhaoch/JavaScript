import React, { Component, PropTypes } from 'react';

const buttonStyle = {
  margin: '10px'
};

class Counter extends Component {

  constructor(props) {
    console.log('enter constructor: ' + props.caption);
    super(props);

    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

    this.state = {
      count: props.initValue
    }
  }

  /*
  getInitialState() {
    console.log('enter getInitialState');
  }

  getDefaultProps() {
    console.log('enter getDefaultProps');
  }
  */
  //只要父组件调用了render函数，作为子类，就会自动调用下面的函数,并不能保证nextProps和this.props是相同的或者不相同的
  componentWillReceiveProps(nextProps) {
    console.log('enter componentWillReceiveProps ' + this.props.caption)
  }

  componentWillMount() {
    console.log('enter componentWillMount ' + this.props.caption);
  }

  componentDidMount() {
    console.log('enter componentDidMount ' + this.props.caption);
    //在这里可以做一些jquery的操作 不过这只是装载上去了
  }

  onClickIncrementButton() {
    this.setState({count: this.state.count + 1});
  }

  onClickDecrementButton() {
    this.setState({count: this.state.count - 1});
  }
  //重要 有返回值 boolean
  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
           (nextState.count !== this.state.count);
  }
  //重要 有返回值 用来构造DOM
  render() {
    console.log('enter render ' + this.props.caption);
    //ES6 解构赋值 props是一个object caption是其中的一个属性 就应该这么用。
    const {caption} = this.props;
    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    );
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number
};

Counter.defaultProps = {
  initValue: 0
};

export default Counter;

