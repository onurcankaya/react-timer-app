import React from 'react';
import Nav from './Nav';
import Stopwatch from './Stopwatch';

export default (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav />
          <p>Rendered Main.js</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};
