import React, { Component, PropTypes } from 'react';

export default class Controls extends Component {
  static propTypes = {
    timerStatus: PropTypes.string.isRequired
  };

  render() {
    let {timerStatus} = this.props;
    let renderStartStopButton = () => {
      if (timerStatus === 'started') {
        return <button className="button secondary">Pause</button>;
      } else if (timerStatus === 'paused') {
        return <button className="button primary">Start</button>;
      }
    };

    return (
      <div className="controls"> 
        {renderStartStopButton()}
        <button className="button alert hollow">Clear</button>
      </div>
    );
  }
}
