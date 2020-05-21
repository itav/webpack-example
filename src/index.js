import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

function Component() {
  return (
    <div className={'medium'}>Component</div>
  );
}

function App() {
  return (
    <Component />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
