import React from 'react';
import Nav from './Nav';

export default (props) => {
  return (
    <div>
      <div>
        <div>
          <Nav />
          {props.children}
        </div>
      </div>
    </div>
  );
};
