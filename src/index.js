import React from 'react';
import ReactDOM from 'react-dom';
import cssIndex from './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import Example from "feature/component/example";
import ColorsShowcase from "containers/sections/showcase/blocks/ColorsShowcase";

function Component() {
  return (
    <div className={cssIndex.medium}>Component sdf asdf</div>
  );
}

function App() {
  return (
    <div>
      <Component />
      <Example />
      <ColorsShowcase />
    </div>

  );
}

ReactDOM.render(<App />, document.getElementById('app'));
