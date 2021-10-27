import React, { lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

const LazyCalculator = lazy(() => import('./components/Calculator/Calculator'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Math Magicians on building...
        </h2>
        <p>By Alex</p>
        <Suspense fallback="Loading calculator...">
          <LazyCalculator />
        </Suspense>
        <br />
      </header>
    </div>
  );
}

export default App;
