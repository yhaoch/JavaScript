import React, { Component } from 'react';
import Counter from './Counter.js';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {

  constructor(props) {
    super(props);

    this.onCounterUpdate = this.onCounterUpdate.bind(this);

    this.initValues = [ 0, 10, 20];

    const initSum = this.initValues.reduce((a, b) => a+b, 0);
    this.state = {
      sum: initSum
    };
  }

  onCounterUpdate(newValue, previousValue) {
    const valueChange = newValue - previousValue;
    this.setState({ sum: this.state.sum + valueChange});
  }

  render() {
    return (
      <div style={style}>
        //这里 onUpdate 是在counter中添加的新属性 在counter中是一个什么也不执行的函数，现在被赋值成Panel里的函数了
        //从而实现了把子组件的数据反馈到父组件的功能
        <Counter onUpdate={this.onCounterUpdate} caption="First" />
        <Counter onUpdate={this.onCounterUpdate} caption="Second" initValue={this.initValues[1]} />
        <Counter onUpdate={this.onCounterUpdate} caption="Third" initValue={this.initValues[2]} />
        <hr/>
        <div>Total Count: {this.state.sum}</div>
      </div>
    );
  }
}

export default ControlPanel;
