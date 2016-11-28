import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Timer from 'Timer';

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleSetTimer', () => {
    it('should set state to started and countdown', (done) => {
      let timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleSetTimer(10);

      expect(timer.state.count).toBe(10);
      expect(timer.state.timerStatus).toBe('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(9);
        done();
      }, 1001)
    });

    it('should not set count to be negative', (done) => {
      let timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleSetTimer(1);

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        done();
      }, 3001)
    });
  });
});
