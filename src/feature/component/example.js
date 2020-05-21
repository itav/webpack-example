import React from 'react';
import cssExample from './example.css';
import cssColors from '../../style/colors.css';

function Example() {
  return (
    <div>
      <div className={'myGrayColor'}>From Example</div>
      <div className={cssExample.blue}>Another From Example</div>
    </div>
  );
}

export default Example;
