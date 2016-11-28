import React, { Component } from 'react';
import Clock from 'Clock';
import TimerForm from './TimerForm';

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      timerStatus: 'stopped'
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  }

  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  }

  handleSetTimer(seconds) {
    this.setState({
      count: seconds,
      timerStatus: 'started'
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
