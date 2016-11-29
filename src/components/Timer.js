import React, { Component } from 'react';
import Clock from 'Clock';
import TimerForm from 'TimerForm';
import Controls from 'Controls';

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
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer = null;
          break;
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  startTimer() {
    this.timer = setInterval(() => {
      let newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if (newCount === 0) {
        this.setState({
          timerStatus: 'stopped'
        });
      }
    }, 1000);
  }

  handleSetTimer(seconds) {
    this.setState({
      count: seconds,
      timerStatus: 'started'
    });
  }

  handleStatusChange(newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  }

  render() {
    let {count, timerStatus} = this.state;
    let renderControlArea = () => {
      if (timerStatus !== 'stopped') {
        return <Controls timerStatus={timerStatus} onStatusChange={this.handleStatusChange.bind(this)} />
      } else {
        return <TimerForm onSetTimer={this.handleSetTimer.bind(this)} />
      }
    };

    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
}
