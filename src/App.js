// lazy:  api provide a way to load the components lazily, this can be done by dynamic imports.
// Suspense: api provide a way to load a specific component lazily without affecting the other components load. fallback props provide us display another
// contentuntill it loads the component.

import React, { Component, lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

// Dynamic import
const MyComp = lazy(() => import ("./React-lazy/components/MyComp"));

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <Suspense fallback={<div>Loading.....</div>}>
          <MyComp />
        </Suspense>
      </div>
    );
  }
}

export default App;
