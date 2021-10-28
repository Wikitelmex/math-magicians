import React from 'react';
import './Calculator.css';
import calculate from '../../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
  }

  stateMod(e) {
    const x = calculate(this.state, e);
    this.setState(() => ({
      total: x.total,
      next: x.next,
      operation: x.operation,
    }));
  }

  render() {
    return (
      <div className="calculator" data-testid="Calculator">
        <input className="w-100 button-border border-0 bg-secondary text-light screen pe-1 ps-1" type="text" value={this.state.next} />
        <div className="w-100">
          <button className="button-border col-3 border-1" type="button" onClick={() => this.stateMod('AC')}><small>AC</small></button>
          <button className="button-border col-3 border-1" type="button" onClick={() => this.stateMod('+/-')}>&#177;</button>
          <button className="button-border col-3 border-1" type="button" onClick={() => this.stateMod('%')}>%</button>
          <button className="button-border col-3 border-1 bg-warning" type="button" onClick={() => this.stateMod('÷')}>&#247;</button>
          <button className="button-border col-3 border-1" type="button" onClick={() => this.stateMod('7')}>7</button>
          <button className="button-border col-3 border-1" type="button" onClick={() => this.stateMod('8')}>8</button>
          <button className="button-border col-3 border-1" type="button" onClick={() => this.stateMod('9')}>9</button>
          <button className="button-border col-3 border-1 bg-warning" type="button" onClick={() => this.stateMod('x')}>x</button>
          <button className="button-border col-3 border-1" type="button" onClick={() => this.stateMod('4')}>4</button>
          <button className="button-border col-3 border-1" type="button" onClick={() => this.stateMod('5')}>5</button>
          <button className="button-border col-3 border-1" type="button" onClick={() => this.stateMod('6')}>6</button>
          <button className="button-border col-3 border-1 bg-warning" type="button" onClick={() => this.stateMod('-')}>-</button>
          <button className="button-border col-3 border-1" type="button" onClick={() => this.stateMod('1')}>1</button>
          <button className="button-border col-3 border-1" type="button" onClick={() => this.stateMod('2')}>2</button>
          <button className="button-border col-3 border-1" type="button" onClick={() => this.stateMod('3')}>3</button>
          <button className="button-border col-3 border-1 bg-warning" type="button" onClick={() => this.stateMod('+')}>+</button>
          <button className="button-border col-6 border-1" type="button" onClick={() => this.stateMod('0')}>0</button>
          <button className="button-border col-3 border-1" type="button" onClick={() => this.stateMod('.')}>.</button>
          <button className="button-border col-3 border-1 bg-warning" type="button" onClick={() => this.stateMod('=')}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
