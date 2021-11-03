import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const handleClick = (e) => {
    const x = calculate(state, e);
    setState(() => ({
      total: x.total,
      next: x.next,
      operation: x.operation,
    }));
  };

  return (
    <div className="calculator" data-testid="Calculator">
      <input className="w-100 button-border border-0 bg-secondary text-light screen pe-1 ps-1" onChange={() => {}} type="text" value={state.next} />
      <div className="w-100">
        <button className="button-border col-3 border-1" type="button" onClick={() => handleClick('AC')}><small>AC</small></button>
        <button className="button-border col-3 border-1" type="button" onClick={() => handleClick('+/-')}>&#177;</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => handleClick('%')}>%</button>
        <button className="button-border col-3 border-1 bg-warning" type="button" onClick={() => handleClick('÷')}>&#247;</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => handleClick('7')}>7</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => handleClick('8')}>8</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => handleClick('9')}>9</button>
        <button className="button-border col-3 border-1 bg-warning" type="button" onClick={() => handleClick('x')}>x</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => handleClick('4')}>4</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => handleClick('5')}>5</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => handleClick('6')}>6</button>
        <button className="button-border col-3 border-1 bg-warning" type="button" onClick={() => handleClick('-')}>-</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => handleClick('1')}>1</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => handleClick('2')}>2</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => handleClick('3')}>3</button>
        <button className="button-border col-3 border-1 bg-warning" type="button" onClick={() => handleClick('+')}>+</button>
        <button className="button-border col-6 border-1" type="button" onClick={() => handleClick('0')}>0</button>
        <button className="button-border col-3 border-1" type="button" onClick={() => handleClick('.')}>.</button>
        <button className="button-border col-3 border-1 bg-warning" type="button" onClick={() => handleClick('=')}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
