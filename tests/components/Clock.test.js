import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';
import Clock from 'Clock';

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });
});

describe('render', () => {
  it('should render clock to output', () => {
    let clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
    let $el = $(ReactDOM.findDOMNode(clock));
    let actualText = $el.find('.clock-text').text();

    expect(actualText).toBe('01:02');
  });
});

describe('formatSeconds', () => {
  it('should format seconds', () => {
    let clock = TestUtils.renderIntoDocument(<Clock/>);
    let seconds = 615;
    let expected = '10:15';
    let formattedSeconds = clock.formatSeconds(seconds);

    expect(formattedSeconds).toBe(expected);
  });

  it('should format seconds when min/sec are less than 10', () => {
    let clock = TestUtils.renderIntoDocument(<Clock/>);
    let seconds = 61;
    let expected = '01:01';
    let formattedSeconds = clock.formatSeconds(seconds);

    expect(formattedSeconds).toBe(expected);
  });
});
