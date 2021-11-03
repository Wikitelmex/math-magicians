import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import React from 'react';

import CalculatorPage from './components/pages/CalculatorPage';
import HomePage from './components/pages/HomePage';
import QuotePage from './components/pages/QuotePage';

import './App.css';

function App() {
  return (

    <div className="m-3">
      <Router>
        <div data-testid="NavMenu">
          <nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top">
            <div className="container-fluid">
              <Link className="navbar-brand h1" to="/">Math Magicians</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse me-auto" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto text-light">
                  <Link to="/" className="nav-link">Home</Link>
                  <Link to="/Calculator" className="nav-link">Calculator</Link>
                  <Link to="/Quote" className="nav-link">Quote</Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <br />
        <br />
        <br />
        <Switch>
          <Route path="/Calculator">
            <CalculatorPage />
          </Route>
          <Route path="/Quote">
            <QuotePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
