import React, { Component } from 'react';
import Clock from 'Clock';

export default class Timer extends Component {
  render() {
    return (
      <div>
        <Clock totalSeconds={129} />
      </div>
    );
  }
}
