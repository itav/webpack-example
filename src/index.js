import React from 'react';
import ReactDOM from 'react-dom';
import cssIndex from './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import Example from "feature/component/example";

function Component() {
  return (
    <div className={cssIndex.medium}>Component</div>
  );
}

function App() {
  return (
    <div>
      <Component />
      <Example />
    </div>

  );
}

ReactDOM.render(<App />, document.getElementById('app'));
