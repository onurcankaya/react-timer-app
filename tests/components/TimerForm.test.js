import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import TimerForm from 'TimerForm';

describe('TimerForm', () => {
  it('should exist', () => {
    expect(TimerForm).toExist();
  });

  it('should call onSetTimer if valid seconds entered', () => {
    let spy = expect.createSpy();
    let timerForm = TestUtils.renderIntoDocument(<TimerForm onSetTimer={spy} />);
    let $el = $(ReactDOM.findDOMNode(timerForm));

    timerForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetTimer if invalid seconds entered', () => {
    let spy = expect.createSpy();
    let timerForm = TestUtils.renderIntoDocument(<TimerForm onSetTimer={spy} />);
    let $el = $(ReactDOM.findDOMNode(timerForm));

    timerForm.refs.seconds.value = 'abc';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
