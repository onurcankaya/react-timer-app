import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Stopwatch from 'Stopwatch';

describe('Stopwatch', () => {
  it('should exist', () => {
    expect(Stopwatch).toExist();
  });

  it('should start stopwatch on started status', (done) => {
    let stopwatch = TestUtils.renderIntoDocument(<Stopwatch />);

    stopwatch.handleStatusChange('started');
    expect(stopwatch.state.count).toBe(0);

    setTimeout(() => {
      expect(stopwatch.state.stopwatchStatus).toBe('started');
      expect(stopwatch.state.count).toBe(1);
      done();
    }, 1001);
  });

  it('should pause stopwatch on paused status', (done) => {
    let stopwatch = TestUtils.renderIntoDocument(<Stopwatch />);

    stopwatch.setState({count: 3});
    stopwatch.handleStatusChange('started');
    stopwatch.handleStatusChange('paused');

    setTimeout(() => {
      expect(stopwatch.state.stopwatchStatus).toBe('paused');
      expect(stopwatch.state.count).toBe(3);
      done();
    }, 1001);
  });

  it('should clear stopwatch on stopped status', (done) => {
    let stopwatch = TestUtils.renderIntoDocument(<Stopwatch />);

    stopwatch.setState({count: 10});
    stopwatch.handleStatusChange('started');
    stopwatch.handleStatusChange('stopped');

    setTimeout(() => {
      expect(stopwatch.state.stopwatchStatus).toBe('stopped');
      expect(stopwatch.state.count).toBe(0);
      done();
    }, 1001);
  });
});
