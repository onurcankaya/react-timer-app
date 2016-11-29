import React, { Component } from 'react';
import Clock from 'Clock';
import Controls from 'Controls';

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      stopwatchStatus: 'stopped'
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.stopwatchStatus !== prevState.stopwatchStatus) {
      switch (this.state.stopwatchStatus) {
        case 'started':
          this.startStopwatch();
          break;
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused':
          clearInterval(this.stopwatch);
          this.stopwatch = null;
          break;
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.stopwatch);
    this.stopwatch = null;
  }

  startStopwatch() {
    this.stopwatch = setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  }

  handleSetStopwatch(seconds) {
    this.setState({
      count: seconds,
      stopwatchStatus: 'started'
    });
  }

  handleStatusChange(newStopwatchStatus) {
    this.setState({
      stopwatchStatus: newStopwatchStatus
    });
  }

  render() {
    let {count, stopwatchStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Stopwatch</h1>
        <Clock totalSeconds={count} />
        <Controls timerStatus={stopwatchStatus} onStatusChange={this.handleStatusChange.bind(this)} />
      </div>
    );
  }
}
