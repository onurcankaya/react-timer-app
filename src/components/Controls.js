import React, { Component, PropTypes } from 'react';

export default class Controls extends Component {
  static propTypes = {
    timerStatus: PropTypes.string.isRequired,
    onStatusChange: PropTypes.func.isRequired
  };

  onStatusChange(newStatus) {
    return () => {
      this.props.onStatusChange(newStatus);
    }
  }

  render() {
    let {timerStatus} = this.props;
    let renderStartStopButton = () => {
      if (timerStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>;
      } else {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>;
      }    
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
}
