import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator" data-testid="Calculator">
        <input className="w-100 button-border border-0 bg-secondary text-light screen pe-1 ps-1" type="text" value="0" />
        <div className="w-100">
          <button className="button-border col-3 border-1" type="button"><small>AC</small></button>
          <button className="button-border col-3 border-1" type="button">&#177;</button>
          <button className="button-border col-3 border-1" type="button">%</button>
          <button className="button-border col-3 border-1 bg-warning" type="button">&#247;</button>
          <button className="button-border col-3 border-1" type="button">7</button>
          <button className="button-border col-3 border-1" type="button">8</button>
          <button className="button-border col-3 border-1" type="button">9</button>
          <button className="button-border col-3 border-1 bg-warning" type="button">x</button>
          <button className="button-border col-3 border-1" type="button">4</button>
          <button className="button-border col-3 border-1" type="button">5</button>
          <button className="button-border col-3 border-1" type="button">6</button>
          <button className="button-border col-3 border-1 bg-warning" type="button">-</button>
          <button className="button-border col-3 border-1" type="button">1</button>
          <button className="button-border col-3 border-1" type="button">2</button>
          <button className="button-border col-3 border-1" type="button">3</button>
          <button className="button-border col-3 border-1 bg-warning" type="button">+</button>
          <button className="button-border col-6 border-1" type="button">0</button>
          <button className="button-border col-3 border-1" type="button">.</button>
          <button className="button-border col-3 border-1 bg-warning" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
