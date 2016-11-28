import React, { Component } from 'react';

export default class TimerForm extends Component {
  onFormSubmit(e) {
    e.preventDefault();

    let strSeconds = this.refs.seconds.value;

    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetTimer(parseInt(strSeconds, 10));
    }
  }

  render() {
    return (
      <div>
        <form ref="form" onSubmit={this.onFormSubmit.bind(this)} className="timer-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds" />
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
}
