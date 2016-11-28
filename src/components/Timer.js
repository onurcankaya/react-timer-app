import React, { Component } from 'react';
import Clock from 'Clock';
import TimerForm from './TimerForm';

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  handleSetTimer(seconds) {
    this.setState({
      count: seconds
    });
  }

  render() {
    let {count} = this.state;

    return (
      <div>
        <Clock totalSeconds={count} />
        <TimerForm onSetTimer={this.handleSetTimer.bind(this)} />
      </div>
    );
  }
}
